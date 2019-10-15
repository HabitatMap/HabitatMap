# HabitatMap blog & static pages

## Access

Website: https://habitatmap.lunarlogic.io/.

Hosting: https://app.netlify.com/sites/habitatmap/overview, credentials on [Lunar Logic wiki](https://sites.google.com/llp.pl/wiki/projects/habitatmap).

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


### CMS development mode

> You can use the test-repo backend to try out Netlify CMS without connecting to a Git repo. With this backend, you can write and publish content normally, but any changes will disapear when you reload the page.

This may be useful when you change configuration options for the CMS and want to test them without having to commit and push the changes.

Just edit the following lines in your `admin/config.yml` file as below.

```
backend:
  # name: git-gateway
  # branch: master
  name: test-repo
```

Do not push this change to the remote repository.


## Netlify Large Media

We're using Netlify Large Media, which means that most images (SVGs excluded at this point) in the repositiory are actually [Git FLS pointers](https://git-lfs.github.com/).

To work with that setup locally, e.g. add new assets to the repository by hand and not upload via CMS (e.g. those used in the layout), you need to go through the following [large media requirements](https://www.netlify.com/docs/large-media/#requirements) to install missing tools.

### Image transformations

Using NLM enables us to request specific size versions of images with [image transformations](https://www.netlify.com/docs/image-transformation/).

There are limits to how many transformations can happen during a month in the free plan, you can check the current number of transformations in the [Large Media panel on the Netlify dashboard](https://app.netlify.com/sites/habitatmap/settings/large-media).
