export function regexpEscaper(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
