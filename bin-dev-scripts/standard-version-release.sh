#!/bin/bash -e

BRANCH=$(git symbolic-ref --short HEAD)

if [ "$BRANCH" == 'master' ]
then
  npm install --legacy-peer-deps
  npm run jest
  npm run build:prod
  git diff --quiet
  npm run docs:deploy
  npx standard-version
else
  npm run build
  SAFE_BRANCH=$(echo "$BRANCH" | tr '/' '-')
  npx standard-version --prerelease "$SAFE_BRANCH" --skip.changelog=true
fi

git push --follow-tags origin "$BRANCH"
