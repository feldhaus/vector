import type { Vector } from './types';
import { div } from './div';
import { mag } from './mag';

/**
 * Normalizes a given vector to have a magnitude of 1.
 * If the vector has a magnitude of 0, it returns the original vector.
 *
 * @param vector - The vector to be normalized.
 * @returns The normalized vector.
 *
 * @example
 * ```typescript
 * const vector = { x: 3, y: 4 };
 * normalize(vector); // Output: { x: 0.6, y: 0.8 }
 * ```
 */
export function normalize(vector: Vector): Vector {
  const magnitude = mag(vector);
  if (magnitude > 0) {
    return div(vector, magnitude);
  }
  return vector;
}
