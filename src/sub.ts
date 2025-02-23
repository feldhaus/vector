import { Vector } from '@/types';

/**
 * Subtracts the second vector from the first vector and returns the resulting vector.
 *
 * @param vectorA - The first vector.
 * @param vectorB - The second vector to subtract from the first vector.
 * @returns The resulting vector after subtracting vectorB from vectorA.
 *
 * @example
 * ```typescript
 * const vector1 = { x: 5, y: 7 };
 * const vector2 = { x: 3, y: 4 };
 * sub(vector1, vector2); // Output: { x: 2, y: 3 }
 * ```
 */
export function sub(vectorA: Vector, vectorB: Vector): Vector {
  return { x: vectorA.x - vectorB.x, y: vectorA.y - vectorB.y };
}
