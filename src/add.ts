import { Vector } from '@/types';

/**
 * Adds two vectors and returns the resulting vector.
 *
 * @param vectorA - The first vector to add.
 * @param vectorB - The second vector to add.
 * @returns The resulting vector after adding vectorA and vectorB.
 *
 * @example
 * ```typescript
 * const vector1 = { x: 1, y: 2 };
 * const vector2 = { x: 3, y: 4 };
 * add(vector1, vector2); // Output: { x: 4, y: 6 }
 * ```
 */
export function add(vectorA: Vector, vectorB: Vector): Vector {
  return { x: vectorA.x + vectorB.x, y: vectorA.y + vectorB.y };
}
