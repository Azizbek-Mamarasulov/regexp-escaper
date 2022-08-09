exports.regexpEscaper = function (text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
