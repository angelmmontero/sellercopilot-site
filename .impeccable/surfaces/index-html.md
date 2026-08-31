---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["privacy.html","security.html","404.html"]
---

# Surface brief: index.html (landing page)

## Scope and mode
The public landing page at sellercopilot.ai. Mode: Persuade. Secondary pages privacy.html, security.html, and 404.html inherit its chrome (header, footer, type, ground) and are Read surfaces.

## Audience, job, action
Established Amazon private-label sellers first; agencies and aggregators second; Amazon SP-API reviewers and prospect security reviewers as non-buying readers. The seller must believe "this is the calm version of my morning" within five seconds. The only action is contact: Request a demo / a quote via hello@sellercopilot.ai. No self-serve signup, no public price.

## Proof and content
No customers, logos, testimonials, or aggregate numbers exist; none may be implied. Proof is demonstration: an authored sample observation chart and a four-item sample brief, both labelled illustrative. Real product screenshots are permitted and pending from the user; three slots exist at images/daily-brief.png, images/profit-per-asin.png, images/inventory-forecast.png (the plate falls back to a labelled empty state until the file lands).

## Chosen direction and memorable moment
Morning Rounds (seed 66780b09): the hospital observation chart. The first viewport is the chart, edge to edge: a TACOS vital plotting itself across the seller's shaded target band to a red breach call-out, the net-profit figure set larger than the headline, and a red STOP ADS triage band down the margin. Recency is drawn: the resolved item in the brief fades. The brief shows exactly three real rules from the SCAI engine (server/services/ruleSeeder.ts in the SCAI-MVP repo, 12 system rules): STOP_ADS_SEVERE_LOSS, ORDER_INVENTORY_URGENT and SCALE_ADS_OPPORTUNITY. Never invent a rule (an earlier draft showed a "Reprice" rule that does not exist). Action labels come from shared/i18n/en.ts: Stop Ads, Reduce Ads, Scale Ads, Fix Listing, Order Inventory. Sample figures must satisfy each rule's own conditions: severe loss needs profit <= -100 and TACOS >= 1.5x target; order inventory needs days_of_supply <= 7 and units >= 10; scale needs profit > 0 and TACOS ratio < 0.8. Estimated impact follows the engine's formula (ad spend x capped inefficiency ratio), and outcomes are measured over 7 days, 14 for Scale ads.

## Constraints
Static HTML/CSS, no build, GitHub Pages. Security, privacy, and Amazon-scope statements may be rephrased but never weakened or extended. Read-only against Amazon Ads is positioning, not just compliance. Product feature copy in the seven measures is product truth; keep the bullets.

## Unresolved
Real screenshot files. Whether the Daily Brief sample rows should later be replaced by real (anonymised) brief output.
