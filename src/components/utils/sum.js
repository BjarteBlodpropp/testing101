/**
 * Method for calculating the sum of two Integers
 * @param x Integer
 * @param y Integer
 * @returns the sum of two integers
 */

export const sum = (x, y) => {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    return NaN;
  }
  return x + y;
};
