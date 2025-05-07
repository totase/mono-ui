/**
 * Generates an array of numbers within the specified range, in ascending order.
 *
 * @param start - The starting value of the range (inclusive).
 * @param end - The ending value of the range (inclusive).
 *
 * @returns An array containing numbers from `start` to `end`.
 */
export const range = (start: number, end: number): number[] => {
  const length = Math.abs(end - start) + 1;

  return Array.from({ length }, (_, i) => start + i);
};
