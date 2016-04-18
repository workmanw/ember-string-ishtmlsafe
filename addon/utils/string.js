export function isHtmlSafe(value) {
  return value && typeof value.toHTML === 'function';
}
