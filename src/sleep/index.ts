/**
 * ### sleep(ms)
 *
 * Return a promise that waits for `ms` milliseconds before resolving.
 *
 * ```js
 * async flocky.sleep(50)
 * // -> undefined
 * ```
 */

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export = sleep