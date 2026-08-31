# Product screenshots

Drop the real captures in this folder using these exact filenames. No code changes are
needed: each slot on the landing page already points at its file, reserves the right
box, and shows a mono `[ SCREENSHOT: … ]` label until the file exists.

| File | Slot | Aspect | Export at (2×) | Where it appears |
| --- | --- | --- | --- | --- |
| `hero-app.jpg` ✅ **live** | `hero-app` | 16:10 | 1600 × 1000 | Hero, right of the headline (the primary shot; loads eagerly). The Daily Brief for one account. |
| `brief-daily.jpg` ✅ **live** | `brief-daily` | 16:10 | 1600 × 1000 | `#brief`, the wide frame beside the three callouts. One recommendation with its evidence panel open. |
| `product-chart.jpg` ✅ **live** | `chart-product` | 4:3 | 1600 × 1200 | `#features`, the Sales & Traffic row. Currently daily revenue stacked by product. Renders at only 489 × 367 CSS px, so a chart with a large legend loses its labels — a single-series or few-series view reads far better here. |
| `placeholder-inventory-view.png` | `inventory-view` | 4:3 | 1600 × 1200 | `#features`, the Inventory Forecasting row. Days of supply, stockout risk, reorder date and quantity per SKU. |

Notes

- The frames crop with `object-fit: cover` anchored top-left, so keep the important
  content in the top-left region if the export is not exactly the listed ratio.
- Export at the 2× size above (or larger at the same ratio) so the frames stay sharp on
  high-density screens. PNG or WebP both work; if you use WebP, change the extension in
  the four `<img src>` attributes in `index.html`.
- Anonymise real account data before exporting. The page labels its hand-authored sample
  figures as illustrative; screenshots are presented as the product.
- A slot goes live by dropping the file in and pointing its `src` at it; drop the
  `placeholder-` prefix from the name so it is obvious which slots are real.
- **Optimise before committing.** The first supplied capture was 2612 × 1632 at 1.4 MB, which
  alone would have made the page 7× heavier than everything else on it combined. Resized to
  1600 × 1000 and re-encoded as JPEG q85 it is 115 KB — a 92% saving with no visible loss on
  UI text. With no image tooling installed, this was done by rendering the file at the target
  size in a headless browser and screenshotting it as JPEG.
- To rename a slot, change the filename here and the matching `src` in `index.html`.
