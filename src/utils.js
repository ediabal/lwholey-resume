export const toKebabCase = str => {
  return str
    ? str
        .replace(/[^a-zA-Z\s+]/g, '') // remove special characters except spaces
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .toLowerCase()
    : null;
};
