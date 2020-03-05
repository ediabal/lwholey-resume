export const toKebabCase = str => {
  return str ? str.replace(/\s+/g, '-').toLowerCase() : null;
};
