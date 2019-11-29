#!/usr/bin/env bash
set -x

jekyll build

if [ "$CONTEXT" == "production" ]
then
  ALGOLIA_API_KEY="$ALGOLIA_API_KEY" jekyll algolia
fi
