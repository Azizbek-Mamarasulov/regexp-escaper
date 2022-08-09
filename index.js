exports.regexpEscaper = function (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
