# sellercopilot.ai

Public marketing website for **SellerCopilot AI (SCAI)** — analytics and AI-powered daily
recommendations for Amazon sellers.

Static site (plain HTML/CSS plus one small progressive-enhancement script, no build step).
Deployed by Railway from this repository; pushes to `main` go live within about a minute.

## Structure

- `index.html` — landing page (hero, the brief, what's charted, how it works, read-only,
  security, pricing, contact)
- `security.html` — security overview
- `privacy.html` — privacy policy
- `404.html`
- `styles.css` — single stylesheet (light theme only)
- `script.js` — motion only: scroll-in rise, the hero figure count-up, one typed note. The page
  is complete without it and with `prefers-reduced-motion`.
- `fonts/` — self-hosted Archivo (variable) and Fragment Mono
- `img/` — product screenshots; see `img/README.md` for the four slot filenames and sizes
- `favicon.svg`, `CNAME`
- `PRODUCT.md` — product truth used by design work; `DESIGN.md` — the visual system

## Product screenshots

The landing page has four screenshot slots that show a mono `[ SCREENSHOT: … ]` label until
the file exists. Drop the captures into `img/` with the filenames listed in `img/README.md`;
no code changes are needed.

## Deploy

Push to `main`. Railway serves the repository root; the `CNAME` file binds the custom domain.
