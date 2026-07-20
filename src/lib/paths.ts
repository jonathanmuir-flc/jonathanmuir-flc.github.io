/**
 * Prefix an absolute site path with the configured base
 * (`/` in production, `/staging` on staging).
 * Always link through this helper so pages work under either base.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
