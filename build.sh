#!/bin/bash
cd $(dirname $0)
[ -d ./dist ] && rm -r dist

npm run prod

cp -r dep dist
cp -r font dist
cp empty.html proxy.html dist
echo 'build to `dist` done'

scp -r dist/*  bigfish@192.168.1.126:/home/bigfish/sites/fontAdjust

echo 'deploy to server success:'
date

