#!/bin/bash -e

PATH_TO_APP="$1"

if [ -z $PATH_TO_APP ] ; then
  echo "please provide relative path to the app; eg  ../madrid"
  exit 1
fi

rsync -av dist/ "$PATH_TO_APP/node_modules/@quintype/amp/dist"
