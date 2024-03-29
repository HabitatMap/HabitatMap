[![Netlify Status](https://api.netlify.com/api/v1/badges/fdecfe4b-48cc-482e-b55e-1718b3f26da7/deploy-status)](https://app.netlify.com/sites/habitatmap/deploys)

# HabitatMap blog & static pages 

## Development

1. Install [Netlify Git's credential helper](https://github.com/netlify/netlify-credential-helper):
```bash
brew tap netlify/git-credential-netlify
brew install git-credential-netlify
```
2. Clone the repository.

3. Install gems:

```
bundle install
```

**Note:** If Bundler fails on installing `eventmachine`, try running `gem install eventmachine -- --with-cppflags=-I/usr/local/opt/openssl/include` to solve the issue.


4. Run locally:
```bash
bundle exec jekyll serve --watch
```

**Note:** If you change `_config.yml`, you must restart the server for the changes to take effect.

## CMS

The Netlify CMS dashboard is accessible at `/admin` after logging in with Netlify Identity Widget. To add a new user with CMS access rights you need to invite them from the Identity dashboard in Netlify.

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

**Do not push this change to the remote repository.**

## Netlify Large Media

We're using Netlify Large Media, which means that most images (SVGs excluded at this point) in the repositiory are actually [Git FLS pointers](https://git-lfs.github.com/).

To work with that setup locally, you need to go through the following [large media requirements](https://www.netlify.com/docs/large-media/#requirements) to install missing tools. You'll need to do this when you add new assets to the repository by hand, not via CMS (e.g. those that are used in the layout).

If you want to convert files that you not only added locally but were already in the remote repository, you'll need to use this command (replacing the include paths):
`git lfs migrate import --include="images/uploads/**" --include-ref=refs/heads/master`.

You might find this helpful: https://github.com/git-lfs/git-lfs/wiki/Tutorial.

### Image transformations

Using NLM enables us to request specific size versions of images with [image transformations](https://www.netlify.com/docs/image-transformation/).

There are limits to how many transformations can happen during a month in the free plan, you can check the current number of transformations in the Large Media panel on the Netlify dashboard.

## Algolia

Notice that only the Netlify production branch updates the search index (see [bin/build.sh](bin/build.sh)).
