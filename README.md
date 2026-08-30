# sellercopilot.ai

Public marketing website for **SellerCopilot AI (SCAI)** — analytics and AI-powered daily
recommendations for Amazon sellers.

Static site (plain HTML/CSS, no build step), served by GitHub Pages at
[https://sellercopilot.ai](https://sellercopilot.ai).

## Structure

- `index.html` — landing page (sample brief, product plates, what's charted, how it works,
  read-only, security, pricing, contact)
- `security.html` — security overview
- `privacy.html` — privacy policy
- `404.html`
- `styles.css` — single stylesheet
- `fonts/` — self-hosted Archivo (variable) and Fragment Mono
- `favicon.svg`, `CNAME`
- `PRODUCT.md` — product truth used by design work; `DESIGN.md` — the visual system

## Product screenshots

The landing page has three screenshot plates that show a labelled empty slot until the file
exists. Drop real captures at:

- `images/daily-brief.png` (lead plate, cropped to 2:1 from the top-left; 1600 × 800 or larger)
- `images/profit-per-asin.png` (16:10; 1600 × 1000 or larger)
- `images/inventory-forecast.png` (16:10; 1600 × 1000 or larger)

## Deploy

Push to `main` — GitHub Pages publishes the repository root. The `CNAME` file binds the
custom domain.
