# FLC Portfolio — Project Brief

Read this file before doing any work in this repo. It's the product/design brief for Jonathan's personal portfolio site — build against it, don't improvise the strategy.

## Who this is for

Jonathan Muir — creative technologist / product designer. Enterprise design background (Cisco, Dell Technologies, Flex), now at LogicGate (AI GRC platform, Series C), with experience spanning marketing, product, and engineering. Currently also contracting for an early-stage startup on marketing collateral — a live source for fresh print/collateral work. Approaches problems through systems design thinking and frameworks. Interested in where technology and creative craft intersect (motion/interactive tools like Rive and Cavalry are part of his toolkit).

## Target role — the north star

Jonathan wrote himself an aspirational role spec: **Lead Interactive UX Engineer, Brand and Content** — a hybrid of brand/creative direction, front-end engineering, motion/interaction design, design-systems ownership, and AI-driven creative automation. This is self-authored (not a specific job posting he's applying to) and should function as the skills rubric the portfolio proves out. Six pillars from that spec, and how the site should show evidence of each:

1. **Brand Identity & Creative Direction** — visual style/design system consistency across the whole site (already a design principle below).
2. **Interactive Digital Experience Engineering** — clean responsive front-end, coded (not just designed) components, engineered for site speed, SEO, and WCAG accessibility. This isn't just a "polish pass" at the end — it's core evidence for this pillar and should be treated with real weight in Phase 4.
3. **Dynamic Motion & Interaction Design** — the Rive piece isn't just a nice-to-have flex, it's direct proof of this exact line item ("proven ability to build state machines and interactive animations in Rive").
4. **Systems Design & Token Management** — the documented design system (tokens, components) is itself evidence, not just a means to build the site faster.
5. **Creative Automation & AI Platform Engineering** — the fact that this site is being built with Claude Code / an AI-assisted workflow, with a real branching/staging pipeline, IS relevant evidence here. Worth considering a short "how this site was built" note/case study documenting the AI-assisted build process itself. Also: his resume already lists Claude Code, MCP, and AirOps under current skills, and the LogicGate role description mentions "evolving the design system with agentic workflows" — meaning this pillar has real current evidence, not just this site as an example. Surface that explicitly rather than letting the site-build story carry the whole pillar alone.
6. **Cross-functional "Translator" Leadership** — case study writing should surface where Jonathan bridged product, marketing, and engineering — not just describe visual output.

Audience: **external** — this is a template for pursuing equivalent roles wherever they show up, not an internal LogicGate case. LogicGate context should be spelled out (external readers won't have it), and the architecture should stay extensible so new personal/freelance projects can be added over time as case studies, not treated as a fixed, one-time set.

## Purpose (dual)

1. **Land the next role** — staff/lead/head-of design or design-technologist roles. Every case study should read like evidence for that level: not just "I made this," but "here's how I framed the problem, the system I built, and the impact."
2. **Personal brand / thought leadership** — a credible home for his POV on the design × emerging-tech intersection. This isn't just a resume in web form.

CTA priority: make it trivially easy to (a) contact him, (b) grab a resume, (c) see 2–3 strongest case studies without digging.

## Process & learning goals (equally important as the site itself)

Jonathan wants this build to double as hands-on practice with real web dev workflows — not just a finished site. Treat this as a constraint on *how* work gets done, not just *what* gets built:

- **Branching model**: `main` = production (auto-deploys live via GitHub Pages). `develop` = integration branch where work lands and gets reviewed before going live. Feature branches per unit of work (e.g. `feature/home-layout`, `feature/case-study-template`) branch off `develop`, get opened as PRs, reviewed, then merged.
- **Staging**: `develop` deploys via a separate GitHub Actions job to a staging preview (e.g. a `/staging` subpath or a second Pages deployment target) so Jonathan can review a working build before promoting to `main`/production. Keep this inside GitHub — no new hosting accounts, consistent with the free/simple hosting decision below.
- **Promotion flow**: feature branch → PR into `develop` → review on staging → periodic PR from `develop` → `main` → production deploy. This is the actual muscle memory being practiced (dev → staging → prod), not just shipping code.
- **Commit hygiene**: small, reviewable commits per phase (already noted below) — Jonathan should be able to follow the diff and understand what changed and why at each step.

This section should be revisited once Jonathan and Claude Code confirm the exact GitHub Actions staging setup — treat the above as the working proposal, not locked-in.


## Tech stack — decided

- **Astro** (static site generator). Reasons: minimal shipped JS, component-based, purpose-built for content-heavy sites like this, and its islands architecture means an interactive Rive canvas or a Cavalry export (Lottie/video) can be dropped in as an isolated component without bloating the rest of the site with JS. Neither Rive nor Cavalry care what framework serves the page — both just need a mount point and their own runtime/asset, so Astro doesn't limit this at all.
- **Astro Content Collections** for case studies — each case study is a structured Markdown/MDX entry validated against a schema (title, role, timeline, tags, summary, outcome, etc.), not a one-off hand-built page. This enforces the template consistently and is itself a small demonstration of systems thinking in how the site is built.
- **Hosting: GitHub Pages**, deployed via a GitHub Actions workflow (`astro build` → `gh-pages` branch or Pages' native Actions deploy). Repo is already connected: `jonathanmuir-flc/FLC-Portfolio`. Free, no new accounts, deploys automatically on push to `main`.

## Information architecture

- **Home** — positioning statement (systems thinker at the design/tech intersection), 2–3 featured case studies, short about teaser, primary CTA.
- **Work (index)** — all case studies, ideally filterable/taggable by discipline (product design / design systems / emerging tech & motion).
- **Case study (template, repeated per project)**:
  - Overview: context, role, timeline, team, tools
  - Problem / challenge
  - Process: research, framing, the system or framework applied
  - Key decisions (the "why," not just the "what")
  - Visuals / prototypes
  - Outcome / impact (metrics if available)
  - Reflection / what he'd do differently
- **About** — career arc (Cisco → Dell Technologies → Flex → Cisco again → LogicGate — see RESUME-SOURCE.md for the corrected chronology and role specifics; note the two non-contiguous Cisco stints), the design+marketing+product+engineering crossover story, philosophy on systems thinking and emerging tech.
- **Lab / Experiments** *(recommended, not yet confirmed with Jonathan)* — a space for interactive motion work (Rive pieces, Cavalry exports). This can double as a craft flex: an actual interactive Rive component embedded in the site, not just a screenshot of one.
- **Contact / Resume** — resume download, contact method, LinkedIn/GitHub links.

## Design principles

### Visual style direction (confirmed)

Reference brands: Notion, Vercel, LangChain, Claude/Anthropic — also studying Cognition AI, Nous Research, Cursor as design-language peers. This is the AI-native / dev-tools "unicorn" aesthetic, deliberately in contrast to traditional enterprise polish (Apple, Google, Cisco read as too corporate/generic for this positioning).

- **Mode**: light mode, dominant — monochromatic palette of grays and whites doing most of the work, not saturated brand color.
- **Typography**: technical/engineering feel for headers and labels — should evoke a code editor or terminal. Likely a monospace or geometric-mono-adjacent typeface (e.g. JetBrains Mono, IBM Plex Mono, Space Mono, Berkeley Mono) rather than a humanist sans — confirm exact reference with Jonathan before locking a specific font, since "Open Sans" (a humanist sans) and "looks like code/terminal" are in some tension typographically.
- **Overall**: minimal, restrained, generous whitespace.
- **Narrative fit**: the design language itself needs to argue the positioning — systems thinking, cutting-edge technical fluency — not just the copy. This is a direct extension of the "demonstrate systems thinking" principle below, applied to visual choices specifically.


- The site should *demonstrate* systems thinking, not just claim it: a small documented design system (color, type, spacing, component tokens) used consistently, not one-off styling per page.
- One tasteful interactive/motion moment (e.g. a Rive piece) beats motion sprinkled everywhere — restraint signals craft.
- Case studies are the core content unit — treat the content model (schema) as seriously as the visual design.

## Build sequencing (Jonathan's call — confirmed)

1. **Scaffold first**: Astro project setup, routing/IA, and visual composition/layout using placeholder content. Get the look and feel right before content is real — Jonathan wants to validate composition before writing.
2. **Content**: structure and write case studies against the schema/template above, plus About/resume content.
3. **Visuals**: drop in Jonathan's existing visual assets; explicitly audit for gaps (which case studies are missing visuals, need new mockups/shots, or need a motion piece).
4. **Polish & launch**: accessibility pass, performance check, SEO/meta, deploy to GitHub Pages, optional custom domain.

Jonathan has **no case studies fully migrated yet** from his existing Webflow site — this is a from-scratch rebuild, not a content port.

## Open questions / TBD (flag to Jonathan, don't assume)

- **NDA / confidentiality on enterprise work**: Cisco, Dell Technologies, and Flex projects likely have confidentiality constraints. Decide per-project how to represent them (redacted visuals, abstracted process description, explicit "details limited by NDA" framing) vs. the startup work, which may be freer to show in full.
- ~~Visual style direction~~ — confirmed, see Design principles section below.
- Which projects/case studies are the featured 2–3 on Home.
- Domain name / whether a custom domain will be added on top of GitHub Pages.
- Whether a working contact form is wanted or a simple mailto/LinkedIn link is enough.

## Notes for whoever (Claude Code / Fable) is coding this

- This repo is already git-initialized and connected to GitHub (`jonathanmuir-flc/FLC-Portfolio`, branch `main`). Don't re-init.
- Favor small, reviewable commits per phase above so Jonathan can follow along and learn the process (this build doubles as his own learning exercise in working with Claude Code).
- Don't build out full case study content yet — Phase 1 is structure/layout with placeholder content only, per the sequencing above.
