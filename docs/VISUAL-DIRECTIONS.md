# Visual style direction — DECIDED

**Confirmed with Jonathan (2026-07-15): Direction B, revised to monochrome.**

The spec that supersedes the original three proposals below:

- **Reference brands**: Notion, Vercel, LangChain, Claude/Anthropic (peers:
  Cognition AI, Nous Research, Cursor) — the AI-native / dev-tools aesthetic,
  deliberately not traditional enterprise polish.
- **Mode**: light, monochrome. Grays and near-blacks do all the hierarchy
  work; there is no brand accent color. The drafting-blue accent and
  blueprint grid texture from the original Direction B are dropped.
- **Background**: warm off-white, Anthropic-style (`#faf9f5` page,
  `#f0efea` sunken surfaces) — the one deliberate deviation from stock
  cool-gray dev-tools sites.
- **Typography**: **Spline Sans Mono** for headings, eyebrows, labels, and
  metadata (terminal/code-editor feel); **Spline Sans** for body copy.
  A single designed superfamily — mono structure, proportional prose — so
  long-form case studies stay readable. Self-hosted via Fontsource variable
  fonts for performance. No second mono family (JetBrains / IBM Plex
  considered and rejected).
- **Structure kept from Direction B**: the "annotated system" language —
  mono metadata, exposed tokens, the styleguide page as a first-class
  design-system artifact.
- **Known risk, accepted**: this is the house style of the reference brands
  themselves. Differentiation comes from execution — the annotated
  styleguide, the one Rive moment, the writing — not the palette.

Implemented in `src/styles/tokens.css`; fonts load in
`src/layouts/BaseLayout.astro`.

---

## Original proposals (historical record)

Kept for the decision trail. Directions A and C are retired.

### A — "Field Notes" (warm editorial light) — retired

Writing-forward and calm: warm paper, serif display (Fraunces / Source
Serif), humanist grotesk body, forest-green accent. Strong for the
translator/leadership voice; risk was reading "design writer" rather than
"design technologist." Its warm-paper background survives into the final
direction; everything else is retired.

### B — "Blueprint" (technical light, annotated) — chosen, revised

As originally proposed: cool near-white, ink, drafting-blue accent
(`#2b5bd7`), blueprint grid texture, Space Grotesk display, IBM Plex Mono
labels. Chosen for making the site itself evidence for the design-systems
and engineering pillars. Revised per the confirmed reference brands: accent
and grid texture removed (monochrome), typography replaced with the Spline
Sans / Spline Sans Mono pairing.

### C — "Studio Signal" (dark, motion-forward) — retired

Charcoal ground, electric accent, large grotesk display, motion-permissive.
Strong for brand/motion craft, but dark long-form reading works against
case studies as the core content unit, and light mode is confirmed.
