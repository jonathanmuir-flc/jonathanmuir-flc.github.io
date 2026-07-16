# Visual style directions — proposal

Three candidate directions for Jonathan to choose from (per the open question
in CLAUDE.md). Each is expressed as a swap of the token file
(`src/styles/tokens.css`) — components don't change, which is the point of
the token architecture. The current scaffold palette is a neutral
placeholder, closest in spirit to Direction A.

For each direction: what it signals against the target-role pillars, the
core palette/type moves, and the honest risk.

---

## A — "Field Notes" (warm editorial light)

Writing-forward and calm. Signals: the systems-thinker who documents,
frames, and leads — case studies read like well-edited essays.

- **Palette**: warm paper (`#faf7f2`) background, deep ink (`#221f1a`),
  forest green accent (`#2f5d50`) — a quiet nod to Forest Line Creative.
- **Type**: serif display (e.g. Fraunces or Source Serif) for headings,
  humanist grotesk (e.g. Inter) for body, mono only for eyebrows/labels.
- **Texture/motion**: minimal — generous whitespace, hairline rules,
  motion reserved for the one Rive moment.
- **Best evidence for**: pillar 6 (translator/leadership voice), pillar 1
  (editorial restraint reads as creative direction).
- **Risk**: can read more "design writer" than "design technologist" —
  the engineering signal has to come from the content, not the surface.

## B — "Blueprint" (technical light, annotated)

The design-technologist direction: the site presents itself a bit like a
well-documented system — visible grid, mono annotations, token call-outs.

- **Palette**: cool near-white (`#f7f8fa`), ink (`#16181d`), drafting-blue
  accent (`#2b5bd7`), faint blueprint grid texture in section backgrounds.
- **Type**: grotesk display (e.g. Space Grotesk), body in a neutral sans,
  heavy use of mono (IBM Plex Mono) for labels, metadata, and annotations.
- **Texture/motion**: measured — annotation lines that draw in, token
  values surfaced on hover in the styleguide.
- **Best evidence for**: pillars 2 and 4 (the site *looks like* engineered
  systems work), pillar 5 (pairs naturally with a "how this site was built"
  note).
- **Risk**: currently a popular aesthetic in the design-engineer scene —
  needs a personal twist to not read as a template.

## C — "Studio Signal" (dark, motion-forward)

Craft-forward and confident. The dark studio wall the work pops against.

- **Palette**: charcoal (`#141614`) background, off-white ink (`#eceee9`),
  one electric accent (chartreuse `#c6f232` or amber `#f2a33c`), surfaces
  a step lighter than the background.
- **Type**: large grotesk display (e.g. General Sans / Space Grotesk),
  tight tracking, confident scale jumps.
- **Texture/motion**: the most permissive of the three — hero moment can
  be the Rive piece itself; still one moment, not sprinkle.
- **Best evidence for**: pillars 1 and 3 (brand confidence + motion craft
  front and center).
- **Risk**: dark portfolios flatter visuals but punish long-form reading —
  case studies are the core content unit, so body contrast and measure
  need real care. Also the most common portfolio look in motion circles.

---

## Recommendation (soft)

**B ("Blueprint")** is the closest match to the target role's center of
gravity — it makes the site itself evidence for the design-systems and
engineering pillars, and the Rive/Lab work reads as *"and they also do
this"* rather than the whole story. A hybrid is also viable: B's annotated
structure with A's warmth (paper background, green accent) would
differentiate it from the stock design-engineer look.

Next step once a direction is picked: swap `tokens.css`, add the chosen
webfonts (self-hosted for performance), and review composition on staging
before any content work builds on top.
