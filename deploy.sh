npm run build
cd dist
git init
git add .
git commit -m 'deploy'
git push -u git@github.com:JuiHsuanLee0303/personal-website.git gh-pages
cd ..
