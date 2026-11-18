# Top Mountain Resort — website

One-page site for Top Mountain Resort, Diyatalawa, built from the Figma Make design
"Bootstrap Import Setup" (React + Vite, plain CSS, lucide-react icons — no Bootstrap).

## Run it

```
npm install
npm run dev       # http://localhost:5173
npm run build     # production files in dist/
npm run preview   # serve the production build
```

## Where things live

| What | File |
| --- | --- |
| Text, prices, stays, photos, phone number | `src/data/content.js` |
| Enquiry checks and the WhatsApp message | `src/lib/enquiry.js` |
| Page sections (header, hero, stays, …) | `src/sections/` |
| Pop-ups (enquiry, stay details, film, photo viewer) | `src/modals/` |
| Logo, eyebrow label, accessible modal | `src/components/` |
| All styling | `src/styles.css` |
| Photos, fonts, film, favicon | `public/` |

## Deploying (GitHub Pages)

Every push to `main` builds the site and publishes it to
**https://tharusha88.github.io/T2/** (`.github/workflows/deploy-pages.yml`).
You can also run it by hand from the repo's **Actions** tab → *Deploy to GitHub Pages* → *Run workflow*.

One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is served from the `/T2/` sub-folder (the repo name), so files in `public/` must be referenced
through `asset("images/…")` (`src/lib/asset.js`) in JavaScript. CSS `url(/…)` and `index.html` paths
are rewritten by Vite automatically. To test that build locally:

```
$env:BASE_PATH = "/T2/"; npm run build; Remove-Item Env:BASE_PATH
npx vite preview --base /T2/    # http://localhost:4173/T2/
```

## How enquiries work

There is no backend. "Plan your escape", "Enquire about a stay" and the other booking buttons open
the enquiry form. Once the dates are valid it shows **Send enquiry on WhatsApp**, which opens
`wa.me/94777368264` with the dates, guests and chosen stay filled in. Change the number in
`src/data/content.js` (`contact`).
