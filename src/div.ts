import type { Vector } from './types';

/**
 * Divides the vector by a scalar value and returns the resulting vector.
 *
 * @param vector - The vector to be divided.
 * @param value - The scalar value to divide the vector by.
 * @returns The resulting vector after dividing by the scalar value.
 *
 * @example
 * ```typescript
 * const vector = { x: 8, y: 10 };
 * const scalar = 2;
 * div(vector, scalar); // Output: { x: 4, y: 5 }
 * ```
 */
export function div(vector: Vector, value: number): Vector {
  return { x: vector.x / value, y: vector.y / value };
}
