# Product screenshots

Drop the real captures in this folder using these exact filenames. No code changes are
needed: each slot on the landing page already points at its file, reserves the right
box, and shows a mono `[ SCREENSHOT: … ]` label until the file exists.

| File | Slot | Aspect | Export at (2×) | Where it appears |
| --- | --- | --- | --- | --- |
| `placeholder-hero-app.png` | `hero-app` | 16:10 | 1600 × 1000 | Hero, right of the headline (the primary shot; loads eagerly). Show the application at its best single view — the Daily Brief for one account. |
| `placeholder-brief-daily.png` | `brief-daily` | 16:10 | 1600 × 1000 | `#brief`, the wide frame beside the three callouts. The Daily Brief list with one recommendation's evidence panel open. |
| `placeholder-chart-product.png` | `chart-product` | 4:3 | 1600 × 1200 | `#features`, the Sales & Traffic row. A per-ASIN chart: revenue, sessions, conversion, or TACOS against target. |
| `placeholder-inventory-view.png` | `inventory-view` | 4:3 | 1600 × 1200 | `#features`, the Inventory Forecasting row. Days of supply, stockout risk, reorder date and quantity per SKU. |

Notes

- The frames crop with `object-fit: cover` anchored top-left, so keep the important
  content in the top-left region if the export is not exactly the listed ratio.
- Export at the 2× size above (or larger at the same ratio) so the frames stay sharp on
  high-density screens. PNG or WebP both work; if you use WebP, change the extension in
  the four `<img src>` attributes in `index.html`.
- Anonymise real account data before exporting. The page labels its hand-authored sample
  figures as illustrative; screenshots are presented as the product.
- To rename a slot, change the filename here and the matching `src` in `index.html`.
