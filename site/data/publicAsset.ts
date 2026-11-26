/**
 * Prefix a public/ path with the VitePress `base` (e.g. `/umacafe-guide/`).
 * Use for dynamically built URLs — static markdown `![](/x)` is rewritten by
 * VitePress, but Vue `:src` bindings and raw HTML `<img src="/x">` are not.
 */
export function publicAsset(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${normalized}`
}
