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
  npm install --legacy-peer-deps
  npm run jest
  npm run build
  npx standard-version --prerelease "$BRANCH" --skip.changelog=true
fi

git push --follow-tags origin "$BRANCH"
