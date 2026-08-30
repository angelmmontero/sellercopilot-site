---
name: SellerCopilot AI
description: The morning brief as a hospital observation chart, printed on mint chart stock and read in three type voices.
colors:
  paper: "#e5ece4"
  paper-deep: "#d9e2d8"
  paper-dim: "#b8c4ba"
  sticker-white: "#f9fbf7"
  ink: "#131a16"
  ink-2: "#2a3630"
  ink-soft: "#4a5951"
  ink-faint: "#6f7e75"
  rule: "rgba(19, 26, 22, 0.11)"
  rule-major: "rgba(19, 26, 22, 0.2)"
  grid-minor: "rgba(19, 26, 22, 0.04)"
  grid-major: "rgba(19, 26, 22, 0.09)"
  breach-red: "#c0301c"
  amber-fill: "#e0930c"
  triage-green: "#2f7a4f"
  green-ink: "#256a42"
  target-band: "rgba(47, 122, 79, 0.16)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.7rem)"
    fontWeight: 600
    lineHeight: "48px"
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch 110%"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: "48px"
    letterSpacing: "-0.025em"
    fontVariation: "font-stretch 110%"
  figure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "6rem"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.03em"
    fontVariation: "font-stretch 68%"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch 100%"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
    fontVariation: "font-stretch 100%"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "0.12em"
    fontVariation: "font-stretch 78%, uppercase"
  action:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "font-stretch 85%, uppercase"
  reading:
    fontFamily: "Fragment Mono, Courier New, Courier, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0"
rounded:
  none: "0"
  stamp: "2px"
  plate-inner: "1px"
  node: "999px"
spacing:
  u-quarter: "6px"
  u-third: "8px"
  u-half: "12px"
  u: "24px"
  u-1-5: "36px"
  u-2: "48px"
  u-3: "72px"
  u-4: "96px"
components:
  stamp:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.stamp}"
    padding: "0 22px"
    height: "{spacing.u-2}"
  stamp-hover:
    backgroundColor: "{colors.breach-red}"
    textColor: "{colors.sticker-white}"
  stamp-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.stamp}"
    padding: "0 22px"
    height: "{spacing.u-2}"
  stamp-outline-hover:
    backgroundColor: "{colors.sticker-white}"
    textColor: "{colors.ink}"
  stamp-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.stamp}"
    padding: "0 16px"
    height: "40px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    padding: "10px 12px"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-link-current:
    textColor: "{colors.ink}"
  sticker:
    backgroundColor: "{colors.sticker-white}"
    textColor: "{colors.ink}"
    typography: "{typography.reading}"
    rounded: "{rounded.stamp}"
    padding: "11px 12px"
    height: "{spacing.u-3}"
  triage-red:
    backgroundColor: "{colors.breach-red}"
    textColor: "{colors.sticker-white}"
    width: "24px"
  triage-amber:
    backgroundColor: "{colors.amber-fill}"
    textColor: "{colors.ink}"
    width: "24px"
  triage-green:
    backgroundColor: "{colors.triage-green}"
    textColor: "{colors.sticker-white}"
    width: "24px"
  triage-settled:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.sticker-white}"
    width: "24px"
  paper-plate:
    backgroundColor: "rgba(229, 236, 228, 0.95)"
    padding: "0 8px"
  plate-frame:
    backgroundColor: "{colors.sticker-white}"
    rounded: "{rounded.stamp}"
    padding: "8px"
  quote-card:
    backgroundColor: "{colors.sticker-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "47px 36px 35px"
  resolved-stamp:
    backgroundColor: "transparent"
    textColor: "{colors.green-ink}"
    rounded: "{rounded.stamp}"
    padding: "4px 8px"
  section-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-dim}"
---

# Design System: SellerCopilot AI

## Overview

**Creative North Star: "Morning Rounds"**

The site is the observation chart clipped to the end of the bed on a 6am ward round. The ground is mint chart stock ruled every 24px with a heavier line every fifth; the ruling is a paper texture that is strongest in the outer margins and fades out behind the centre column, so the reading column is clean and the margins say "chart". Everything on it is either ink (near-black green), a white paper object stuck onto the chart (sticker, plate, quote card, call-out), or a coloured triage band down the margin. Nothing floats and nothing is a card: the plot in the first viewport is drawn straight onto the ruled ground with no container behind it, the brief is a list of triage rows separated by 1px rules, and the seven feature measures are observation rows rather than an icon grid. One section, Security, is printed in reverse: ink ground, paper type, the same 24px ruling at 5% paper.

Density is that of a printed form: every line of text sits on the 24px ruling (body 17px on a 24px line, display type on a 48px line), structural rules are painted rather than laid out so they never push the pitch off, and sections are separated by a 2px ink rule with a mono margin note ("Today's rounds · 4 items · sample") rather than by whitespace or colour blocks. The world is read in three type voices from one variable family plus a mono: Archivo set wide (110%) for the two display levels, Archivo set condensed (78–85%) in small caps for form labels, stamps and triage bands, and Fragment Mono for every reading, dateline and caption. The largest thing on the page is a number, not a headline: the net-profit figure is set at 6rem in condensed 700 while the h1 tops out at 2.7rem.

Colour is diagnostic, never decorative. Red is a breach reading and the hover state of the one action; amber and green are triage classes; the shaded target band is a translucent green wash. There is no glass, no glow, no colour gradient, no drop-shadow on the ground itself. The only authored motion is the vital plotting itself once, followed by the breach report settling into place; everything else is a 160–200ms colour or transform transition, and the whole sequence is off under `prefers-reduced-motion`.

**Key Characteristics:**
- Mint chart stock (#e5ece4) ruled at 24px, heavier every 120px; the ruling is the layout unit and the baseline: text sits on 24px lines, display on 48px.
- The ruling is texture, not structure: a masked two-axis grid in the page margins, horizontal-only paper inside text-heavy sections, and separate `rule` tokens for the hairlines that actually divide things.
- Three type voices from two families: Archivo wide (display), Archivo condensed caps (labels, stamps, bands), Fragment Mono (readings).
- Red / amber / green / settled-grey triage bands as 24px vertical margin strips with rotated condensed caps.
- White paper objects (stickers, plates, quote, call-out) are the only things that cast a shadow; near-opaque paper plates sit under copy and figures so no rule crosses a numeral.
- 2px radius on stamped and stuck-on objects, 0 everywhere else; 1px rules for structure, 2px for the form's header and section rules, all painted so they take no layout height.
- One ink section (Security) in the run of paper; the settled state recedes by ink colour, never by opacity.
- One authored motion moment; all other motion is a short ease-out transition.

## Colors

A single near-black green ink at four strengths on mint paper, with red, amber and green reserved as triage classes, a warmer white for objects stuck onto the chart, and one reversed section where the ink becomes the ground.

### Primary
- **Breach Red** (`breach-red`, 4.74:1 on paper, 5.48:1 on sticker white): the out-of-range reading. Used for the hero figure, the breach dot and its call-out value, the red triage band, negative receipt values, the "live" timeline node, the ticks in the never-list boxes, the `em` in the h1, the focus ring, the text caret, and the hover state of every stamp and underlined link. It is a signal colour: it appears where something is wrong or where the reader is about to act.

### Secondary
- **Triage Green** (`triage-green`, 4.34:1 on paper): fill and stroke only. The green triage band (white text on it reads 5.02:1) and the dashed edge of the target band. Never used for running text.
- **Green Ink** (`green-ink`, 5.42:1 on paper): the text green. Positive receipt values, the "Est. +$435" gain line, the target-band label inside the plot, and the RESOLVED stamp's border and text.
- **Target Band** (`target-band`): 16% green wash; the shaded "your target ≤ 20%" region of the plot. Resolves to roughly #c8dacc on paper.
- **Amber Fill** (`amber-fill`): the reorder triage band. It is the only band that takes ink text rather than white (7.03:1); white on this amber would fail.

### Neutral
- **Chart Paper** (`paper`): the page ground, the header background, the `.ruled` sections' own opaque ground, the stamp's text colour at rest, the timeline node fill, and the selection text colour. On the ink section it is the heading, icon, link and top-rule colour (14.70:1 on ink).
- **Paper Deep** (`paper-deep`): only the scrollbar track. Not a surface colour.
- **Paper Dim** (`paper-dim`, 9.81:1 on ink): secondary text on the ink section only: the running copy of the controls, the section note, and the section's mono margin note. Never used on paper.
- **Sticker White** (`sticker-white`): a warmer white than the paper for objects stuck onto the chart: stickers, plate frames, the quote card, the plot call-out box, the never-list checkbox, the stamp's hover text, the text on red and green triage bands.
- **Ink** (`ink`, 14.7:1 on paper): headings, body copy, axis and vital strokes, borders of stuck-on objects, the header and section rules, stamp fill, selection background, and the ground of the Security section.
- **Ink 2** (`ink-2`, 10.46:1): running paragraph text inside rows (round bodies, measures, steps, legal body), the reading note, and settled receipt values.
- **Ink Soft** (`ink-soft`, 6.15:1 on paper, 7.10:1 on white): the form-label colour. Every `.label`, nav link at rest, lead and intro paragraphs, mono captions and datelines, receipt keys, the settled round's heading and sticker, and the settled triage band's fill.
- **Ink Faint** (`ink-faint`, 3.55:1): never text. Legal list markers, the strike-through on a settled heading, the nav hover underline, the dashed border of an empty plate, and the scrollbar thumb.
- **Grid Minor** and **Grid Major** (`grid-minor`, `grid-major`): the 4% and 9% ink washes that draw the paper's ruling (24px minor, 120px major). They resolve to about #dde4dc and #d2d9d1 on paper. Texture only; they never divide content.
- **Rule** and **Rule Major** (`rule`, `rule-major`): the 11% and 20% ink washes for structure. Rule Major is every row divider, dotted receipt and check-list hairline, the legal h2 top rule and the legal link underline. `rule` is declared for structural hairlines and is currently unused by any selector.

### Named Rules
**The Green Split Rule.** `triage-green` fills and strokes; `green-ink` writes. A green value in text is always `green-ink` (5.42:1); a green area or line is always `triage-green`.

**The Red Is A Reading Rule.** Red marks a value that is out of range or the action the reader is about to take. It never colours a heading, a border for emphasis, or a decorative element; the h1's red clause is the one exception and it is the page's thesis.

**The Faint Is Not Text Rule.** `ink-faint` sits at 3.55:1 and is used only for markers, strikes, hover underlines and dashed edges. Text below the label size uses `ink-soft` or darker.

**The Texture Is Not Structure Rule.** The ruling is drawn with `grid-minor` / `grid-major` (4% / 9%) and never with `rule` / `rule-major` (11% / 20%). A line that separates two things is a rule token at full width; a line that is merely paper is a grid token and may be masked away.

**The One Ink Section Rule.** Security is the page's only reversed section: `ink` ground, `paper` headings, icons, links and top rule, `paper-dim` running text, 5% paper ruling, dividers in paper (top) and 22% paper (between controls), selection inverted to paper-on-ink. A second dark section would turn a rest into a pattern.

## Typography

**Display Font:** Archivo variable, self-hosted (`fonts/archivo.woff2`, `fonts/archivo-italic.woff2`; wght 100–900, wdth 62–125%) with Helvetica Neue, Arial fallback
**Body Font:** Archivo at normal width (100%)
**Label/Mono Font:** Fragment Mono 400, self-hosted (`fonts/fragment-mono.woff2`) with Courier New fallback

**Character:** One family read at three widths. Wide (110%) is the printed heading of the form; condensed (78–85%) in tracked small caps is the field label and the rubber stamp; the mono is the handwritten reading. Body text sits at normal width between them. Every voice is set on the ruling: 24px lines for text, 48px for the two display levels at ≥901px. Numerals are tabular everywhere (`font-variant-numeric: tabular-nums` on body), so receipts and axes align. Headings use `text-wrap: balance`; paragraphs and notes use `text-wrap: pretty`.

### Hierarchy
- **Display** (600, `clamp(2rem, 3.2vw, 2.7rem)`, 48px line at ≥901px / 1.06 below, wide 110%, −0.035em, max 19ch; 16ch below 900px): the hero h1 only. Its final clause is red via `em` with italics removed.
- **Headline** (600, `clamp(1.7rem, 2.6vw, 2.25rem)`, 48px line at ≥901px / 1.1 below, wide 110%, −0.025em, max 24ch): section h2s and the contact h2. The legal page h1 is the same voice at `clamp(2rem, 3.4vw, 2.6rem)`, −0.03em.
- **Figure** (700, 6rem, 0.86, condensed 68%, −0.03em, red, `white-space: nowrap`): the net-profit reading under the plot. Below 900px it becomes `clamp(3.6rem, 15vw, 5.5rem)`. It is deliberately larger than the display and is the one text size not on the ruling.
- **Title** (600, 1.1–1.5rem, 24px line, normal width 100%, −0.02em, followed by one blank rule): h3s. Round and step titles 1.2rem; measure and legal h2 1.35rem; control 1.1rem; quote card 1.5rem. Titles are not set wide; the width axis is reserved for the two levels above.
- **Body** (400, 1.0625rem / 1rem below 900px, 24px line, normal width): lead paragraph 1.125rem `ink-soft` max 32rem; section intro 1.1rem `ink-soft` max 40rem; row paragraphs 0.95–1.05rem `ink-2` at 46–52ch; legal body 1rem at 68ch with one blank rule between paragraphs. All on the 24px line.
- **Label** (600, 0.75rem, 24px line, 0.12em, condensed 78%, uppercase, `ink-soft`): the `.label` field-label voice. Sits above the figure, beside a plate caption, and as the plate's empty-state title. In the plot and timeline SVGs the same voice is 10.5px with 1.2px tracking.
- **Action** (600, 0.86rem, 0.08em, condensed 85%, uppercase, `line-height: 1` inside a 48px stamp): stamps. The header stamp drops to 0.78rem in a 40px stamp; nav links and hero facts are the same voice at 0.8rem with 0.08em / 0.06em tracking, the facts on a 24px line.
- **Band** (700, 0.78rem, 0.16em, condensed 78%, uppercase, `writing-mode: vertical-rl` rotated 180°): the triage band's word. The RESOLVED stamp is the same voice at 0.72rem, 0.14em, rotated −6°.
- **Reading** (Fragment Mono 400, 0.8rem, 24px line, tracking 0): receipt keys and values, the gain line, `.mono`, the sticker's first row. Captions and notes drop to 0.74–0.78rem; the footer, quote note and "last updated" to 0.76rem; the brand tagline to 0.66rem; plot axis text is 11px.
- **Email** (700, `clamp(1.8rem, 3.4vw, 2.8rem)`, 48px line, condensed 78%, −0.02em, 3px ink underline): the contact address, the only large condensed text that is not a figure.
- **Brand** (700, 1.05rem, 92%, −0.015em): the wordmark. The sticker's product name shares the 92% width at 600 / 0.92rem.

### Named Rules
**The Three Voices Rule.** Wide for the two display levels, condensed caps for anything that labels or stamps, mono for anything that is a reading. A new element picks one voice; it does not mix wide with caps or set a reading in the sans.

**The Figure Outranks The Headline Rule.** The number that matters is set larger than any heading on the page (6rem against a 2.7rem h1). A new surface that leads with a reading keeps that order.

**The Line Is 24px Rule.** Text is set on `line-height: var(--u)` regardless of size: 17px body, 15–16px row copy, 12.8px mono and 12px labels all occupy one 24px rule; h1, h2 and the contact email occupy two. A new size picks a line of 24px or 48px, not a ratio. The figure (6rem × 0.86) is the recorded exception.

**Recorded inconsistency: the label scale.** The label voice is not one size: the build sets it at 0.7rem (receipt title), 0.72rem (RESOLVED), 0.75rem (`.label`), 0.78rem (band, header stamp), 0.8rem (nav, facts) and 0.86rem (stamp), at three widths (78 / 85 / 92%) and five trackings (0.06–0.16em). The mono likewise runs 0.66 / 0.74 / 0.76 / 0.78 / 0.8rem plus 11px in the SVG. These are recorded as they are; a new element should reuse the nearest existing pairing rather than add a seventh.

## Layout

The unit is the ruling: `--u: 24px`. The ruling is painted in three ways, and the choice is by section:

- **Margin texture (`body::before`).** An absolutely positioned layer behind the page (`inset: 0; z-index: -1`) draws a two-axis grid: 1px `grid-minor` every 24px and 1px `grid-major` every 120px in both directions, offset −1px −1px. It is masked with `linear-gradient(90deg, #000, transparent 30%, transparent 70%, #000)`, so the grid is fully present in the outer 30% of the viewport on each side and absent behind the centre column. The hero, the product plates and how-it-works sit on this layer alone.
- **Ruled sections (`.ruled`: #brief, #features, #read-only, #pricing).** Text-heavy sections paint their own opaque paper (`background-color: paper`) with horizontal-only rules: `background-size: 100% 120px, 100% 24px`, offset 0 −1px. No vertical line ever crosses copy, and the section's top edge resets the ruling so every line of text inside lands on a rule.
- **The ink section (`#security`).** Ink ground with a 1px 5% paper rule every 24px, offset 0 −1px.

Under `@media (prefers-contrast: more)` both the margin texture and the `.ruled` ruling are removed; structural rules stay.

**Baseline.** Body `line-height` is 24px. Paragraphs, list items, receipt keys and values, labels, captions, stickers and h3s are all set on the 24px line; h1, h2, `.talk h2` and `.legal h1` take a 48px line at ≥901px. Structural rules are painted so they take no layout height: row and list rules are `box-shadow: inset 0 1px 0` (top) or `inset 0 -1px 0` (bottom); receipt and check-list hairlines are a 4px × 1px repeating `linear-gradient` in `rule-major` at `0 100%`. Where a rule is a real border its box shrinks to compensate: the header container is `calc(3u − 2px)` under its 2px rule (72px total), `.section-head` and `.legal-head` pad `24px − 2px` above their 2px rule, the footer pads `24px − 2px` under its 2px top rule, `.legal h2` pads `24px − 1px` under its 1px rule, and the quote card pads `2u − 1px` / `1.5u − 1px` inside its 1px border. Row padding is in 24px multiples: `.round` 24 / 24, `.measure` 48 / 24 (72px per row: two rules above the title, one below the list), `.never-list li` 24 / 0 (the rule sits under the text), `.control` 24 / 24. h3s are followed by one blank rule (`margin-bottom: 24px`). Stamps are 48px tall (40px in the header); stickers are 72px tall (11px padding, 1px border, two 24px lines; 96px when they stack to three lines at ≤520px); the contact email sits on a 48px line. Legal paragraphs carry a 24px margin (one blank rule).

**Paper plates.** `.round-body`, `.receipt`, `.measure > div` and `.measure ul` carry `rgba(229, 236, 228, 0.95)` with 8px side padding and −8px side margins, so the ruling behind the row is covered under copy and figures and no rule sits behind a numeral. `.receipt` keeps 0 side margins so its 1px ink left rule stays on the column edge.

Every structural dimension is a multiple of the unit: the container is 50u (1200px) wide with 1u gutters (16px below 520px); the header is 3u (72px) tall including its rule; sections pad 4u (96px) top and bottom, 3u below 900px; the hero pads 3u top / 2u bottom (2u top below 900px); the legal column is 32u (768px) wide; `scroll-padding-top` on `html` and `scroll-margin-top` on every `[id]` are both 4u (96px), so anchor targets clear the sticky header by one blank rule. Inside components the sub-unit vocabulary is 4 / 6 / 8 / 10 / 12 / 14 / 16 / 22px, with 12px (`u-half`) and 8px (`u-third`) the most common gaps.

**Grids in use (desktop, ≥1040px):**
- Header: `auto 1fr auto` (brand, centred nav, stamp), gap 1u, container height `3u − 2px`.
- Hero: `5fr 7fr`, gap 2u, `align-items: start`. Copy left, chart right; the copy is padded 1u down so the h1 sits below the chart's sticker.
- Chart figure: `padding-left: 24px + 16px` for the triage band and its gutter; `min-height: 20u`.
- Reading (under the plot): `auto 1fr`, gap 8px / 1.5u, label spanning both columns, figure and note aligned at the baseline end.
- Rounds: `24px 190px 1fr 290px` (band, sticker, body, receipt), column gap 1u, no row gap, padding 1u top and bottom, inset rules; 170 / 240px at ≤1040px.
- Receipt: `minmax(0, 1fr) auto`, so a wrapping key never desyncs its value; 1px ink left rule, 1u left padding; each key/value pair is one 24px rule.
- Plates: two columns, gap 1u; the lead plate spans both at 2:1, the others are 16:10.
- Measures: `200px 1.05fr 1fr` (unit, description, list), column gap 1.5u, padding 2u / 1u; 160px first column at ≤1040px.
- Steps: three equal columns, gap 1.5u, under a full-width SVG rail (1152 × 48 viewBox, two rules tall) with 1u below.
- Never: `1fr 1.2fr` (copy, ticked list), gap 2u. Controls: two columns, 2u column gap. Close band: `1.1fr 1fr` (quote, talk), gap 2u.
- Section head: `1fr auto` with the h2 and its mono margin note aligned at the end, `24px − 2px` padding below, 2px ink rule, 2u margin after. The section intro that follows pulls up by 1u.

**Breakpoints:** 1040px (row columns tighten), 900px (single column, header static, ruling restarts per block), 520px (phone).

**At ≤900px** the body drops to 1rem; the header stops being sticky and becomes two rows (brand + stamp, then a horizontally scrolling nav masked to transparent over its last 40px, tagline hidden). h1 and h2 fall back to their ratio line-heights (1.06 / 1.1), which puts the section head off the 24px line; so `.ruled` sections paint no ruling below 900px and instead `.ruled .rounds`, `.ruled .measures`, `.ruled .never-copy` and `.ruled .never-list` paint the same horizontal ruling from their own top edge, restarting the pitch at each content block. The hero becomes one column and the copy block is dissolved with `display: contents` so its children can be reordered against the chart: h1 (1), chart (2), actions (3), lead (4), facts (5); the chart enters the first phone viewport. The figure scales to `clamp(3.6rem, 15vw, 5.5rem)` and the reading stacks. Rounds become `24px 1fr` with `row-gap: 0` and 24px steps: the band spans four rows, the sticker takes a 24px bottom margin, the receipt loses its left rule for a 1px `rule-major` top rule with `margin-top: 24px` and `padding-top: 24px − 1px`, and the RESOLVED stamp becomes a static 24px-tall grid item (0 8px padding, 21px line, 24px top margin), unrotated. Measures stack with `row-gap: 24px`, 1u padding, and the unit line demoted to a footnote joined by " · " (order 3, after the list). The timeline SVG is hidden and each step draws its own 12px node with `::before` (the last one red). Plates, never, controls and the close band go single column.

**At ≤520px** gutters drop to 16px; hero stamps go full width and centred; the chart's band gutter shrinks to 8px; the plot's lettering is enlarged (axis 22px, labels 20px / 2px tracking, call-out value 40px, sub 20px) and the call-out box is repositioned to `x:220 y:0 w:340 h:96` with the leader hidden, because the SVG scales to roughly 0.45; stickers stack to one column (96px tall); plate captions stack.

### Named Rules
**The Ruling Rule.** Vertical structure lands on 24px or a named sub-unit, and text lands on the 24px line. A rule that separates rows is painted (inset shadow or repeating hairline) and takes no height; a rule that is a real border is paid for by shrinking the box it sits on (`Nu − 2px`, `Nu − 1px`).

**The Ruled / Plain / Ink Section Rule.** A section is one of three grounds: plain (the masked margin texture shows through; for plots, plates and diagrams), ruled (`.ruled`: opaque paper with horizontal rules; for sections whose content is rows of text), or ink (`#security` only). A new text-heavy section takes `.ruled`; a new visual section stays plain.

**The Plate Rule.** Where copy or figures sit inside a ruled section, they sit on a paper plate (`rgba(229,236,228,0.95)`, 8px side padding, −8px side margins) so the ruling is a texture between blocks and never a line through a word or a number.

**Recorded inconsistencies (baseline).** The reading block under the plot is not on the ruling: `.reading` has a 10px margin and 14px padding above its 1px rule, an 8px row gap, a 6px pad under the note, a 6px gap to the gain line and a 4px margin on the caption, and the figure's 0.86 line-height (82.56px at 6rem) is not a multiple of 24; its `.label` is on a 24px line but the block it opens is not snapped. The hero sticker has a 10px bottom margin. Below 900px the h1 (1.06) and h2 (1.1) are not on the ruling, which is why the ruled sections restart their ruling per block there. Smaller off-grid gaps remain inside components: the section-head meta's 6px bottom pad, the plate caption's 12px top margin, the mobile header's 12px top pad and 6px nav margin, the brand tagline's 4px margin.

## Elevation & Depth

Depth is physical layering: white paper objects lie on a flat mint chart and cast a small, grounded shadow onto it. The chart, the rows, the header and the sections are flat and cast nothing; the ruled ground never has a shadow, blur, glass or glow. The one tonal shift is the Security section, which reverses to ink; it is a change of stock, not an elevation. There is no colour gradient anywhere; every `linear-gradient` in the stylesheet is a line-drawing device (the margin texture, the `.ruled` and `#security` rulings, the painted dotted hairlines, the hatching of an empty plate, the fade mask on the scrolling nav, the mask on the texture itself).

### Shadow Vocabulary
- **Mounted** (`box-shadow: 0 10px 28px -12px rgba(19,26,22,0.35), 0 2px 6px -2px rgba(19,26,22,0.18)`, token `--shadow`): plate frames and the quote card at rest; a stamp on hover.
- **Stuck-on** (`box-shadow: 0 1px 0 var(--ink), 0 6px 14px -8px rgba(19,26,22,0.4)`): the sticker. The 1px hard ink line under it is the sticker's edge; the settled sticker drops the shadow entirely.
- **Call-out** (`filter: drop-shadow(0 6px 10px rgba(19,26,22,0.18))`): the plot's SVG call-out box.
- **Wash** (`background: rgba(249,251,247,0.55)`): a hovered round takes a translucent white wash (about #f0f4ee on paper), and its triage band extends 6px into the row via a `scaleX` pseudo-element, never by animating width.
- **Plate** (`background: rgba(229,236,228,0.95)`): near-opaque paper under row copy and receipts; it hides the ruling without reading as a surface.
- **Structural rule** (`box-shadow: inset 0 1px 0 <colour>` / `inset 0 -1px 0 <colour>`): not a shadow at all; the way a 1px top or bottom rule is painted without taking height. Ink for the top of a list, `rule-major` between rows, `paper` and 22% paper on the ink section.

### Named Rules
**The Paper Object Rule.** Only `sticker-white` objects with a 1px ink border cast a shadow. Nothing on the mint ground does, and nothing gets a shadow to signal importance.

**The Ink Recedes Rule.** A settled item recedes by colour only: heading and sticker to `ink-soft`, band to `ink-soft`, sticker shadow removed, receipt values to `ink-2`, heading struck through in `ink-faint`. Opacity is never used to age content, so the settled row stays above the contrast floor.

## Shapes

Square. Corners are 0 by default; the only radius is 2px on objects that are stamped or stuck onto the chart (stamp, sticker, plate frame, quote card, RESOLVED stamp), 1px on the screenshot inside a plate, and full circles for plotted nodes (SVG circles; 999px on the mobile step dots). Structure is drawn with rules at four weights: 1px in `rule-major` for row dividers and 1px in ink for the top of a list and the left of a receipt; 1.5px ink for stamp and RESOLVED borders and the vital's axis at 1.25; 2px ink for the header bottom, section heads, the footer top, and SVG nodes; 3px ink under the contact email. Horizontal 1px rules are painted, not bordered: inset `box-shadow` for row and list edges, a 4px × 1px repeating gradient (2px on, 2px off) in `rule-major` for the receipt and check-list hairlines; the only bordered rules are the 2px header, section-head, legal-head and footer rules, the 1px legal h2 rule, the receipt's left rule, and the mobile receipt's top rule, each paid for in the box's padding. The target band's edge is `3 4` dashed green and the breach leader `2 3` dashed red; an empty plate is 1px dashed `ink-faint` over −45° hatching (1px of 7% ink every 11px). Recorded divergence from the direction's "1px rules": the build uses 1 / 1.5 / 2 / 3px by role.

Signature silhouettes: the 24px vertical triage band; the 72px two-column sticker (mono ASIN and marketplace over a sans product name); the ticked box (22px square, white fill, 1.25 ink stroke, 2.5 red tick); the rotated RESOLVED stamp (−6°).

## Components

### Stamps (buttons)
Rubber-stamped actions: condensed caps on a filled square, two rules tall.
- **Shape:** near-square (2px radius), 1.5px border, 48px tall (`height: 2u`), `line-height: 1`, inline-flex with a 10px gap to an optional 14px stroke icon.
- **Primary (`.stamp`):** ink fill, paper text, `0 22px` padding, Action voice (600, 0.86rem, 85%, 0.08em, uppercase). In the header: 40px tall, `0 16px`, 0.78rem; `10px 14px` padding, 0.74rem below 900px.
- **Hover:** red fill and border, sticker-white text, Mounted shadow; 180ms ease-out on colour, border, shadow and transform. **Active:** 1px down, shadow removed. **Focus:** the global 2px red outline at 3px offset.
- **Outline (`.stamp-outline`):** transparent fill, ink text and border; hover fills sticker-white and stays ink (no red).
- Recorded inconsistency: the primary stamp's text is `paper` at rest and `sticker-white` on hover.

### Site header (printed form header)
- Paper background, 2px ink bottom rule, 72px tall in total (container `3u − 2px`), sticky at `top: 0` with `z-index: 50` above 900px; static below.
- **Brand:** 30px chart-glyph SVG (white square, 20% ruling, 1.5 ink frame, 2.4 ink line, red 3.2r dot) with the wordmark (700, 1.05rem, 92%) over a mono tagline (0.66rem, `ink-soft`, hidden below 900px).
- **Nav links:** Action voice at 0.8rem, `ink-soft`, 10px 12px padding, 2px transparent bottom border. Hover: ink text, `ink-faint` underline. Current page (`aria-current="page"`): ink text, red underline. 160ms transitions.
- **Mobile:** two-row grid; nav scrolls horizontally with the scrollbar hidden and a 40px fade mask at its right edge; first link flush left.

### Triage band
A 24px-wide vertical strip on the left margin with the action word in the Band voice rotated to read bottom-to-top, 14px from the top (12px inside a round, min-height 120px).
- **Classes:** `triage-red` (red, white text), `triage-amber` (amber fill, ink text), `triage-green` (green, white text), `triage-ink` (settled: `ink-soft`, white text).
- **Hover (inside a round):** a 6px pseudo-element extends the band rightward by `scaleX(0 → 1)`, 200ms.
- Recorded inconsistency: `.triage-ink` is declared as `ink-faint` but its only use is inside `.round-settled`, which overrides it to `ink-soft`; the effective settled band is `ink-soft`.

### Sticker (patient label)
- Inline two-column grid (`auto auto`, 14px column gap, no row gap, baseline-aligned): mono ASIN (`b`, 400, 0.02em) and marketplace (`.dim`, `ink-soft`) on the first 24px line, the product name (sans 600, 0.92rem, 92%) spanning the second.
- Sticker-white fill, 1px ink border, 2px radius, `11px 12px` padding, Stuck-on shadow, mono 0.78rem on a 24px line; exactly 72px tall (three rules). Settled: border and text `ink-soft`, no shadow. Below 520px it stacks to one column and becomes 96px (four rules). In the hero it sits 10px above the plot; in a round it is flush with the row's top padding.

### Plot (SVG conventions)
The observation chart, `viewBox 0 0 720 330`, `overflow: visible`, drawn with no container. Class vocabulary: `.axis` (ink 1.25), `.tick` (ink 1), `.band` (target-band fill), `.band-edge` (green 1, dashed 3 4), `.vital` (ink 2.5, round joins and caps), `.over` (red 3.5r dots for readings above target), `.breach` (red 6.5r dot with a 2.5 sticker-white stroke), `.leader` (red 1, dashed 2 3), `.callout-box` (sticker-white, ink 1, Call-out shadow), `.c-value` (condensed 700, 22px, red), `.c-sub` (mono, `ink-soft`). Axis text is mono 11px `ink-soft`; `.t-label` (target label) and `.t-unit` (axis unit) are condensed 600 10.5px, 1.2px tracking, uppercase, in `green-ink` and `ink-soft` respectively.

### Reading and figure
- `.reading` sits under the plot with a 1px ink top rule (14px padding above, 10px margin). Its `.label` spans the grid on a 24px line; the `.figure` (6rem red condensed) and `.reading-note` (0.95rem on a 24px line, `ink-2`, max 30rem, strong in ink, 6px pad below) sit side by side aligned at the end; `.gain` is a mono 0.8rem `green-ink` line 6px under the note; `.chart-caption` is mono 0.74rem `ink-soft` spanning the grid, 4px down. See the baseline inconsistencies under Layout: this block is the one on the landing page that is not snapped.

### Rounds and receipts (the brief)
- `.rounds` is an ordered list with a 1px ink top rule painted as `inset 0 1px 0`; each `.round` is a four-column grid row (band, sticker, body, receipt) with 1u padding top and bottom, 1u column gap, no row gap, and a 1px `rule-major` bottom rule painted as `inset 0 -1px 0`. Hover: Wash background, 200ms.
- **Body (`.round-body`):** a paper plate; h3 Title 1.2rem on a 24px line with one blank rule below; paragraph 0.98rem `ink-2` on a 24px line at 52ch.
- **Receipt:** a `dl` in the Reading voice on a paper plate (0 side margins) with a 1px ink left rule and 1u left padding; keys `ink-soft`, values ink and right-aligned, each pair exactly one 24px rule with a painted 4px × 1px `rule-major` hairline at its foot that the last pair drops. `.neg` values are red, `.pos` values `green-ink`. The `.receipt-title` ("Receipt · 14 days") is the Label voice at 0.7rem spanning both columns on its own 24px line, no margin.
- **Settled (`.round-settled`):** see The Ink Recedes Rule. The `.done` RESOLVED stamp is absolutely positioned top-right (0.7u down), `green-ink` 1.5px border and text, 4px 8px, rotated −6°; below 900px it becomes a static 24px-tall grid item (0 8px, 21px line, 24px top margin), unrotated.
- **Mobile (≤900px):** `24px 1fr`, `row-gap: 0`; sticker with a 24px bottom margin, receipt with a 1px `rule-major` top rule, 24px top margin and `24px − 1px` top padding, 0 side padding.
- `.rounds-note` (mono 0.74rem `ink-soft` on a 24px line, 1u above) follows the list as the sample-data disclaimer.

### Plates (screenshot frames)
- `.plate-frame`: sticker-white, 1px ink border, 2px radius, Mounted shadow, 8px padding, `aspect-ratio: 16/10` (2/1 for the lead), `overflow: hidden`. The image fills it at `object-fit: cover; object-position: top left` with a 1px radius and removes itself on error.
- `.plate-empty`: the fallback beneath the image (`inset: 8px`): paper fill with −45° hatching, 1px dashed `ink-faint` border, centred column with an ink `.label` title, a short `ink-soft` line, and optional mono `code` in a sticker-white chip with a `rule-major` border.
- **Caption:** flex row 12px below, `.label` on the left (flex-shrink 0, 3px top padding) and a 0.92rem `ink-2` description on a 24px line; stacks below 520px.

### Measures (feature rows)
- `.measures` has a 1px ink top rule (`inset 0 1px 0`); each `.measure` is `200px 1.05fr 1fr` with `2u 0 1u` padding (72px per row) and a painted `rule-major` bottom rule. Column one is the mono unit line (0.78rem `ink-soft`, 24px line, one span per line); column two, on a paper plate, the h3 (1.35rem, 24px line, one blank rule below) and 1rem `ink-2` paragraph at 46ch; column three, on a paper plate, a check list (14px ink stroke check 5px down, 12px gap, no padding, one 24px line per item, painted 4px × 1px `rule-major` hairlines that the last item drops, 0.95rem `ink-2`).

### Timeline and steps
- `.timeline-track` SVG (`viewBox 0 0 1152 48`, two rules tall, 1u below): 1.25 ink rail with 1px ticks, 6r nodes in paper with a 2px ink stroke, the live node red; a paper `rail-gap` rect knocks the rail out behind each label, set in the condensed 10.5px label voice. Hidden below 900px.
- `.steps`: three columns of h3 (1.2rem, 24px line, one blank rule below) + 0.98rem `ink-2` on a 24px line. On mobile each step gets a 12px ring node via `::before`, the last filled red.

### Never-list (the ticked form)
- 1px ink top rule (`inset 0 1px 0`); each row `22px 1fr` with 14px gap, `24px 0 0` padding (one blank rule above; the painted `rule-major` bottom rule sits directly under the text), 1rem ink text on a 24px line. The icon is the ticked box: 21px square white `.box` with a 1.25 ink stroke and a 2.5 red round-capped `.tick`. `.never-copy p` is 1.05rem `ink-2` at 34rem with one blank rule after.

### Controls (security, the ink section)
- `#security` is the one reversed section: `ink` ground, 5% paper ruling at 24px, `paper-dim` running text; `.section-head` rule, h2, h3, icons and links in `paper` (14.70:1), meta in `paper-dim` (9.81:1); link underline 40% paper, `paper` on hover; selection inverted (paper on ink).
- `.controls`: two-column grid, 2u column gap, 1px `paper` top rule (`inset 0 1px 0`); each `.control` is `26px 1fr` (26px paper stroke icon, 16px gap), 1u padding top and bottom, a 22% paper bottom rule (`inset 0 -1px 0`); h3 1.1rem on a 24px line with one blank rule below, paragraph 0.96rem `paper-dim` on a 24px line. Single column with no gap below 900px. `.section-note` (0.96rem `paper-dim`, 44rem, 24px line, 1u above) follows.

### Quote card and talk
- `.quote`: the one card on the page, sticker-white with a 1px ink border, 2px radius, Mounted shadow and `2u − 1px` / `1.5u` / `1.5u − 1px` padding so its lines stay on the ruling through the border; h3 1.5rem on a 24px line with one blank rule below, paragraph `ink-2` at 44ch with one blank rule below, a primary stamp, then a mono 0.76rem note one rule under.
- `.talk`: Headline h2 with one blank rule below, `ink-soft` paragraph at 30rem, the Email voice address on a 48px line one rule down with a 3px ink underline that turns red on hover (160ms), and a mono 0.78rem reply line.

### Section head, meta, intro
- `.section-head`: h2 and a right-aligned mono 0.78rem `ink-soft` margin note on one baseline, `24px − 2px` padding below, 2px ink rule, 2u after. `.section-intro` (1.1rem `ink-soft`, 40rem, 24px line) pulls up 1u to sit under the rule. Below 900px the meta drops under the h2, left-aligned, and wraps.

### Footer (the form's foot)
- 2px ink top rule, `24px − 2px` padding above and 2u below; a flex row, wrapping, of mono 0.76rem `ink-soft` text and links (no underline; red on hover), links spaced 1u.

### Legal pages
- `.legal` is a 32u column padded 3u / 1u / 4u (2u / 1u / 3u below 900px). `.legal-head` mirrors the section head (h1 Headline voice on a 48px line, mono "last updated" right, `24px − 2px` padding, 2px ink rule, 2u after). h2s are 1.35rem on a 24px line with a 1px `rule-major` top rule, 1u margin above and below and `24px − 1px` of padding above; body 1rem `ink-2` on a 24px line at 68ch with one blank rule (24px) between paragraphs and after lists; list markers `ink-faint`; links underlined in `rule-major`, red on hover; a stamp 1u below the text where present. 404.html reuses the shell with "Error 404" as the dateline.
- Recorded inconsistency: privacy.html and security.html carry the site footer and font preloads; 404.html has neither.

### Utilities and global states
- `.label` and `.mono` carry the Label and Reading voices; `.sr-only` hides visually. `.ruled` turns a section into ruled paper.
- Focus: `:focus-visible` 2px solid red outline, 3px offset, on every element. Selection: ink background, paper text (inverted inside `#security`). Caret: red. Links: inherit colour, 1px underline offset 0.18em, red underline on hover. Scrollbar (WebKit): 10px, `paper-deep` track, `ink-faint` thumb with a 2px `paper-deep` border, `ink-2` on hover. Anchors: `scroll-padding-top: 96px` on `html`, `scroll-margin-top: 96px` on every `[id]`; `scroll-behavior: smooth`, `auto` under reduced motion. `prefers-contrast: more` removes the margin texture and the `.ruled` ruling.
- **Motion:** easing `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`) everywhere; durations 160ms (nav, email), 180ms (stamp), 200ms (round wash, band extension). The single authored sequence, gated behind `prefers-reduced-motion: no-preference`: the vital draws itself with `stroke-dasharray/offset 1200` over 1100ms from 200ms; the ten over-target dots appear (300ms) from 600ms in 80ms steps to 1300ms; the breach dot at 1350ms; the call-out rises 6px and settles (500ms) at 1400ms; the figure (600ms) at 1500ms and the note at 1650ms. Under reduced motion everything is drawn at once and `scroll-behavior` is `auto`.

## Do's and Don'ts

### Do:
- **Do** size structure on the ruling: 24px and its multiples (1u, 1.5u, 2u, 3u, 4u) for padding, heights and section rhythm; 4–22px only inside a component; and when a box carries a real border, shrink its padding by the border (`24px − 2px`, `24px − 1px`) so the next line still lands on a rule.
- **Do** set every text size on `line-height: var(--u)` (24px) and the two display levels on 48px at ≥901px; pick a line of 24 or 48, never a ratio.
- **Do** paint 1px structural rules instead of laying them out: `box-shadow: inset 0 ±1px 0` for row and list edges, a 4px × 1px repeating gradient for dotted hairlines.
- **Do** give a text-heavy section `.ruled` (opaque paper, horizontal rules only) and put its copy and figures on paper plates (`rgba(229,236,228,0.95)`, 8px / −8px sides); leave plots, plates and diagrams on the plain masked ground.
- **Do** draw data straight onto the ground. A plot, a list of rows, a timeline gets a top rule and dividers, not a card.
- **Do** pick one type voice per element: wide 110% for h1/h2, condensed 78–85% caps for labels, stamps and bands, Fragment Mono for readings, and normal width for h3s and body.
- **Do** set the leading number larger than the heading when a surface leads with a reading (6rem figure over a 2.7rem h1).
- **Do** use `green-ink` for any green text and `triage-green` only for fills and strokes; use `ink-soft` (6.15:1) as the floor for text on paper and `paper-dim` (9.81:1) as the floor for text on ink.
- **Do** give stuck-on white objects a 1px ink border, 2px radius and a grounded shadow (`--shadow` or the sticker's 1px hard edge), and nothing else a shadow.
- **Do** age content by moving it to `ink-soft` and removing its shadow; keep its band, sticker and receipt in place.
- **Do** keep the 24px triage band as a vertical strip with the word rotated to read upward, ink text on amber, white on red and green.
- **Do** extend or reveal on hover with `transform` on a pseudo-element (the band's `scaleX`) and a 160–200ms `--ease-out` transition.
- **Do** label sample data in mono `ink-soft` directly beneath it ("Illustrative sample data, not a real account.").
- **Do** reorder the phone hero so the chart is second (h1, chart, actions, lead, facts), restart the ruling at each content block below 900px, and enlarge SVG lettering below 520px rather than letting the plot's text scale down with it.

### Don't:
- **Don't** add a radius above 2px, a pill, or a rounded card; the only circles are plotted nodes.
- **Don't** use opacity to fade, age or de-emphasise content; move it to a lighter ink token.
- **Don't** use `ink-faint` for text at any size, or `triage-green` for text.
- **Don't** put red on a heading, border or background for emphasis; red is a breach reading, a triage class, or the action's hover.
- **Don't** introduce glass, blur, glow, a colour gradient, or a shadow under anything that is not a white paper object.
- **Don't** wrap the plot, a receipt or a row list in a container, panel or tinted block; a paper plate hides the ruling and is not a panel.
- **Don't** draw the ruling with `rule` / `rule-major`, or a divider with `grid-minor` / `grid-major`; texture and structure are different tokens.
- **Don't** let the two-axis texture run behind the reading column, or let a rule cross a word or a numeral; mask it, rule horizontally, or plate over it.
- **Don't** add a second ink section; Security is the one reversed page of the form.
- **Don't** animate width, height or layout; the band extends with `scaleX`, the plot draws with `stroke-dashoffset`.
- **Don't** add motion outside the one authored sequence beyond a 160–200ms colour/transform transition, and never outside the reduced-motion gate for the sequence itself.
- **Don't** set h3s or body copy wide; the width axis above 100% is the display's alone.
- **Don't** invent a seventh label size or a sixth tracking; reuse the nearest existing pairing from the label-scale note under Typography.
- **Don't** reference `--red-deep` or `--amber`: both are declared in `:root` and used nowhere, and are not part of the recorded palette.
