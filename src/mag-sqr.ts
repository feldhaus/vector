import type { Vector } from './types';

/**
 * Calculates the magnitude squared of a given vector.
 *
 * @param vector - The vector for which to calculate the magnitude squared.
 * @returns The magnitude squared of the vector.
 *
 * @example
 * ```typescript
 * const vector = { x: 3, y: 4 };
 * magSqr(vector); // Output: 25
 * ```
 *
 * @example
 * ```typescript
 * const vector = { x: 1, y: 2 };
 * magSqr(vector); // Output: 5
 * ```
 */
export function magSqr(vector: Vector): number {
  return vector.x * vector.x + vector.y * vector.y;
}
