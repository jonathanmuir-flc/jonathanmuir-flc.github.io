import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Case studies are the core content unit of the site. The schema encodes
 * the case-study template from CLAUDE.md so every entry carries the same
 * structure — the content model is part of the design system.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string().max(280),
    role: z.string(),
    timeline: z.string(),
    team: z.string().optional(),
    tools: z.array(z.string()),
    tags: z
      .array(z.enum(["product-design", "design-systems", "motion-emerging-tech"]))
      .min(1),
    /** One-line outcome shown on cards; the full story lives in the body. */
    outcome: z.string(),
    /** Featured entries surface on Home (final picks are TBD with Jonathan). */
    featured: z.boolean().default(false),
    /** Enterprise work pending NDA review renders with a disclosure note. */
    nda: z.boolean().default(false),
    /** Sort order on the Work index (lower first). */
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies };
