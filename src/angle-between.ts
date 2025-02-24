import { Vector } from '@/types';

/**
 * Calculates the angle in radians between two vectors.
 *
 * @param vectorA - The first vector.
 * @param vectorB - The second vector.
 * @returns The angle in radians between vectorA and vectorB.
 *
 * @example
 * ```typescript
 * const vector1 = { x: 1, y: 2 };
 * const vector2 = { x: 3, y: 4 };
 * angleBetween(vector1, vector2); // Output: 0.7853981633974483 (45 degrees)
 * ```
 */
export function angleBetween(vectorA: Vector, vectorB: Vector): number {
  return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
}
