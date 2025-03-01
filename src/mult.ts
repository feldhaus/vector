import type { Vector } from './types';

/**
 * Multiplies the vector by a scalar value and returns the resulting vector.
 *
 * @param vector - The vector to be multiplied.
 * @param value - The scalar value to multiply the vector by.
 * @returns The resulting vector after multiplying by the scalar value.
 *
 * @example
 * ```typescript
 * const vector = { x: 8, y: 10 };
 * const scalar = 2;
 * mult(vector, scalar); // Output: { x: 16, y: 20 }
 * ```
 */
export function mult(vector: Vector, value: number): Vector {
  return { x: vector.x * value, y: vector.y * value };
}
