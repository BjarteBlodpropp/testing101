export const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string') {
    return string;
  }
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
};
