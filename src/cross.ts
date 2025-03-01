import type { Vector } from './types';

/**
 * Calculates the cross product of two vectors and returns the resulting scalar.\
 * Cross Product tells how much one vector is perpendicular to the other.
 *
 * @param vectorA - The first vector for the cross product.
 * @param vectorB - The second vector for the cross product.
 * @returns The scalar result of the cross product of vectorA and vectorB.
 *
 * @example
 * ```typescript
 * const vectorA = { x: 1, y: 2 };
 * const vectorB = { x: 3, y: 4 };
 * cross(vectorA, vectorB); // Output: -2
 * ```
 */
export function cross(vectorA: Vector, vectorB: Vector): number {
  return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
}
