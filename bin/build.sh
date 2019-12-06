#!/usr/bin/env bash
set -x

if [ "$CONTEXT" == "production" ]
then
  JEKYLL_ENV=production jekyll build
  ALGOLIA_API_KEY="$ALGOLIA_API_KEY" jekyll algolia
else
  jekyll build
fi
