setting up mjobs on git

---

In order to deploy frontend to GitHub Pages make sure you run following commands

```
cd mjobsfrontend
npm run build
cd ..
git add mjobsfrontend/dist -f
git commit -m "adding dist"
git subtree push --prefix mjobsfrontend/dist origin gh-pages
```
Frontend should be available at `https://michamichalski.github.io/mjobs/`
