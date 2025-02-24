import { mag } from '@/mag';
import { Vector } from '@/types';

/**
 * Calculates the Euclidean distance between two vectors.
 *
 * @param vectorA - The first vector.
 * @param vectorB - The second vector.
 * @returns The distance between the two vectors.
 *
 * @example
 * ```typescript
 * const vectorA = { x: 1, y: 2 };
 * const vectorB = { x: 4, y: 6 };
 * distanceBetween(vectorA, vectorB); // Output: 5
 * ```
 */
export function distanceBetween(vectorA: Vector, vectorB: Vector): number {
  return mag({ x: vectorB.x - vectorA.x, y: vectorB.y - vectorA.y });
}
