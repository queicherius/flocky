/**
 * ### sum(array)
 *
 * Compute the sum of the values in an array.
 *
 * ```js
 * flocky.sum([1, 4, 2, -4, 0])
 * // -> 3
 * ```
 */

export function sum(array: Array<number>): number {
  return array.reduce((a, b) => a + b, 0)
}
