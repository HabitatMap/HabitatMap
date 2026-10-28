# Populates `description` for blog posts so jekyll-seo-tag emits a clean,
# length-controlled <meta name="description"> and og:description.
#
# jekyll-seo-tag resolves the description from `page.description` first, so by
# setting it here we stay the single source of truth (no duplicate tags in the
# layout). Priority:
#   1. `meta_description` from the CMS
#   2. `intro` from the CMS
#   3. the post's first paragraph
# The result is collapsed to one line and truncated so Google never shows a
# 700-character wall of text.
module HabitatMap
  class MetaDescriptionGenerator < Jekyll::Generator
    safe true
    priority :low

    MAX_LENGTH = 160

    def generate(site)
      site.posts.docs.each do |post|
        next if present?(post.data["description"])

        value = first_present(
          post.data["meta_description"],
          post.data["intro"],
          first_paragraph(post)
        )
        post.data["description"] = truncate(value) if value
      end
    end

    private

    def present?(str)
      str.is_a?(String) && !str.strip.empty?
    end

    def first_present(*values)
      values.find { |value| present?(value) }
    end

    # Pull the first real paragraph of prose from the post. We rely on Jekyll's
    # own excerpt (Markdown already rendered to HTML) so links become their text
    # and images drop out, then take the first non-empty <p> so leading images or
    # figures don't become the description.
    def first_paragraph(post)
      excerpt = post.data["excerpt"]
      html = excerpt.respond_to?(:output) ? excerpt.output : excerpt.to_s
      return nil if html.strip.empty?

      paragraph = html.scan(/<p[^>]*>(.*?)<\/p>/m)
                      .map { |match| strip_tags(match.first) }
                      .find { |text| present?(text) }

      paragraph || strip_tags(html)
    end

    def strip_tags(html)
      html.to_s.gsub(/<\/?[^>]*>/, " ")
    end

    def truncate(str)
      squished = str.to_s
                    .gsub(/\s+/, " ")
                    .gsub(/ ([.,;:!?])/, '\1') # tidy spaces left by stripped tags
                    .strip
      return squished if squished.length <= MAX_LENGTH

      # Reserve one character for the ellipsis so the result never exceeds the max.
      "#{squished[0...(MAX_LENGTH - 1)].sub(/\s+\S*\z/, '').rstrip}…"
    end
  end
end
