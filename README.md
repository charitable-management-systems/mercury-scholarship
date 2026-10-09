# Mercury University Scholarship Program

Single-page Gatsby site for the Mercury University Trade School scholarship program, deployed to GitHub Pages.

## Commands

Node 20 is required (`nvm use` reads `.nvmrc`).

```bash
npm install
npm run develop   # http://localhost:8000
npm run build
npm run typecheck
npm run deploy    # clean build, then push public/ to the gh-pages branch
```

Source lives on `main`; the built site lives on `gh-pages`.

## Yearly edits

`src/content/site.ts` holds the values that change:

- `APPLY_URL`: while `null`, the Apply buttons show "Applications opening soon". Set it to the application portal URL to turn them into links.
- `DEADLINE`: while `null`, the site says "to be announced". Set it to the date as it should read, e.g. `"March 16, 2027"`.
- Contact details and the header navigation.

Section text is in `src/sections/`, one file per heading.

## Domain

The site is served from https://mercuryuniversityscholarships.com. `static/CNAME` keeps the custom domain attached on every deploy; without it, `gh-pages` would wipe the CNAME file from the branch.

## Assets

- `src/assets/logo-white.svg` and `logo-black.svg` were converted from the supplied EPS lockups. The site uses the white one.
- `src/images/hero.jpg` is a 3200px copy of the supplied photo with the vehicle licence plate blurred.
