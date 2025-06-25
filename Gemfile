source "https://rubygems.org"

ruby "3.3.0"

# Jekyll version
gem "jekyll"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-algolia"
  gem "jekyll-feed"
  gem "jekyll-import"
  gem "open_uri_redirections" # jekyll-import dependency
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Use compatible Sass converter
gem "jekyll-sass-converter", "~> 2.0"

# Windows and JRuby compatibility
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

gem "webrick", "~> 1.8"

# Add these gems for better Netlify compatibility
gem "bundler", "~> 2.2.32"
gem "rake"
