npm run build

cd dist

git init
git add -A 
git commit -m 'New Deployment'
git push -f git@github.com:qwtan98/DJMV-IS216Project.git master:gh-pages

cd -