import { lerp as mathlerp } from '@feldhaus/math';
import type { Vector } from './types';

/**
 * Linearly interpolates between two vectors.
 *
 * @param vectorA - The starting vector.
 * @param vectorB - The ending vector.
 * @param factor - The interpolation factor, typically between 0 and 1.
 * @returns A new vector that is the result of the linear interpolation.
 *
 * @example
 * ```typescript
 * const vectorA = { x: 0, y: 0 };
 * const vectorB = { x: 10, y: 10 };
 * const factor = 0.5;
 * lerp(vectorA, vectorB, factor); // Output: { x: 5, y: 5 }
 * ```
 */
export function lerp(vectorA: Vector, vectorB: Vector, factor: number): Vector {
  return {
    x: mathlerp(vectorA.x, vectorB.x, factor),
    y: mathlerp(vectorA.y, vectorB.y, factor),
  };
}
