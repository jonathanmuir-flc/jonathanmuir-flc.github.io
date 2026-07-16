/** Display labels for case-study discipline tags (schema enum in content.config.ts). */
export const TAG_LABELS = {
  "product-design": "Product Design",
  "design-systems": "Design Systems",
  "motion-emerging-tech": "Motion & Emerging Tech",
} as const;

export type Tag = keyof typeof TAG_LABELS;
