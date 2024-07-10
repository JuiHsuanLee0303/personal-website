set -e
npm run build
git add .
git commit -m 'deploy'
git branch -M main
git push -u origin main
git subtree push --prefix dist origin gh-pages