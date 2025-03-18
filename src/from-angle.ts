import type { Vector } from './types';

/**
 * Creates a vector from a given angle.
 *
 * @param angle - The angle in radians to generate the vector from.
 * @returns A vector representing the direction.
 *
 * @example
 * ```typescript
 * const vector = fromAngle(Math.PI / 4);
 * console.log(vector); // Output: { x: 0.707..., y: 0.707... }
 *
 * const vector2 = fromAngle(0);
 * console.log(vector2); // Output: { x: 1, y: 0 }
 * ```
 */
export function fromAngle(angle: number): Vector {
  return { x: Math.cos(angle), y: Math.sin(angle) };
}
