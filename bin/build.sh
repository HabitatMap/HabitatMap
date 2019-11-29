#!/usr/bin/env bash
set -x

jekyll build
ALGOLIA_API_KEY="$ALGOLIA_API_KEY" jekyll algolia
