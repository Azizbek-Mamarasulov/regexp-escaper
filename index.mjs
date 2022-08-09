export function regexpEscaper(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
