# Product screenshots

Drop the real captures in this folder using these exact filenames. No code changes are
needed: each slot on the landing page already points at its file and reserves the right box.

**All four slots are filled and all four are real.** `inventory-view` and `product-chart` were
recaptured on 2026-08-31 from the demo tenant (see `docs/demo-tenant.md` in SCAI-MVP), whose data
is generic by construction and therefore never passes through an anonymiser.

| File | Slot | Aspect | Export at (2×) | Where it appears |
| --- | --- | --- | --- | --- |
| `hero-app.jpg` ✅ **live** | `hero-app` | 16:10 | 1600 × 1000 | Hero, right of the headline (the primary shot; loads eagerly). The Daily Brief for one account. |
| `brief-daily.jpg` ✅ **live** | `brief-daily` | 16:10 | 1600 × 1000 | `#brief`, the wide frame beside the three callouts. One recommendation with its evidence panel open. |
| `product-chart.png` ✅ **live** | `chart-product` | 4:3 | 1700 × 1326 | `#features`, the Sales & Traffic row. The sales dashboard: daily revenue against net profit, the same month stacked by product, and the period totals. Renders at only 489 × 367 CSS px, so the per-product legend is unreadable at display size — the revenue-and-profit chart at the top carries the frame. |
| `inventory-view.png` ✅ **live** | `inventory-view` | 4:3 | 1687 × 1536 | `#features`, the Inventory Forecasting row. Real reorder dates, days of supply, lead time and per-row status. This replaced a capture whose every Reorder Date read `Generic Date` — the column the row sells. The frame crops the bottom 18%, which is fine: header, alert cards, the history chart and the first eleven table rows all sit above the cut. |

Notes

- The frames crop with `object-fit: cover` anchored top-left, so keep the important
  content in the top-left region if the export is not exactly the listed ratio.
- Export at the 2× size above (or larger at the same ratio) so the frames stay sharp on
  high-density screens. PNG or WebP both work; if you use WebP, change the extension in
  the four `<img src>` attributes in `index.html`.
- **Capture from the demo tenant, and do not anonymise anything.** Log in as the demo user
  (not by impersonating — impersonation bypasses `allowed_pages`). Its catalogue is written to be
  publishable as-is, which is the whole reason it exists: the two captures replaced here were
  damaged by an anonymiser that paraphrased the UI, turning `ASIN` into `ASNI`, `sellable` into
  `suitable`, and every Reorder Date into the literal string `Generic Date`. Data that is already
  generic never needs anonymising and so can never be garbled. Never run a screenshot of this
  product through an anonymiser again.
- A slot goes live by dropping the file in and pointing its `src` at it; drop the
  `placeholder-` prefix from the name so it is obvious which slots are real.
- **Optimise before committing.** The first supplied capture was 2612 × 1632 at 1.4 MB, which
  alone would have made the page 7× heavier than everything else on it combined. Resized to
  1600 × 1000 and re-encoded as JPEG q85 it is 115 KB — a 92% saving with no visible loss on
  UI text. With no image tooling installed, this was done by rendering the file at the target
  size in a headless browser and screenshotting it as JPEG.
- To rename a slot, change the filename here and the matching `src` in `index.html`.
