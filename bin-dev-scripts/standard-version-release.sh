#!/bin/bash -e

BRANCH=$(git symbolic-ref --short HEAD)
echo "Is this a production release? [y/n]"
read ISPROD

case $ISPROD in

  y)
    npm install
    npm run jest
    npm run build
    git diff --quiet
    npm run docs:deploy
    npx standard-version
    ;;
  n)
    npm run build
    npx standard-version --prerelease "$BRANCH" --skip.changelog=true
    ;;
  *)
    echo "Invalid Input"
    exit 1
    ;;

esac

git push --follow-tags origin "$BRANCH"
