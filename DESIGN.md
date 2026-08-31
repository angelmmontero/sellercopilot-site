---
name: SellerCopilot AI
description: The morning brief as an observation chart, printed on warm near-white stock ruled every 24px and read in three type voices.
colors:
  paper: "#f7f5f2"
  paper-deep: "#edeae5"
  white: "#ffffff"
  plate: "rgba(247, 245, 242, 0.95)"
  paper-dim: "#c9c4bc"
  ink: "#131a16"
  ink-2: "#2a3630"
  ink-soft: "#4a5951"
  ink-faint: "#6f7e75"
  rule: "rgba(19, 26, 22, 0.12)"
  rule-major: "rgba(19, 26, 22, 0.22)"
  grid-minor: "rgba(19, 26, 22, 0.045)"
  grid-major: "rgba(19, 26, 22, 0.10)"
  red: "#c0301c"
  amber-fill: "#e0930c"
  green: "#2f7a4f"
  green-ink: "#256a42"
  band: "rgba(47, 122, 79, 0.14)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch 110%"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: "48px"
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch 110%"
  figure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "6rem"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.03em"
    fontVariation: "font-stretch 68%"
  subhead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch 100%"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch 100%"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
    fontVariation: "font-stretch 100%"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
    fontVariation: "font-stretch 100%"
  row:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
    fontVariation: "font-stretch 100%"
  note:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
    fontVariation: "font-stretch 100%"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "0.12em"
    fontVariation: "font-stretch 78%, uppercase"
  action:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "font-stretch 85%, uppercase"
  eyebrow:
    fontFamily: "Fragment Mono, Courier New, Courier, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0.1em"
    fontVariation: "uppercase"
  reading:
    fontFamily: "Fragment Mono, Courier New, Courier, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0"
rounded:
  none: "0"
  stamp: "2px"
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
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  stamp-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.stamp}"
    padding: "0 22px"
    height: "{spacing.u-2}"
  stamp-outline-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  stamp-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.stamp}"
    padding: "0 16px"
    height: "40px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.action}"
    padding: "10px 12px"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-link-current:
    textColor: "{colors.ink}"
  nav-link-phone:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "0 24px"
    height: "{spacing.u-2}"
  nav-link-phone-current:
    textColor: "{colors.red}"
  nav-burger:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    width: "40px"
    height: "40px"
  sticker:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.reading}"
    rounded: "{rounded.stamp}"
    padding: "11px 12px"
    height: "{spacing.u-3}"
  triage-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    width: "24px"
  triage-amber:
    backgroundColor: "{colors.amber-fill}"
    textColor: "{colors.ink}"
    width: "24px"
  triage-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    width: "24px"
  triage-settled:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.white}"
    width: "24px"
  paper-plate:
    backgroundColor: "{colors.plate}"
    padding: "0 8px"
  shot-frame:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.stamp}"
    padding: "0"
  shot-caption:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.eyebrow}"
    padding: "0 2px"
    height: "{spacing.u}"
  callout:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    padding: "24px 0 0"
  spec-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    padding: "0"
    height: "{spacing.u}"
  band-section:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
  quote-card:
    backgroundColor: "{colors.white}"
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

The site is the observation chart clipped to the end of the bed on a 6am ward round. The ground is warm near-white stock (`paper`) ruled every 24px with a heavier line every fifth; the ruling is a paper texture that is strongest in the outer margins and fades out behind the centre column, and inside the form blocks it is repainted horizontally from each block's own top edge, so every row starts on a rule regardless of what precedes it. Everything on the chart is either ink (near-black green), a white paper object stuck onto it (sticker, quote card, plot call-out), a bordered screenshot slot where the product itself is mounted, or a coloured triage band down the margin. Nothing floats and nothing is a card: the plot in the first viewport is drawn straight onto the ground, the brief is a list of triage rows separated by 1px rules, and the seven feature measures are observation rows, two of them carrying a screenshot. One full-bleed band (`#read-only`) rests on the deeper paper, and one section, Security, is printed in reverse: ink ground, paper type, the same 24px ruling at 5% paper. The theme is light only and permanently so (`color-scheme: light`); there is no dark mode.

Density is that of a printed form: body text sits on the 24px ruling (17px on a 24px line), section h2s take a 48px line, structural rules are painted rather than laid out so they never push the pitch off, and sections are separated by a 2px ink rule with a small right-aligned note ("Today's rounds · 4 items · sample") rather than by whitespace or colour blocks. The world is read in three type voices from one variable family plus a mono: Archivo set wide (110%) for the two display levels, Archivo set condensed (78–85%) in tracked caps for form labels, stamps and triage bands, and Fragment Mono for readings only: receipts, ASINs, the plot's lettering, the gain line, the screenshot slot's caption and label, and short eyebrows. Prose captions and footnotes are not readings and are set in Archivo at `--t-3` (`.note`). The largest thing on the page is a number, not a headline: the net-profit figure is set at 6rem in condensed 700 while the h1 tops out at 2.7rem.

Colour is diagnostic, never decorative. Red is the one accent: the breach reading, the h1's thesis clause, and the hover state of every action. Green is accent-only: the SCALE band and the target band's edge (`green`), positive figures (`green-ink`), the translucent target wash (`band`). Amber is the REORDER band. There is no glass, no glow, no colour gradient, no drop-shadow on the ground itself. Motion is restraint-level and entirely an enhancement: with script off or `prefers-reduced-motion: reduce` the page is complete and static. With script, section content rises 8px on scroll-in, the vital plots itself once, the net-profit figure counts up once, and one note in the brief types itself once. Measured cumulative layout shift in the finish review: 0.

**Key Characteristics:**
- Warm near-white stock (`paper`) ruled at 24px, heavier every 120px; the ruling is the layout unit and the baseline: text sits on 24px lines, h2s on 48px.
- The ruling is texture, not structure: a masked two-axis grid in the page margins (`body::before`) and a horizontal-only `.ruling` painted from the top of each form block (the rounds list, every measure row); separate `rule` tokens for the hairlines that actually divide things.
- Three type voices from two families: Archivo wide (display), Archivo condensed caps (labels, stamps, bands), Fragment Mono (readings only); prose captions in the Archivo `.note` voice.
- Red / amber / green / settled-grey triage bands as 24px vertical margin strips with rotated condensed caps.
- Four screenshot slots (`.shot`): a mono caption bar over a bordered, hatched `paper-deep` frame that reserves its aspect ratio and shows a mono `[ SCREENSHOT: … ]` label until the file exists.
- White paper objects (stickers, quote card, plot call-out) and the shot frames are the only things that cast a shadow; near-opaque paper plates sit under row copy and receipts so no rule crosses a numeral.
- 2px radius on stamped, stuck-on and mounted objects, 0 everywhere else; 1px rules for structure, 2px for the form's header and section rules, all painted so they take no layout height.
- One deeper-paper band and one ink section in the run of paper; the settled state recedes by ink colour, never by opacity.
- Every authored motion runs once, is gated by the `js` class and by reduced motion, and never moves layout.

## Colors

A single near-black green ink at four strengths on warm near-white paper, red as the one accent, green and amber reserved as triage classes, pure white for objects stuck onto the chart, a deeper paper for the rest band and the screenshot frames, and one reversed section where the ink becomes the ground.

### Primary
- **Red** (`red`, 5.24:1 on paper, 5.71:1 on white): the out-of-range reading and the page's one accent. Used for the hero figure, the breach dot and its call-out value, the over-target dots, the red triage band, negative receipt values, the "live" timeline node, the tick in the never-row boxes, the `em` in the h1, the focus ring, the text caret, and the hover state of every stamp, nav underline (current page) and underlined link. It appears where something is wrong or where the reader is about to act.

### Secondary
- **Green** (`green`, 4.80:1 on paper): fill and stroke only. The SCALE triage band (white on it reads 5.23:1) and the dashed edge of the target band. Never used for running text.
- **Green Ink** (`green-ink`, 6.00:1 on paper, 6.52:1 on white): the text green. Positive receipt values, the "Est. +$435" gain line, the target-band label inside the plot, and the RESOLVED stamp's border and text.
- **Band** (`band`): 14% green wash; the shaded "your target ≤ 20%" region of the plot. Resolves to about #dbe4db on paper.
- **Amber Fill** (`amber-fill`): the REORDER triage band. It is the only band that takes ink text rather than white (7.03:1); white on this amber would fail.

### Neutral
- **Paper** (`paper`): the page ground, the header background, the `.ruled` sections' opaque ground, the timeline node fill and rail gaps, the stamp's text colour at rest, the mobile step node, and the selection text colour. On the ink section it is the heading, icon, link and top-rule colour (16.26:1 on ink).
- **Paper Deep** (`paper-deep`): the full-bleed `#read-only` band's ground, the screenshot frame's ground under its hatching, and the scrollbar track. Ink on it reads 14.74:1, `ink-soft` 6.16:1.
- **White** (`white`): pure white for objects stuck onto the chart: stickers, the quote card, the plot call-out box, the never-row's ticked box, the breach dot's stroke, the stamp's hover text, the outline stamp's hover fill, the text on red and green triage bands, and the 50% wash behind a hovered round.
- **Plate** (`plate`): `paper` at 95%, under `.round-body`, `.receipt`, `.measure-body` and `.measure-list`, so the `.ruling` behind a row never crosses a word or a numeral.
- **Paper Dim** (`paper-dim`, 10.20:1 on ink): secondary text on the ink section only: the running copy of the controls, the section note, and the section's margin note. Never used on paper.
- **Ink** (`ink`, 16.26:1 on paper): headings, body copy, axis and vital strokes, borders of stuck-on and mounted objects, the header and section rules, stamp fill, selection background, the never-row's text, and the ground of the Security section.
- **Ink 2** (`ink-2`, 11.56:1): running paragraph text inside rows (round bodies, measures, callouts, spec lists, steps, quote, legal body), the reading note, the never-foot, and settled receipt values.
- **Ink Soft** (`ink-soft`, 6.80:1 on paper, 7.40:1 on white, 6.16:1 on paper-deep): the label and note colour. Every `.label`, `.eyebrow`, `.note`, shot caption and placeholder, nav link at rest, lead and intro paragraphs, receipt keys, the settled round's heading, copy and sticker, and the settled triage band's fill.
- **Ink Faint** (`ink-faint`, 3.92:1): never text. The strike-through on a settled heading, the nav hover underline, legal list markers, and the scrollbar thumb.
- **Grid Minor** and **Grid Major** (`grid-minor`, `grid-major`): the 4.5% and 10% ink washes that draw the paper's ruling (24px minor, 120px major). They resolve to about #edebe8 and #e0dfdc on paper. Texture only; they never divide content.
- **Rule** and **Rule Major** (`rule`, `rule-major`): the 12% and 22% ink washes for structure. Rule Major (about #c5c5c2 on paper) is every row divider, the callout and spec-list top rule, the dotted receipt and spec hairlines, the never-row's bottom rule and item dividers, the legal h2 top rule and the legal link underline. `rule` is declared for structural hairlines and is currently unused by any selector.

### Named Rules
**The One Accent Rule.** Red is the only colour that may appear as an accent on paper. Green is a triage class and a positive figure; amber is a triage class; neither colours a heading, a link, a button or a decorative element.

**The Green Split Rule.** `green` fills and strokes; `green-ink` writes. A green value in text is always `green-ink` (6.00:1); a green area or line is always `green`.

**The Red Is A Reading Rule.** Red marks a value that is out of range or the action the reader is about to take. It never colours a heading, a border for emphasis, or a decorative element; the h1's red clause is the one exception and it is the page's thesis.

**The Faint Is Not Text Rule.** `ink-faint` sits at 3.92:1 and is used only for strikes, hover underlines, markers and the scrollbar. Text at any size uses `ink-soft` or darker.

**The Texture Is Not Structure Rule.** The ruling is drawn with `grid-minor` / `grid-major` (4.5% / 10%) and never with `rule` / `rule-major` (12% / 22%). A line that separates two things is a rule token at full width; a line that is merely paper is a grid token and may be masked away or covered by a plate.

**The One Ink Section Rule.** Security is the page's only reversed section: `ink` ground, `paper` headings, icons, links and top rule, `paper-dim` running text and notes, 5% paper ruling, dividers in paper (top) and 22% paper (between controls), selection inverted to paper-on-ink. The `#read-only` band is a rest on deeper paper, not a second dark section.

## Typography

**Display Font:** Archivo variable, self-hosted (`fonts/archivo.woff2`, `fonts/archivo-italic.woff2`; wght 100–900, wdth 62–125%) with Helvetica Neue, Arial fallback
**Body Font:** Archivo at normal width (100%)
**Label/Mono Font:** Fragment Mono 400, self-hosted (`fonts/fragment-mono.woff2`) with Courier New fallback

**Character:** One family read at three widths. Wide (110%) is the printed heading of the form; condensed (78–85%) in tracked caps is the field label and the rubber stamp; the mono is the handwritten reading. Body text and the small `.note` voice sit at normal width between them. Every text voice is set on the ruling: 24px lines for text, 48px for h2s. Numerals are tabular everywhere (`font-variant-numeric: tabular-nums` on body), so receipts and axes align. Headings use `text-wrap: balance`; paragraphs and notes use `text-wrap: pretty`.

### The ramp

Size is a closed system. Eleven steps are declared on `:root` in `styles.css` and every text size on every page is one of them; no selector carries a literal `font-size` in rem or px outside SVG lettering. The steps are shared across the voices — a step is a size, not a voice, and the voice is set by family, width, weight and tracking on top of it.

| Step | Value | 1440 / 390 | Where it is used |
| --- | --- | --- | --- |
| `--t-1` | `0.72rem` | 11.52 / 11.52px | `.label` (form labels), `.eyebrow` (mono eyebrows), the `.done` RESOLVED stamp, `.brand small` (tagline), the phone header stamp |
| `--t-2` | `0.8rem` | 12.8 / 12.8px | mono readings (`.receipt`, `.sticker`, `.gain`), `.shot-placeholder`, nav links, `.stamp`, `.hero-facts`, `.triage span`, the phone menu links |
| `--t-3` | `0.875rem` | 14 / 14px | the `.note` voice: captions, footnotes, `.meta`, the footer, `.legal .updated` |
| `--t-4` | `0.95rem` | 15.2 / 15.2px | row prose: `.round-body p`, `.measure-body > p`, `.callout p`, `.spec li`, `.step p`, `.control p`, `.never-item`, `.never-foot p`, `.section-note`, `.reading-note`, `.sticker-name` |
| `--t-5` | `1.0625rem` | 17 / 16px | body and `.legal p` / `.legal li`; the one step that steps down, overridden to `1rem` at ≤900px |
| `--t-6` | `1.125rem` | 18 / 18px | `.hero-copy .lead`, `.section-intro`, `.brand strong` (the wordmark) |
| `--t-7` | `1.2rem` | 19.2 / 19.2px | row titles: `.round-body h3`, `.step h3`, `.control h3` |
| `--t-8` | `1.5rem` | 24 / 24px | section and card titles: `.measure h3`, `.quote h3`, `.legal h2` |
| `--t-head` | `clamp(1.7rem, 2.6vw, 2.25rem)` | 36 / 27.2px | `.section-head h2`, `.talk h2` |
| `--t-display` | `clamp(2rem, 3.2vw, 2.7rem)` | 43.2 / 32px | the hero h1, `.legal h1`, and the contact `.talk .email` |
| `--t-figure` | `6rem` | 96 / 58.5px | `.figure`, the net-profit reading; overridden on `:root` to `clamp(3.6rem, 15vw, 5.5rem)` at ≤900px |

Verified rendered sets: at 1440 the page produces exactly 11.52 / 12.8 / 14 / 15.2 / 17 / 18 / 19.2 / 24 / 36 / 43.2 / 96px; at 390, 11.52 / 12.8 / 14 / 15.2 / 16 / 18 / 19.2 / 24 / 27.2 / 32 / 58.5px. The ≤900px block changes only `--t-5` and `--t-figure` on `:root`; it restyles no element to a new size, so the phone set is the desktop set with two substitutions.

### Hierarchy
- **Display** (600, `--t-display`, 48px line at ≥901px and 1.06 below, wide 110%, −0.035em, max 19ch; 16ch below 900px): the hero h1 and the legal page h1. Its final clause is red via `em` with italics removed. The contact email borrows the same step at condensed 78% (see Email).
- **Headline** (600, `--t-head`, 48px line at ≥901px / 1.1 below, wide 110%, −0.035em, max 24ch): section h2s and the contact h2.
- **Figure** (700, `--t-figure`, 0.86, condensed 68%, −0.03em, red, `white-space: nowrap`, `10px 0 14px` padding): the net-profit reading in the hero strip, counted up by script from `data-count`. It is deliberately larger than the display and is the one text size not on the ruling.
- **Subhead** (600, `--t-8`, 24px line, normal width 100%, −0.02em, one blank rule below): the measure h3, the quote card h3 and the legal h2.
- **Title** (600, `--t-7`, 24px line, normal width 100%, −0.02em, one blank rule below): the round, step and control h3s. Titles are not set wide; the width axis is reserved for the two display levels.
- **Lead** (400, `--t-6`, 24px line, `ink-soft`): the hero lead (max 32rem) and the section intro (max 40rem). The wordmark takes the same step at 700 / 92%.
- **Body** (400, `--t-5`, 24px line, normal width): the document default and the legal column's paragraphs and list items at 68ch, with one blank rule between paragraphs. `1rem` below 900px.
- **Row** (400, `--t-4`, 24px line, `ink-2` at 46–52ch): the prose inside a row — rounds, measures, callouts, spec items, steps, controls (in `paper-dim`), the never row (in ink), the never-foot, the section note and the reading note. The sticker's product name is the same step at 600 / 92%.
- **Note** (400, `--t-3`, 24px line, `ink-soft`, normal width): the `.note` voice for prose captions, sub-lines and footnotes: the section head's margin note, the chart caption, the rounds note, the measure unit line, the quote and talk notes, the legal "last updated", and the footer. On the ink section `.note` is `paper-dim`.
- **Label** (600, `--t-1`, 24px line, 0.12em, condensed 78%, uppercase, `ink-soft`): the `.label` field-label voice; on this page it sits once, above the figure. The brand tagline shares the step at normal width on a 1.2 line.
- **Action** (600, `--t-2`, 0.08em, condensed 85%, uppercase, `line-height: 1` inside a 48px stamp): stamps, nav links (0.08em) and hero facts (0.06em, on a 24px line). The 40px header stamp keeps the step and drops to `--t-1` below 900px.
- **Band** (700, `--t-2`, 0.16em, condensed 78%, uppercase, `writing-mode: vertical-rl` rotated 180°): the triage band's word. The RESOLVED stamp is the same voice at `--t-1`, 0.14em, rotated −6°.
- **Eyebrow** (Fragment Mono 400, `--t-1`, 24px line, 0.1em, uppercase, `ink-soft`): the `.eyebrow` voice for short mono captions: the receipt title ("Receipt · 14 days"), the callout heading, the "Included" heading over a spec list. The shot caption is the same voice at 0.06em.
- **Reading** (Fragment Mono 400, `--t-2`, 24px line, tracking 0): receipt keys and values, the gain line, the sticker's identifier row, and the shot placeholder (at 0.02em).
- **Email** (700, `--t-display`, 48px line, condensed 78%, −0.02em, 3px ink underline): the contact address, the only large condensed text that is not a figure. It shares the display step and is separated from the h1 by width, not size.

### Named Rules
**The New Element Reuses A Step Rule.** A new element picks one of the eleven `--t-*` tokens and sets its voice with family, width, weight and tracking. Adding a size is a change to the design system, made once on `:root` and named, never a local `font-size` on a selector. The audit test: `grep` the stylesheet for `font-size:` and every hit outside the SVG lettering is `var(--t-…)`.

**The Three Voices Rule.** Wide for the two display levels, condensed caps for anything that labels or stamps, mono for anything that is a reading. A new element picks one voice; it does not mix wide with caps or set a reading in the sans.

**The Mono Is A Reading Rule.** Fragment Mono is restricted to `.receipt`, the sticker's identifier and marketplace, the plot's lettering, the figure's gain line, `.shot-caption`, `.shot-placeholder` and `.eyebrow`, and within the ramp it uses only `--t-1` and `--t-2`. A caption, footnote, dateline or sub-line that is prose is set in the Archivo `.note` voice (`--t-3`), never in the mono. The test: if it could be printed by the instrument, it is mono; if a person wrote it, it is not.

**The Figure Outranks The Headline Rule.** The number that matters is set larger than any heading on the page (96px against a 43.2px h1 at 1440). A new surface that leads with a reading keeps that order.

**The Line Is 24px Rule.** Every step is set on `line-height: var(--u)` regardless of size: 11.52px labels, 12.8px mono, 14px notes, 15.2px row prose, 17px body, 19.2px and 24px titles all occupy one 24px rule; `--t-head`, `--t-display` and the contact email occupy two (48px) at ≥901px. A step picks a line of 24px or 48px, not a ratio. `--t-figure` (× 0.86) is the recorded exception, and below 900px the h1 (1.06) and h2 (1.1) fall off the line.

**Recorded exception (SVG lettering).** The plot and timeline set their text in viewBox units, outside the ramp and outside the rem system, because they scale with their SVG: axis text 15px, `.t-label` / `.t-unit` 13px, the call-out value 27px in the plot's 720-unit box (about 11 / 9.4 / 19px effective at 1440), and 10.5px in the timeline's 1152-unit rail. Below 520px the plot's lettering is enlarged to 22 / 20 / 40px because the SVG scales to roughly 0.45. This is a standing exception, not a defect: a value that must scale with its drawing cannot take a fixed step. Any lettering outside an SVG takes a ramp step.

## Layout

The unit is the ruling: `--u: 24px`. The ruling is painted in three ways, and the choice is by block, not by section:

- **Margin texture (`body::before`).** An absolutely positioned layer behind the page (`inset: 0; z-index: -1`) draws a two-axis grid: 1px `grid-minor` every 24px and 1px `grid-major` every 120px in both directions, offset −1px −1px. It is masked with `linear-gradient(90deg, #000, transparent 30%, transparent 70%, #000)`, so the grid is fully present in the outer 30% of the viewport on each side and absent behind the centre column. The hero and how-it-works sit on this layer alone.
- **Paper sections (`.ruled`: #brief, #features, #pricing).** Text-heavy sections paint plain opaque paper (`background-color: paper`) that covers the margin texture; they carry no ruling of their own.
- **Ruling blocks (`.ruling`: the `.rounds` list and every `.measure` row).** A form block paints a horizontal-only ruling from its own top edge: `background-size: 100% 120px, 100% 24px`, offset 0 −1px, in `grid-major` / `grid-minor`. Because the pitch restarts at each block, every row starts on a rule regardless of the height of the heading or intro above it, at every width. No vertical line ever crosses copy.
- **The band section (`.band-section`: #read-only).** Full-bleed `paper-deep` ground, no ruling; its section head keeps the 2px ink rule.
- **The ink section (`#security`).** Ink ground with a 1px 5% paper rule every 24px, offset 0 −1px.

Under `@media (prefers-contrast: more)` both the margin texture and the `.ruling` are removed; structural rules stay.

**Baseline.** Body `line-height` is 24px. Paragraphs, list items, receipt keys and values, labels, eyebrows, notes, captions, stickers and h3s are all set on the 24px line; `.section-head h2`, `.talk h2` and `.legal h1` take a 48px line at ≥901px. Structural rules are painted so they take no layout height: row, list, callout and spec rules are `box-shadow: inset 0 1px 0` (top) or `inset 0 -1px 0` (bottom); receipt and spec hairlines are a 4px × 1px repeating `linear-gradient` in `rule-major` at `0 100%`. Where a rule is a real border its box shrinks to compensate: the header container is `calc(3u − 2px)` under its 2px rule (72px total), `.section-head` and `.legal-head` pad `24px − 2px` above their 2px rule, the footer pads `24px − 2px` under its 2px top rule, `.legal h2` pads `24px − 1px` under its 1px rule, the mobile receipt pads `24px − 1px` under its 1px top rule, and the quote card pads `2u − 1px` / `1.5u − 1px` inside its 1px border. Row padding is in 24px multiples: `.round` 24 / 24, `.measure` 48 / 24 (two rules above the title, one below the list), `.never-item` 24 / 24, `.control` 24 / 24, `.callout` 24 above with 24 under its paragraph, the strip 24 / 24. h3s are followed by one blank rule (`margin-bottom: 24px`). Stamps are 48px tall (40px in the header); stickers are 72px tall (11px padding, 1px border, two 24px lines; 96px when they stack to three lines at ≤520px), with a 24px margin under the strip's sticker; the contact email sits on a 48px line. Legal paragraphs carry a 24px margin (one blank rule).

**Paper plates.** `.round-body`, `.receipt`, `.measure-body` and `.measure-list` carry `plate` (`paper` at 95%) with 8px side padding and −8px side margins, so the `.ruling` behind the row is covered under copy and figures. `.receipt` keeps 0 side margins so its 1px ink left rule stays on the column edge. The measure's unit column and its shot sit on the ruling unplated; the shot frame has its own ground.

**Screenshot slots.** Every product image lives in a `.shot`: a 24px mono caption bar (`.shot-caption`, left title and right "Product screenshot", 2px side padding) over a `.shot-frame` that fixes its own aspect ratio (`.shot-16x10` or `.shot-4x3`) and holds the `<img>` absolutely with `width`/`height` attributes, so a late or missing file never shifts layout. Four slots: `hero-app` (16:10, eager), `brief-daily` (16:10), `chart-product` and `inventory-view` (4:3, lazy). Files go in `/img/` under the names in `img/README.md`; no code changes are needed to swap the label for the capture.

Every structural dimension is a multiple of the unit: the container is 50u (1200px) wide with 1u gutters (16px below 520px); the header is 3u (72px) tall including its rule; sections pad 4u (96px) top and bottom, 3u below 900px; the hero pads 3u top / 2u bottom (2u top below 900px); the legal column is 32u (768px) wide; `scroll-padding-top` on `html` and `scroll-margin-top` on every `[id]` are both 4u (96px), so anchor targets clear the sticky header by one blank rule. Inside components the sub-unit vocabulary is 2 / 4 / 6 / 8 / 10 / 12 / 14 / 16 / 22px, with 12px (`u-half`) and 8px (`u-third`) the most common gaps.

**Grids in use (desktop, ≥1040px):**
- Header: `auto 1fr auto` (brand, centred nav, stamp), gap 1u, container height `3u − 2px`. Below 900px it becomes `1fr auto auto` (brand, stamp, menu button) and the nav drops out of the row into a menu.
- **Menu (≤900px):** a visually hidden `.nav-toggle` checkbox drives a 40px stamped `.nav-burger` square (1.5px ink border, 2px radius, paper fill, 18px icon that swaps to a close mark when checked). `.nav-toggle:checked ~ .main-nav` shows the links as a full-width ruled list in row 2: each link 48px tall at `--t-2` in ink, with a painted `rule-major` bottom rule, red on hover and for the current page. It needs no script; `script.js` only syncs `aria-label` / `aria-expanded`, closes the menu after a link is chosen, and closes it on Escape.
- Hero: `5fr 7fr`, gap 2u, `align-items: start`. Copy left (padded 1u down), the hero shot right; both sit above the strip.
- Strip (`.strip`, spanning both hero columns): `24px minmax(0, 6fr) minmax(0, 6fr)`, column gap 2u, 1u margin above, 1u padding top and bottom, a 1px ink top rule painted as `inset 0 1px 0`. Column one is the red STOP ADS band; column two the sticker (24px below it) and the plot (`viewBox 0 0 720 236`); column three the reading.
- Reading (`.reading`): `auto 1fr`, column gap 1.5u, `align-items: end`; the label spans both columns, the figure and note sit side by side aligned at the baseline end, the caption spans both 1u below.
- Split (`#brief`, `.split`): `minmax(0, 8fr) minmax(0, 4fr)`, column gap 2u, 2u below; the 16:10 brief shot left and three callouts right, the callouts padded 1u down so their first rule meets the frame's top edge.
- Rounds: `24px 190px 1fr 290px` (band, sticker, body, receipt), column gap 1u, no row gap, padding 1u top and bottom, inset rules; 170 / 240px at ≤1040px.
- Receipt: `minmax(0, 1fr) auto`, column gap 12px, so a wrapping key never desyncs its value; 1px ink left rule, 1u left padding; each key/value pair is one 24px rule.
- Measures: `200px 1.05fr 1fr` (unit, body, spec list), column gap 1.5u, padding 2u / 1u; 160px first column at ≤1040px. Rows that carry a screenshot (`.measure-shot`): `200px minmax(0, 1fr) minmax(0, 1.25fr)` (160 / 1fr / 1.2fr at ≤1040px), the body holding its callouts 1u below the paragraph and the 4:3 shot in the third column.
- Steps: three equal columns, gap 1.5u, under a full-width SVG rail (1152 × 48 viewBox, two rules tall) with 1u below.
- Never row: `repeat(4, minmax(0, 1fr))` with a 1px ink top rule and a 1px `rule-major` bottom rule (both inset); items pad 1u top / right / bottom and, from the second on, 1u left behind a 1px `rule-major` left border. The `.never-foot` (an outline stamp) follows 1u below.
- Controls: two columns, 2u column gap. Close band: `1.1fr 1fr` (quote, talk), gap 2u.
- Section head: `1fr auto` with the h2 and its `.note` margin note aligned at the end, `24px − 2px` padding below, 2px ink rule, 2u margin after. The section intro that follows pulls up by 1u and leaves 2u after.

**Breakpoints:** 1040px (row columns tighten), 900px (single column, header static), 520px (phone).

**At ≤900px** the body drops to 1rem; the header stops being sticky and becomes brand + stamp + menu button in one row, with the nav collapsed into the checkbox-driven menu described under Components (tagline hidden; below 360px the wordmark is hidden too). h2s fall back to a 1.1 line. The hero becomes one column with 1u gaps and the copy block is dissolved with `display: contents` so its children can be reordered against the shot and the strip: h1 (1), hero shot (2), actions (3), lead (4), facts (5), strip (6); the product enters the first phone viewport under the headline. The strip becomes `24px 1fr` with a 16px gap: the band spans the plot, the plot column and the reading both take column 2, the reading stacks to one column 1u below, and the figure scales to `clamp(3.6rem, 15vw, 5.5rem)`. The split stacks (shot, then callouts with no top padding). Rounds become `24px 1fr` with `row-gap: 0` and 24px steps: the band spans four rows, the sticker takes a 24px bottom margin, the receipt loses its left rule for a 1px `rule-major` top rule with `margin-top: 24px` and `padding-top: 24px − 1px`, and the RESOLVED stamp becomes a static 24px-tall grid item (0 8px padding, 21px line, 24px top margin), unrotated. Measures stack with `row-gap: 24px` and 1u padding in the order body (1), spec list or shot (2), unit line (3), the unit line demoted to a footnote joined by " · ". The timeline SVG is hidden and each step draws its own 12px node with `::before` (the last one red). The never row stacks to one column with an inset `rule-major` rule under each item and no left borders; controls and the close band go single column.

**At ≤520px** gutters drop to 16px; hero stamps go full width and centred; hero facts top-align their icons; stickers stack to one column (96px tall); the shot caption drops its right span and truncates its title with an ellipsis; the plot's lettering is enlarged (axis 22px, labels 20px / 2px tracking, call-out value 40px, sub 20px) and the call-out box is repositioned to `x:150 y:0 w:340 h:96` with its text shifted −120px and the leader hidden, because the SVG scales to roughly 0.45.

### Named Rules
**The Ruling Rule.** Vertical structure lands on 24px or a named sub-unit, and text lands on the 24px line. A rule that separates rows is painted (inset shadow or repeating hairline) and takes no height; a rule that is a real border is paid for by shrinking the box it sits on (`Nu − 2px`, `Nu − 1px`).

**The Ruling Restarts Rule.** The horizontal ruling belongs to the form block, not the section: `.ruling` goes on the list or row whose lines must land on rules (`.rounds`, each `.measure`), and it paints from that block's own top. A section never paints a ruling behind a heading, an intro or a screenshot.

**The Ground Rule.** A section is one of four grounds: plain (the masked margin texture shows through; for the hero and the timeline), paper (`.ruled`: opaque `paper`, for sections whose content is rows of text or the quote), band (`.band-section`: full-bleed `paper-deep`, one per page, for the read-only rest), or ink (`#security` only). A new text-heavy section takes `.ruled` and puts `.ruling` on its rows; a new visual section stays plain.

**The Plate Rule.** Where copy or figures sit inside a `.ruling` block, they sit on a paper plate (`plate`, 8px side padding, −8px side margins) so the ruling is a texture between blocks and never a line through a word or a number.

**The Slot Rule.** A product image never appears bare or in an ad-hoc frame. It goes in a `.shot` with a fixed aspect class, a mono caption bar above, `width`/`height` on the `<img>`, and the mono `[ SCREENSHOT: slot · ratio ]` label beneath, so the page reads the same with or without the file and never shifts when it arrives.

**Recorded inconsistencies (layout).** The hero strip's two columns are not snapped to a shared pitch: the plot column is 72px sticker + 24px + an SVG whose height follows its width (720:236, about 169px at 1440), and the reading column's figure is 6rem × 0.86 (82.56px) plus `10px 0 14px` padding; the triage band's word sits 12px down. Below 900px the h1 (1.06) and h2 (1.1) remain off the 24px line; the `.ruling` blocks restart their pitch, so the effect is contained to the heads. Small off-grid values remain inside components: the mobile header's 12px top padding and 6px nav margin, the brand tagline's `--t-1` on a 1.2 line, the shot caption's 2px side padding.

## Elevation & Depth

Depth is physical layering: white paper objects and the mounted screenshot frames lie on a flat chart and cast a small, grounded shadow onto it. The chart, the rows, the header and the sections are flat and cast nothing; the ground never has a shadow, blur, glass or glow. The two tonal shifts are the deeper-paper rest band and the Security section's reverse to ink; both are a change of stock, not an elevation. There is no colour gradient anywhere; every `linear-gradient` in the stylesheet is a line-drawing device (the margin texture, the `.ruling` and `#security` rulings, the painted dotted hairlines, the hatching of an empty shot frame, the fade mask on the scrolling nav, the mask on the texture itself).

### Shadow Vocabulary
- **Mounted** (`box-shadow: 0 10px 28px -12px rgba(19,26,22,0.28), 0 2px 6px -2px rgba(19,26,22,0.14)`, token `--shadow`): shot frames and the quote card at rest; a stamp on hover.
- **Stuck-on** (`box-shadow: 0 1px 0 var(--ink), 0 6px 14px -8px rgba(19,26,22,0.35)`): the sticker. The 1px hard ink line under it is the sticker's edge; the settled sticker drops the shadow entirely.
- **Call-out** (`filter: drop-shadow(0 6px 10px rgba(19,26,22,0.16))`): the plot's SVG call-out box.
- **Wash** (`background: rgba(255,255,255,0.5)`): a hovered round takes a translucent white wash (about #fbfaf9 on paper), and its triage band extends 6px into the row via a `scaleX` pseudo-element, never by animating width.
- **Plate** (`background: var(--plate)`): near-opaque paper under row copy and receipts; it hides the ruling without reading as a surface.
- **Hatch** (`repeating-linear-gradient(-45deg, transparent 0 14px, rgba(19,26,22,0.045) 14px 15px)` over `paper-deep`): the empty shot frame; a 1px 4.5% ink hatch every 15px that reads as "no print here yet".
- **Structural rule** (`box-shadow: inset 0 1px 0 <colour>` / `inset 0 -1px 0 <colour>`): not a shadow at all; the way a 1px top or bottom rule is painted without taking height. Ink for the top of the strip, the rounds, the measures and the never row; `rule-major` between rows and above callouts and spec lists; `paper` and 22% paper on the ink section.

### Named Rules
**The Paper Object Rule.** Only `white` objects with a 1px ink border (sticker, quote card, call-out) and the mounted shot frames cast a shadow. Nothing else on the ground does, and nothing gets a shadow to signal importance.

**The Ink Recedes Rule.** A settled item recedes by colour only: heading, copy and sticker to `ink-soft`, band to `ink-soft`, sticker shadow removed, receipt values to `ink-2`, heading struck through in `ink-faint`. Opacity is never used to age content, so the settled row stays above the contrast floor.

## Shapes

Square. Corners are 0 by default; the only radius is 2px on objects that are stamped, stuck onto or mounted on the chart (stamp, sticker, shot frame, quote card, RESOLVED stamp), and full circles for plotted nodes (SVG circles; 999px on the mobile step dots). Structure is drawn with rules at four weights: 1px in `rule-major` for row dividers, callout and spec rules and the never row's item dividers, and 1px in ink for the top of the strip, a list or a row set, the left of a receipt and the border of a shot frame; 1.5px ink for stamp and RESOLVED borders and the vital's axis at 1.25; 2px ink for the header bottom, section heads, the footer top and SVG nodes; 3px ink under the contact email. Horizontal 1px rules are painted, not bordered: inset `box-shadow` for row, list, callout and spec edges, a 4px × 1px repeating gradient (2px on, 2px off) in `rule-major` for the receipt and spec hairlines; the only bordered rules are the 2px header, section-head, legal-head and footer rules, the 1px legal h2 rule, the receipt's left rule, the never row's left dividers and the mobile receipt's top rule, each paid for in the box's padding where it affects the pitch. The target band's edge is `3 4` dashed green and the breach leader `2 3` dashed red; an empty shot frame is a solid 1px ink border over −45° hatching. Recorded divergence from the direction's "1px rules": the build uses 1 / 1.5 / 2 / 3px by role.

Signature silhouettes: the 24px vertical triage band; the 72px two-column sticker (mono ASIN and marketplace over a sans product name); the ticked box (21px square, white fill, 1.25 ink stroke, 2.5 red tick); the rotated RESOLVED stamp (−6°); the captioned, hatched screenshot slot.

## Components

### Stamps (buttons)
Rubber-stamped actions: condensed caps on a filled square, two rules tall.
- **Shape:** near-square (2px radius), 1.5px border, 48px tall (`height: 2u`), `line-height: 1`, inline-flex with a 10px gap to an optional 14px stroke icon.
- **Primary (`.stamp`):** ink fill, paper text, `0 22px` padding, Action voice (600, `--t-2`, 85%, 0.08em, uppercase). In the header: 40px tall, `0 16px`, `--t-2`; `0 12px`, `--t-1` below 900px.
- **Hover:** red fill and border, white text, Mounted shadow; 180ms ease-out on colour, border, shadow and transform. **Active:** 1px down, shadow removed. **Focus:** the global 2px red outline at 3px offset.
- **Outline (`.stamp-outline`):** transparent fill, ink text and border; hover fills white and stays ink (no red). Used for "Read today's brief" in the hero and "Read the security overview" in the never-foot.
- Recorded inconsistency: the primary stamp's text is `paper` at rest and `white` on hover.

### Site header (printed form header)
- Paper background, 2px ink bottom rule, 72px tall in total (container `3u − 2px`), sticky at `top: 0` with `z-index: 50` above 900px; static below.
- **Brand:** the product mark shared with the application at app.sellercopilot.ai, used verbatim: a 30px indigo `#4f46e5` rounded square (rx 7) carrying three ascending bars in `#c7d2fe`, `#e0e7ff` and `#ffffff` (26px below 430px). It is the one place indigo appears; the mark keeps its own colour so the site and the app read as one product, and the palette does not adopt it. Beside it the wordmark (700, `--t-6`, 92%; `--t-2` below 430px) sits over a sans tagline (`--t-1`, 1.2 line, `ink-soft`, hidden below 900px). The name is never hidden.
- **Nav links:** Action voice at 0.8rem, `ink-soft`, 10px 12px padding, 2px transparent bottom border. Hover: ink text, `ink-faint` underline. Current page (`aria-current="page"`): ink text, red underline. 160ms transitions.
- **Mobile:** two-row grid; nav scrolls horizontally with the scrollbar hidden and a 40px fade mask at its right edge; first link flush left.

### Screenshot slot (`.shot`)
The product, mounted on the chart. A `figure` with no margin and `min-width: 0`.
- **Caption (`.shot-caption`):** a `figcaption` flex row, `space-between`, 1u gap, Eyebrow voice at 0.06em, `ink-soft`, 24px line, `0 2px` padding, `nowrap`; the right span ("Product screenshot") is `ink-faint`. Below 520px the right span is hidden and the left truncates with an ellipsis.
- **Frame (`.shot-frame`):** `position: relative`, `paper-deep` ground with the Hatch, 1px ink border, 2px radius, Mounted shadow, `overflow: hidden`; `aspect-ratio: 16 / 10` (`.shot-16x10`) or `4 / 3` (`.shot-4x3`).
- **Placeholder (`.shot-placeholder`):** absolutely filling the frame, centred, 1u padding, mono `--t-2` 0.02em `ink-soft`: `[ SCREENSHOT: hero-app · 16:10 ]`, `aria-hidden`.
- **Image:** `<img>` absolutely filling the frame at `z-index: 1`, `object-fit: cover; object-position: top left`, `width`/`height` attributes (1600 × 1000 or 1600 × 1200), `decoding="async"`, `loading="lazy"` on all but the hero; `color: transparent; font-size: 0` so a broken image shows no alt text over the label. Script removes a 404'd image so the label shows through; without script the label sits beneath the transparent broken image.
- **Placement:** the hero (`.shot-hero`, 16:10, right of the copy), the brief split (16:10, wide, left of the callouts), and two `.measure-shot` rows (4:3, right column, `margin-top: 0`).

### Callouts (`.callouts` / `.callout`)
Short captioned notes beside a screenshot.
- `.callouts` is a grid with `align-content: start`; in the brief split it pads 1u down so its first rule meets the frame's top; inside a measure body it sits 1u below the paragraph.
- Each `.callout` has a 1px `rule-major` top rule painted as `inset 0 1px 0`, 1u padding above, then an Eyebrow (`.eyebrow`, mono `--t-1` caps) on one 24px line and a `--t-4` `ink-2` paragraph on the 24px line with 1u padding below; `strong` is ink 600.

### Spec list (`.spec`)
The hairline "Included" list under a measure, no glyphs.
- A `ul` with no markers and a 1px `rule-major` top rule (`inset 0 1px 0`), preceded by an "Included" `.eyebrow` (no margin) inside the `.measure-list` plate.
- Each `li` is `--t-4` `ink-2` on a 24px line with no padding and a painted 4px × 1px `rule-major` hairline at its foot that the last item drops; a wrapping item takes two rules and keeps the hairline under its last line.

### Triage band
A 24px-wide vertical strip on the left margin with the action word in the Band voice rotated to read bottom-to-top, 12px from the top (min-height 120px inside a round, stretched to the row).
- **Classes:** `triage-red` (red, white text), `triage-amber` (amber fill, ink text), `triage-green` (green, white text), `triage-ink` (settled: `ink-soft`, white text).
- **Hover (inside a round):** a 6px pseudo-element extends the band rightward by `scaleX(0 → 1)`, 200ms.

### Sticker (patient label)
- Inline two-column grid (`auto auto`, 14px column gap, no row gap, baseline-aligned): mono ASIN (`b`, 400, 0.02em) and marketplace (`.dim`, `ink-soft`) on the first 24px line, the product name (sans 600, `--t-4`, 92%) spanning the second.
- White fill, 1px ink border, 2px radius, `11px 12px` padding, Stuck-on shadow, mono `--t-2` on a 24px line; exactly 72px tall (three rules). Settled: border and text `ink-soft`, no shadow. Below 520px it stacks to one column and becomes 96px (four rules). In the strip it sits 24px above the plot; in a round it is flush with the row's top padding.

### Strip and plot (the observation)
The hero's observation strip is a `figure` spanning both hero columns: band, sticker + plot, reading; see Layout for the grid.
- **Plot (SVG):** `viewBox 0 0 720 236`, `overflow: visible`, drawn with no container. Class vocabulary: `.axis` (ink 1.25), `.tick` (ink 1), `.band` (`band` fill), `.band-edge` (green 1, dashed 3 4), `.vital` (ink 2.5, round joins and caps), `.over` (red 3.5r dots for readings above target), `.breach` (red 6.5r dot with a 2.5 white stroke), `.leader` (red 1, dashed 2 3), `.callout-box` (white, ink 1, Call-out shadow), `.c-value` (condensed 700, 27px, −0.3px, red), `.c-sub` (mono, `ink-soft`). Axis text is mono 15px `ink-soft`; `.t-label` (target label, `green-ink`) and `.t-unit` (axis unit, `ink-soft`) are condensed 600 13px, 1.4px tracking, uppercase.
- **Reading (`.reading`):** the strip's `figcaption`. `.label` spanning the grid on a 24px line; the `.figure` (`--t-figure` red condensed, `data-count="398" data-prefix="−$"`) and `.reading-note` (`--t-4` on a 24px line, `ink-2`, max 30rem, strong in ink) side by side aligned at the end; `.gain` is a mono `--t-2` `green-ink` block inside the note; `.chart-caption` is a `.note` spanning the grid 1u below. Recorded: the figure's `10px 0 14px` padding and 0.86 line keep this column off the pitch (see Layout).

### Rounds and receipts (the brief)
- `.rounds` is an ordered list carrying `.ruling` and a 1px ink top rule painted as `inset 0 1px 0`; each `.round` is a four-column grid row (band, sticker, body, receipt) with 1u padding top and bottom, 1u column gap, no row gap, and a 1px `rule-major` bottom rule painted as `inset 0 -1px 0`. Hover: Wash background, 200ms.
- **Body (`.round-body`):** a paper plate; h3 Title `--t-7` on a 24px line with one blank rule below; paragraph `--t-4` `ink-2` on a 24px line at 52ch. The first round's paragraph carries `data-typed` and types itself once (see Motion); while typing, a 2px ink caret follows the text (`.is-typing .typed::after`).
- **Receipt:** a `dl` in the Reading voice on a paper plate (0 side margins) with a 1px ink left rule and 1u left padding; keys `ink-soft`, values ink and right-aligned, each pair exactly one 24px rule with a painted 4px × 1px `rule-major` hairline at its foot that the last pair drops. `.neg` values are red, `.pos` values `green-ink`. The title ("Receipt · 14 days", "Outcome · 24 h") is an `.eyebrow` spanning both columns on its own 24px line.
- **Settled (`.round-settled`):** see The Ink Recedes Rule. The `.done` RESOLVED stamp is absolutely positioned top-right (0.7u down), `green-ink` 1.5px border and text, 4px 8px, rotated −6°; below 900px it becomes a static 24px-tall grid item (0 8px, 21px line, 24px top margin), unrotated.
- `.rounds-note` (a `.note`, 1u above) follows the list as the sample-data disclaimer.

### Measures (feature rows)
- `.measures` has a 1px ink top rule (`inset 0 1px 0`); each `.measure` carries `.ruling`, is `200px 1.05fr 1fr` with `2u 0 1u` padding and a painted `rule-major` bottom rule. Column one is the unit line: a `.note` (Archivo `--t-3` `ink-soft`, 24px line) with one `span` per line, unplated. Column two (`.measure-body`, plated): the h3 (`--t-8`, 24px line, one blank rule below) and a `--t-4` `ink-2` paragraph at 46ch, with a 1u margin below when something follows. Column three is either `.measure-list` (plated: "Included" eyebrow + spec list) or, on a `.measure-shot` row, a 4:3 `.shot`, in which case the body also holds `.callouts` 1u under its paragraph.

### Timeline and steps
- `.timeline-track` SVG (`viewBox 0 0 1152 48`, two rules tall, 1u below): 1.25 ink rail with 1px ticks, 6r nodes in paper with a 2px ink stroke, the live node red; a paper `rail-gap` rect knocks the rail out behind each label, set in the condensed 10.5px label voice. Hidden below 900px.
- `.steps`: three columns of h3 (`--t-7`, 24px line, one blank rule below) + `--t-4` `ink-2` on a 24px line. On mobile each step gets a 12px ring node via `::before`, the last filled red.

### Never row (the ticked form, on the band)
- `#read-only` is the `.band-section`: full-bleed `paper-deep`, the usual section head and intro, then `.never-row`: four equal columns with a 1px ink top rule and a 1px `rule-major` bottom rule (inset); each `.never-item` is `22px 1fr` with a 12px gap, 1u padding (top, right, bottom), `--t-4` ink text on a 24px line; items after the first pad 1u left behind a 1px `rule-major` left border. The icon is the ticked box: 21px square white `.box` with a 1.25 ink stroke and a 2.5 red round-capped `.tick`, nudged 1px down. `.never-foot` (flex, 1u gap, 1u above) holds an outline stamp to the security overview. Below 900px the row stacks with an inset `rule-major` rule under each item.

### Controls (security, the ink section)
- `#security` is the one reversed section: `ink` ground, 5% paper ruling at 24px, `paper-dim` running text; `.section-head` rule, h2, h3, icons and links in `paper` (16.26:1), `.meta` and `.note` in `paper-dim` (10.20:1); link underline 40% paper, `paper` on hover; selection inverted (paper on ink).
- `.controls`: two-column grid, 2u column gap, 1px `paper` top rule (`inset 0 1px 0`); each `.control` is `26px 1fr` (26px paper stroke icon, 16px gap), 1u padding top and bottom, a 22% paper bottom rule (`inset 0 -1px 0`); h3 `--t-7` on a 24px line with one blank rule below, paragraph `--t-4` `paper-dim` on a 24px line. Single column with no gap below 900px. `.section-note` (`--t-4` `paper-dim`, 44rem, 24px line, 1u above) follows.

### Quote card and talk
- `.quote`: the one card on the page, white with a 1px ink border, 2px radius, Mounted shadow and `2u − 1px` / `1.5u` / `1.5u − 1px` padding so its lines stay on the ruling through the border; h3 `--t-8` on a 24px line with one blank rule below, paragraph `ink-2` at 44ch with one blank rule below, a primary stamp, then a `.note` one rule under.
- `.talk`: Headline h2 with one blank rule below, `ink-soft` paragraph at 30rem, the Email voice address on a 48px line one rule down with a 3px ink underline that turns red on hover (160ms), and a `.note` reply line.

### Section head, meta, intro
- `.section-head`: h2 and a right-aligned `.note` margin note on one baseline, `24px − 2px` padding below, 2px ink rule, 2u after. `.section-intro` (`--t-6` `ink-soft`, 40rem, 24px line) pulls up 1u to sit under the rule and leaves 2u after. Below 900px the meta drops under the h2, left-aligned, and wraps.

### Footer (the form's foot)
- 2px ink top rule, `24px − 2px` padding above and 2u below; a flex row, wrapping, of `.note`-sized (`--t-3`, 24px line) `ink-soft` text and links (no underline; red on hover), links spaced 1u.

### Legal pages
- `.legal` is a 32u column padded 3u / 1u / 4u (2u / 1u / 3u below 900px). `.legal-head` mirrors the section head (h1 Headline voice on a 48px line, "last updated" as a `--t-3` `ink-soft` note right, `24px − 2px` padding, 2px ink rule, 2u after). h2s are `--t-8` on a 24px line with a 1px `rule-major` top rule, 1u margin above and below and `24px − 1px` of padding above; body `--t-5` `ink-2` on a 24px line at 68ch with one blank rule (24px) between paragraphs and after lists; list markers `ink-faint`; links underlined in `rule-major`, red on hover; a stamp 1u below the text where present. 404.html reuses the shell with "Error 404" as the dateline.
- Recorded inconsistency: privacy.html and security.html carry the site footer and font preloads; 404.html has neither.

### Utilities and global states
- `.label`, `.eyebrow` and `.note` carry the Label, Eyebrow and Note voices; `.sr-only` hides visually; `.ruled` gives a section opaque paper; `.ruling` paints the horizontal ruling on a block; `.band-section` gives a section the deeper paper.
- Focus: `:focus-visible` 2px solid red outline, 3px offset, on every element. Selection: ink background, paper text (inverted inside `#security`). Caret: red. Links: inherit colour, 1px underline offset 0.18em, red underline on hover. Scrollbar (WebKit): 10px, `paper-deep` track, `ink-faint` thumb with a 2px `paper-deep` border, `ink-2` on hover. Anchors: `scroll-padding-top: 96px` on `html`, `scroll-margin-top: 96px` on every `[id]`; `scroll-behavior: smooth`, `auto` under reduced motion. `prefers-contrast: more` removes the margin texture and the `.ruling`. `color-scheme: light` on `html`; `theme-color` is `paper`.

### Motion
Restraint-level, and all of it an enhancement. `script.js` (deferred) adds the `js` class to `html`; every authored motion is scoped to `html.js` or to `prefers-reduced-motion: no-preference`, so without script or with reduced motion the page is complete and static. Easing is `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`) everywhere; nothing animates width, height or layout.
- **Transitions:** 160ms (nav link, contact email), 180ms (stamp colour, border, shadow, transform), 200ms (round wash, band extension). Under reduced motion the band, stamp and nav transitions are removed.
- **Rise (`[data-rise]`):** section heads, intros, the split, the rounds, each measure, the timeline, the never row and foot, the controls, the section note, the quote and the talk start at `opacity: 0; translateY(8px)` under `html.js` and settle over 300ms when `.is-in` is added by an `IntersectionObserver` (`rootMargin: 0 0 −8% 0`, unobserved after entry), staggered by `--i × 70ms` where `--i` is the element's `data-rise` index (0–3). Anything already in view 50ms after load is shown at once; without `IntersectionObserver`, or under reduced motion, everything is shown at once.
- **Plot (CSS, `no-preference` only):** the vital draws itself with `stroke-dasharray/offset 1200` over 700ms from 150ms; the ten over-target dots appear (240ms) from 380ms in 40ms steps to 740ms; the breach dot at 800ms; the call-out rises 6px and settles (400ms) at 860ms. Under reduced motion all of it is drawn at once.
- **Count-up (`[data-count]`):** the figure counts from 0 to `data-count` with `data-prefix` over 900ms on a cubic ease-out (`1 − (1 − p)³`) the first time it is half in view; its `min-width` is pinned to its rendered width first, so the digits never reflow the strip. Numbers are formatted `en-US`.
- **Typing (`[data-typed]`):** the first round's note types itself once when 60% in view: the paragraph's `min-height` is reserved, the full copy is kept in an `.sr-only` span for assistive technology, an `aria-hidden` `.typed` span receives the characters at `clamp(9, 20, 1500 / length)` ms each after a 250ms pause, a 2px ink caret follows via `.is-typing .typed::after`, and the caret is removed 400ms after the last character.
- **Slots:** script removes any `.shot img` that fails to load (or has already failed) so the mono label shows.
- Measured cumulative layout shift in the finish review: 0.

### Named Rules
**The Enhancement Rule.** Motion is added by the `js` class and removed by `prefers-reduced-motion: reduce`; the static page is the baseline, not a fallback. A new motion hooks onto `html.js` or the `no-preference` query and reserves its space (`min-width`, `min-height`, `aspect-ratio`) before it runs.

**The Once Rule.** Every authored motion runs exactly once, on entry, and then unobserves: the rise, the plot, the count-up, the typing. Nothing loops, nothing replays on scroll-back, nothing responds to the pointer beyond a 160–200ms colour or transform transition.

## Do's and Don'ts

### Do:
- **Do** size structure on the ruling: 24px and its multiples (1u, 1.5u, 2u, 3u, 4u) for padding, heights and section rhythm; 2–22px only inside a component; and when a box carries a real border, shrink its padding by the border (`24px − 2px`, `24px − 1px`) so the next line still lands on a rule.
- **Do** set every text size on `line-height: var(--u)` (24px) and h2s on 48px at ≥901px; pick a line of 24 or 48, never a ratio.
- **Do** paint 1px structural rules instead of laying them out: `box-shadow: inset 0 ±1px 0` for row, list, callout and spec edges, a 4px × 1px repeating gradient for dotted hairlines.
- **Do** give a text-heavy section `.ruled` (opaque paper) and put `.ruling` on the block whose rows must land on rules, with its copy and figures on paper plates (`plate`, 8px / −8px sides); leave the hero and diagrams on the plain masked ground.
- **Do** draw data straight onto the ground. A plot, a list of rows, a timeline gets a top rule and dividers, not a card.
- **Do** mount every product image in a `.shot`: fixed aspect class, mono caption bar, `width`/`height` on the `<img>`, mono `[ SCREENSHOT: slot · ratio ]` label beneath, filename from `img/README.md`.
- **Do** pick one type voice per element: wide 110% for h1/h2, condensed 78–85% caps for labels, stamps and bands, Fragment Mono for readings and eyebrows, and normal width for h3s, body and notes.
- **Do** set prose captions, footnotes, datelines and sub-lines in the Archivo `.note` voice (`--t-3`, `ink-soft`, 24px line); keep the mono for what an instrument would print.
- **Do** set the leading number larger than the heading when a surface leads with a reading (6rem figure over a 2.7rem h1).
- **Do** use `green-ink` for any green text and `green` only for fills and strokes; use `ink-soft` (6.80:1) as the floor for text on paper and `paper-dim` (10.20:1) as the floor for text on ink.
- **Do** give stuck-on white objects a 1px ink border, 2px radius and a grounded shadow (`--shadow` or the sticker's 1px hard edge), give the shot frame the same border, radius and shadow over hatched `paper-deep`, and give nothing else a shadow.
- **Do** age content by moving it to `ink-soft` and removing its shadow; keep its band, sticker and receipt in place.
- **Do** keep the 24px triage band as a vertical strip with the word rotated to read upward, ink text on amber, white on red and green.
- **Do** gate every authored motion behind `html.js` or `prefers-reduced-motion: no-preference`, run it once on entry, and reserve its space before it starts (pin `min-width` before a count-up, `min-height` before typing).
- **Do** extend or reveal on hover with `transform` on a pseudo-element (the band's `scaleX`) and a 160–200ms `--ease-out` transition.
- **Do** label sample data in the `.note` voice directly beneath it ("Illustrative sample data, not a real account.").
- **Do** reorder the phone hero so the product is second (h1, shot, actions, lead, facts, strip), stack measure rows body → list or shot → unit line, and enlarge SVG lettering below 520px rather than letting the plot's text scale down with it.

### Don't:
- **Don't** add a radius above 2px, a pill, or a rounded card; the only circles are plotted nodes.
- **Don't** add a dark mode or a second theme; the page is `color-scheme: light` and the one ink section is a change of stock, not a theme.
- **Don't** use opacity to fade, age or de-emphasise content; move it to a lighter ink token.
- **Don't** use `ink-faint` for text at any size, or `green` for text.
- **Don't** put red on a heading, border or background for emphasis, or green and amber anywhere but a triage band, a positive figure and the plot's target band.
- **Don't** introduce glass, blur, glow, a colour gradient, or a shadow under anything that is not a white paper object or a shot frame.
- **Don't** set a prose caption, footnote, meta line or unit line in Fragment Mono; the mono is for receipts, identifiers, plot lettering, the gain line, the slot's caption and label, and eyebrows.
- **Don't** wrap the plot, a receipt or a row list in a container, panel or tinted block; a paper plate hides the ruling and is not a panel.
- **Don't** paint a ruling on a section; put `.ruling` on the block (a list, a row) so the pitch restarts where the rows start.
- **Don't** draw the ruling with `rule` / `rule-major`, or a divider with `grid-minor` / `grid-major`; texture and structure are different tokens.
- **Don't** let the two-axis texture run behind the reading column, or let a rule cross a word or a numeral; mask it, rule horizontally, or plate over it.
- **Don't** place a product image outside a `.shot`, or leave a slot without `width`/`height` and an aspect class.
- **Don't** add a second ink section or a second full-bleed band; Security is the one reversed page of the form and read-only is its one rest.
- **Don't** animate width, height or layout; the band extends with `scaleX`, the plot draws with `stroke-dashoffset`, the rise is an 8px transform, and the counted figure is pinned to its final width.
- **Don't** replay a motion, loop it, or run it without the `js` gate and the reduced-motion gate.
- **Don't** set h3s or body copy wide; the width axis above 100% is the display's alone.
- **Don't** invent another label, mono or prose size; reuse the nearest existing pairing from the size note under Typography.
