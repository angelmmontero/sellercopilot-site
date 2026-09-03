# Session Handoff — sellercopilot-site — 2026-08-31

Context dump for a future Claude Code session picking up the marketing site. Written in
English to match the rest of the repo's docs. Skim top-down; details only where they matter.

## Estado en una pantalla

- **What this is:** the public marketing site at sellercopilot.ai. Static HTML/CSS plus one
  small progressive-enhancement script. No build step, no framework, no npm install.
- **Deploy:** Railway serves the repo root. Push to `main` and it is live in ~40 seconds
  (`Server: railway-hikari`). It is *not* GitHub Pages any more; there is no `CNAME` file.
- **Branch:** work goes straight to `main` and is pushed immediately (same convention as
  SCAI-MVP). Tree is clean at `0cd93c6` plus the docs commit that carries this file.
- **Design system:** `DESIGN.md` + `.impeccable/design.json` describe the built world; treat
  them as the rulebook and update them when the build changes.
- **Quality gate:** `node .claude/skills/impeccable/scripts/detect.mjs --json <files>` must
  report **0 findings**. It was 0 at the end of this session.

## What landed this session

Baseline was `0ea9985`. All commits on `main`, in order:

| SHA | Subject |
|---|---|
| `3793eb8` | Redesign the site as an observation chart: new visual world and structure |
| `10da505` | Finish-review fixes: receipts as grid pairs, settled row by colour, wide display type |
| `c2b10bf` | Make the ruled ground readable: fainter grid, baseline-snapped copy, ink rest section |
| `a1301c5` | Snap the phone layout to the ruling too |
| `4c71f0a` | Keep phone receipts inside their column |
| `931f34b` | Re-ground on warm paper, add screenshot slots, vary the modules, cut mono, add quiet motion |
| `2e56979` | Record the rebuilt system in DESIGN.md; land the hero h1 on the 48px line |
| `58709a7` | Record the resized plot lettering as detector exceptions |
| `70de122` | Phone navigation as a menu button, not a scrolling row |
| `5ca54b4` | Keep the header stamp on one line; narrowest phones show the mark alone |
| `8fb8cb4` | Collapse the type sizes onto an eight-step ramp |
| `db21e78` | Record the type ramp in DESIGN.md and the sidecar |
| `756b933` | Always show the app name on phones |
| `081ac90` | Drop the header Request a demo button |
| `fec180f` | Use the application's logo on the marketing site |
| `2c7ac4a` | Keep the navbar sticky on phones as well as desktop |
| `0cd93c6` | Show only real rules from the SellerCopilot engine on the homepage |

## Decisions locked (do not silently reverse)

- **Visual world: "Morning Rounds"** — the page is an observation chart. Warm near-white
  paper `#f7f5f2` ruled every 24px, near-black green ink, red/amber/green triage bands,
  white stickers, stamped actions. Square corners, 1px rules, no gradients, no glow, no glass.
  The direction contract is the HTML comment at the top of `<body>` in `index.html`.
- **Light theme only, permanently.** No dark mode, no toggle. `#security` is the one
  full-bleed ink section and stays.
- **Green is an accent only** — the SCALE band, positive figures, the plot's target band.
  The ground is never green (an earlier sage ground read as dated eco-SaaS).
- **Everything sits on a 24px baseline.** Body copy, list items, receipts and labels all take
  `line-height: var(--u)`; display takes 48px at ≥901px. Structural rules are *painted*
  (inset box-shadows, background hairlines) so they never push the pitch off.
- **Type ramp is closed.** Eight steps `--t-1`…`--t-8` plus `--t-head`, `--t-display`,
  `--t-figure`, all on `:root`. No selector carries a literal `font-size` outside SVG
  viewBox lettering. Adding a size is a design-system change, not a local choice.
- **Mono is a reading.** Fragment Mono only for values, ASINs, system output, short eyebrows,
  and the shot caption/placeholder. Prose captions and footnotes use the Archivo `.note` voice.
- **Motion is an enhancement.** `script.js` adds the plot draw-in, the figure count-up, one
  typed note and staggered scroll-in rises. The page must stay complete and readable with the
  script blocked and with `prefers-reduced-motion: reduce`. Measured CLS was 0.
- **The logo is the application's mark**, taken verbatim from app.sellercopilot.ai (indigo
  `#4f46e5` rounded square, three ascending bars). It keeps its own indigo and is the only
  place that colour appears; nothing else adopts it.
- **The app name is never hidden on phones.** Below 430px the mark and wordmark shrink instead.
- **Only real engine rules may appear on the page.** See the next section.

## Rules shown on the homepage — the constraint that matters

The brief section (`#brief`) shows sample recommendations. **Never invent a rule.** An earlier
draft showed a "Reprice" rule that does not exist, and an inventory example that did not
satisfy the rule it stood for. Source of truth:

- **Engine repo:** `~/Documents/GitHub/SCAI-MVP`
- **The twelve system rules:** `server/services/ruleSeeder.ts` (`SYSTEM_RULES`), each with
  `code`, `action_type`, `priority`, `conditions`, `reason_template`, `next_steps`.
- **The five action types:** `STOP_ADS`, `REDUCE_ADS`, `SCALE_ADS`, `FIX_LISTING`,
  `ORDER_INVENTORY`. User-facing labels live in `shared/i18n/en.ts` (`actionType.*`):
  Stop Ads, Reduce Ads, Scale Ads, Fix Listing, Order Inventory.
- **Estimated impact** is real: `calcImpact` in `server/routes/daily-actions.ts`. For
  STOP_ADS/REDUCE_ADS it is `adSpend × min(5, max(0, tacos/target − 1))`.
- **Outcome measurement window:** 7 days, 14 for Scale ads (`shared/i18n/en.ts` scorecard).

The page currently shows three, and their figures satisfy their own conditions:

| Rule | Condition | Sample on the page |
|---|---|---|
| `STOP_ADS_SEVERE_LOSS` | profit ≤ −$100 and TACOS ≥ 1.5× target | −$398, TACOS 101% vs 20%, est. impact $2,086 |
| `ORDER_INVENTORY_URGENT` | days of supply ≤ 7 and units ≥ 10 | 6 days, 438 units / 30 days |
| `SCALE_ADS_OPPORTUNITY` | profit > 0 and TACOS ratio < 0.8 | TACOS 9% vs 20%, resolved, +$212 realized |

If you change a sample, re-check it against the rule's `conditions` block. The same constraint
is recorded in `.impeccable/surfaces/index-html.md`.

## Failures & corrections during this session

Worth knowing so they are not repeated:

- **Playwright serves stale files.** Twice a verification reported the *old* state (a header
  stamp that was already deleted; a `position: static` that was already removed) because the
  browser cached `index.html` / `styles.css`. Always cache-bust: `?v=Date.now()` on the page
  and a route handler rewriting `styles.css`. A "failed" check is a cache hit until proven otherwise.
- **A broad string replace deleted the wrong button.** Removing the header CTA with a
  4-space-indented pattern also matched the hero's 8-space-indented one and removed both.
  Caught in verification and restored before committing. Anchor replacements on unique context,
  not on indentation.
- **The impeccable subagents are not registered agent types here.** There is no
  `.claude/agents/`; the shipped agents only exist as codex `.toml` files. Spawn a
  `general-purpose` agent pointed at `.claude/skills/impeccable/reference/degraded/<role>.md`.
  Background agents cannot be resumed afterwards (`No transcript found`) — respawn instead.
- **A documenter subagent died on an Opus session rate limit** mid-edit, leaving `DESIGN.md`
  half-updated. Check `git diff` before assuming an agent's work is complete; finishing
  in-thread was cheaper than respawning.
- **Hiding the wordmark below 360px was wrong** — that is exactly the width many Android
  phones report. The user saw a logo with no name. Do not hide identity to win space.
- **The design detector runs in degraded regex mode** here (no `htmlparser2`), so its findings
  undercount. 0 findings is necessary, not sufficient.

## Tech debt and recorded inconsistencies

`DESIGN.md` and `.impeccable/design.json` carry the full list. The ones most likely to bite:

- The hero strip's two columns are not on a shared 24px pitch (the plot SVG's height follows
  its width; the figure has `10px 0 14px` padding and a 0.86 line).
- Below 900px the h1 (1.06) and h2 (1.1) line-heights fall off the 24px line; the `.ruling`
  blocks restart their pitch so the effect is contained to the heads.
- `--rule` (12%) is declared and unused; every hairline uses `--rule-major`.
- The primary stamp's text is `--paper` at rest and `--white` on hover.
- The direction says 1px rules; the build uses 1 / 1.5 / 2 / 3px by role.
- `404.html` has no site footer and no font preloads, unlike privacy and security.
- The generic line icons (hero facts, the four `.control` icons) are carried, not canonized —
  the world's own marks are the ticked box, the plotted node and the triage band.
- Detector exceptions are recorded in `.impeccable/config.json`: `#000` (mask stops) and the
  SVG lettering sizes 10.5/13/15/20/22/27/40px, which are viewBox units, not ramp steps.

## Next actions (prioritized)

1. **P0 — Drop in the four product screenshots.** The page has four `.shot` slots showing a
   mono `[ SCREENSHOT: … ]` label until the files exist. Names, aspect ratios and 2× export
   sizes are in `img/README.md`: `placeholder-hero-app.png` (16:10),
   `placeholder-brief-daily.png` (16:10), `placeholder-chart-product.png` (4:3),
   `placeholder-inventory-view.png` (4:3). No code change needed. Anonymise real account data.
2. **P1 — Verify the feature sections against the engine**, the way the rules were verified.
   `#features` describes seven measures (sales & traffic, daily brief, inventory, catalog
   health, customer journeys, profit, advertising). Nobody has checked each bullet against
   SCAI-MVP. Offered to the user this session; not yet approved.
3. **P2 — Consider whether the resolved row should stay.** It demonstrates outcome tracking
   and exercises the `.round-settled` styling, but it is the only settled example.
4. **P3 — Decide on the phone header CTA.** The header currently has no call to action at all
   (the user asked for the first demo button to be removed). The hero CTA is immediately
   below, but privacy/security/404 now have no CTA anywhere.

## Pointers (read these first if you are a new agent)

| Path | What it is |
|---|---|
| `index.html` top-of-`<body>` comment | The direction contract: thesis, world, story, first viewport |
| `DESIGN.md` | The built visual system: palette, type ramp, ruling, components, named rules |
| `.impeccable/design.json` | Machine-readable sidecar with drop-in component snippets |
| `PRODUCT.md` | Product truth: users, positioning, capabilities, what may never be invented |
| `.impeccable/surfaces/index-html.md` | Surface brief for the landing page, incl. the rules constraint |
| `img/README.md` | The four screenshot slots |
| `~/Documents/GitHub/SCAI-MVP` | The engine. Rules, action types, impact formula, i18n labels |

**Claims discipline:** `PRODUCT.md` records that there are no customers, testimonials, logos
or aggregate numbers to show, and none may be invented. Sample data on the page is labelled
illustrative. Security and privacy copy is factual and may be rephrased but never strengthened.

## Quick verification commands

```bash
cd ~/Documents/GitHub/sellercopilot-site

# Serve locally for screenshots (kill it when done)
python -m http.server 8765 --bind 127.0.0.1

# Quality gate — must print 0
node .claude/skills/impeccable/scripts/detect.mjs --json \
  styles.css index.html privacy.html security.html 404.html \
  | python -c "import json,sys; print(len(json.load(sys.stdin)))"

# No literal font sizes outside the ramp. Two legitimate hits only:
#   font-size: 0    hides the alt text of a screenshot that 404s
#   *px             SVG viewBox lettering (plot and timeline)
grep -n "font-size:" styles.css | grep -v "var(--t-" | grep -v "px" | grep -v "font-size: 0;"

# Confirm only real action labels appear in the brief
grep -oE "Stop Ads|Reduce Ads|Scale Ads|Fix Listing|Order Inventory" index.html | sort -u

# Confirm the deploy went out (expect the new markup within ~40s of pushing)
curl -sI https://sellercopilot.ai/ | grep -i last-modified
```
