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
          first_paragraph(post.content)
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

    # Grab the first paragraph of the raw body and strip the obvious Markdown /
    # HTML noise so the fallback reads as plain prose.
    def first_paragraph(content)
      return nil if content.nil?

      paragraph = content.to_s.strip.split(/\n\s*\n/).first.to_s
      paragraph
        .gsub(/<\/?[^>]*>/, " ")          # html tags
        .gsub(/!?\[([^\]]*)\]\([^)]*\)/, '\1') # [text](url) / images -> text
        .gsub(/[#>*_`]/, " ")             # leftover markdown markers
    end

    def truncate(str)
      squished = str.to_s.gsub(/\s+/, " ").strip
      return squished if squished.length <= MAX_LENGTH

      "#{squished[0...MAX_LENGTH].sub(/\s+\S*\z/, '').rstrip}…"
    end
  end
end
