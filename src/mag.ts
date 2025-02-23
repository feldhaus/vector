import { magSqr } from '@/magSqr';
import { Vector } from '@/types';

/**
 * Calculates the magnitude of a given vector.
 *
 * @param vector - The vector for which to calculate the magnitude.
 * @returns The magnitude of the vector.
 *
 * @example
 * ```typescript
 * const vector = { x: 3, y: 4 };
 * mag(vector); // Output: 5
 * ```
 *
 * @example
 * ```typescript
 * const vector = { x: 1, y: 2 };
 * mag(vector); // Output: 2.23606797749979
 * ```
 */
export function mag(vector: Vector) {
  return Math.sqrt(magSqr(vector));
}
