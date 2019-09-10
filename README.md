# HabitatMap blog & static pages

## Access

Website: https://habitatmap.lunarlogic.io/.

Hosting: https://app.netlify.com/sites/habitatmap/overview, credentials on Lunar Logic wiki.

CMS: https://habitatmap.lunarlogic.io/admin, log in per user.

## Run Locally

1. Clone the repo.

2. If you need to install the gems run `gem install bundler -v 2.0.1` and `bundle install`.

3. To run the local server and have it regenerate the site on changes run: `bundle exec jekyll serve --watch`.

4. It will be served at: `http://localhost:4000`.

Note: If you change `_config.yml`, you must restart the server for the changes to take effect.

## CMS

The Netlify CMS dashboard is accessible at https://habitatmap.lunarlogic.io/admin after logging in with Netlify Identity Widget.
To add a new user with CMS access rights you need to invite them from the Identity dashboard in Netlify: https://app.netlify.com/sites/habitatmap/identity.
