# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing: plain static HTML/CSS, no build step, served by GitHub Pages from the repository root
(`CNAME` binds sellercopilot.ai). The user placed no constraint on the stack ("nothing is sacred"),
but no framework is warranted for a 3-page marketing site; staying hand-authored HTML + one
stylesheet keeps the deploy path unchanged and the page fast. Fonts are self-hosted in `fonts/`.

## Users

Primary: established Amazon private-label sellers — owner-operators who run their own catalog,
inventory, and Sponsored Products advertising, and who currently reconcile Seller Central reports,
Campaign Manager exports, and settlement statements by hand in spreadsheets. They are the visitor
the site leads with.

Secondary: agencies and aggregators managing multiple seller accounts, who need the same analytics
per client. Addressed, but never at the cost of the individual seller's reading.

Third-party, non-buying: Amazon's Selling Partner API app reviewers and a prospect's security
reviewer both read this site. They must be able to verify scope, data handling, and role
justification without the marketing getting in their way.

## Product Purpose

SellerCopilot AI (SCAI) connects to a seller's Amazon account through the official Selling Partner
API, ingests sales, traffic, advertising, inventory, order, and financial data every day, and
returns a prioritized daily action plan — each recommendation carried by the evidence that produced
it. Success is the seller opening one brief each morning instead of assembling one, and taking the
named action.

## Positioning

The mechanism a neighboring analytics tool cannot truthfully copy: recommendations are computed
against *net profit after Amazon fees, refunds, and ad spend* — per ASIN, not per account — and
every recommendation ships with the metric panel that justifies it. It is diagnosis with the
evidence attached, not a dashboard the seller must interpret, and not an autopilot.

Deliberately read-only: SCAI reports on campaigns and never creates, edits, pauses, or bids on
them. This is a positioning choice as much as a compliance one.

## Operating Context

- Morning ritual: the seller opens the Daily Brief before the day's operations begin.
- Data arrives on Amazon's cadence — daily ingestion, not real time.
- Onboarding is Amazon's own Selling Partner authorization flow; access is revocable by the seller
  at any time.
- Evaluation frequently routes through a security or compliance reviewer before purchase.
- Sales motion is quote-based: no self-serve signup exists today. The page's action is contact.

## Capabilities and Constraints

Confirmed capabilities (all present in current site copy and treated as product truth):

- Sales & traffic analytics per ASIN and marketplace: sessions, page views, conversion,
  organic vs. advertising mix, period-over-period and year-over-year.
- Daily Brief: prioritized recommendations across ads, inventory, listings, and pricing, evaluated
  against configurable performance rules; evidence panel per recommendation; AI-generated product
  audits and executive reports; an assistant that answers questions about the seller's own data;
  outcome tracking on actions taken.
- Inventory: sales-velocity-derived days-of-supply forecasts, stockout risk, recommended reorder
  dates and quantities, inbound/outbound movement per SKU.
- Catalog & listing health: automatic ASIN/SKU sync, listing status, Buy Box ownership monitoring,
  per-product targets and cost of goods.
- Customer journeys: repeat-purchase rate, median days to second order, lifetime value by entry
  product, monthly cohorts, cross-product paths, strategic role per ASIN — computed from order
  history, never from personal buyer details.
- Profit & financial analytics: net profit per ASIN including FBA and referral fees,
  transaction-level refunds/promotions/fee breakdowns, TACOS/ACOS against targets, payout
  reconciliation.
- Advertising: daily Sponsored Products metrics per ASIN and campaign, joined to real profit.

Constraints:

- Read-only against Amazon Ads. No write actions on campaigns.
- No buyer PII is stored.
- Credentials encrypted at rest (AES-256-GCM); all traffic over HTTPS/TLS.
- Per-customer data isolation at the application layer.
- Pricing is quote-based; no public price point exists and none may be invented.
- Response commitment currently stated publicly: typically one business day.

Undecided / not established: self-serve signup, free trial, published pricing tiers, SOC 2 or
other formal certification. None of these may appear on the site.

## Brand Commitments

Name: SellerCopilot AI, short form SCAI. An Intelecommerce product. Contact:
hello@sellercopilot.ai.

The user explicitly released every other identity constraint ("nothing is sacred"), including the
current indigo bar-chart glyph, the existing wordmark treatment, and all marketing copy. Factual
accuracy of security, privacy, and Amazon-scope statements is not released — those may be
rewritten but not weakened or embellished.

## Evidence on Hand

- Real product screenshots are available and permitted; the user will supply the image files. The
  design must build real frames for them and mark the slots until the captures land.
- No named customers, testimonials, logos, case studies, or aggregate usage numbers exist or are
  permitted. Do not invent them, and do not imply scale the product has not demonstrated.
- Demonstration data (e.g. the current Daily Brief sample card) is authorable at full fidelity and
  must be labelled as illustrative sample data.
- Existing legal/compliance pages `privacy.html` and `security.html` are real content.

## Product Principles

1. **Evidence travels with the claim.** Any recommendation shown, on the site or in the product,
   appears with the numbers that produced it. Never a verdict without its receipt.
2. **Profit is the unit.** Revenue and ad revenue are intermediate; the product's answers are
   denominated in net profit per ASIN.
3. **Read-only is a promise, not a limitation.** The site states plainly what SCAI will never do
   to a seller's account.
4. **The seller stays in control.** Authorization is theirs to grant and revoke; the product
   recommends, the human acts.
5. **Prove, never inflate.** With no customers to name, the page earns belief by demonstrating the
   mechanism, not by borrowing social proof it does not have.

## Accessibility & Inclusion

No product-specific requirement was established by the user. Standard obligations apply: the site
must remain keyboard navigable, honor `prefers-reduced-motion`, and hold WCAG AA text contrast.
