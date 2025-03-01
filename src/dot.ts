import type { Vector } from './types';

/**
 * Calculates the dot product of two vectors and returns the resulting scalar.\
 * Dot Product tells how much two vectors point in the same direction.
 *
 * @param vectorA - The first vector for the dot product.
 * @param vectorB - The second vector for the dot product.
 * @returns The scalar result of the dot product of vectorA and vectorB.
 *
 * @example
 * ```typescript
 * const vectorA = { x: 1, y: 2 };
 * const vectorB = { x: 3, y: 4 };
 * dot(vectorA, vectorB); // Output: 11
 * ```
 *
 * @example
 * * ```typescript
 * const vectorA = { x: 1, y: 0 };
 * const vectorB = { x: -1, y: 0 };
 * dot(vectorA, vectorB); // Output: -1
 * ```
 */
export function dot(vectorA: Vector, vectorB: Vector): number {
  return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
}
