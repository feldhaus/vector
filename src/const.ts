import { Vector } from '@/types';

/**
 * A zero vector {x: 0, y: 0}.
 *
 * @constant {Vector} VECTOR_ZERO
 */
export const VECTOR_ZERO: Vector = { x: 0, y: 0 } as const;

/**
 * A unit vector pointing up {x: 0, y: 1}.
 *
 * @constant {Vector} VECTOR_UP
 */
export const VECTOR_UP: Vector = { x: 0, y: 1 } as const;

/**
 * A unit vector pointing down { x: 0, y: -1 }.
 *
 * @constant {Vector} VECTOR_DOWN
 */
export const VECTOR_DOWN: Vector = { x: 0, y: -1 } as const;

/**
 * A unit vector pointing left { x: -1, y: 0 }.
 *
 * @constant {Vector} VECTOR_LEFT
 */
export const VECTOR_LEFT: Vector = { x: -1, y: 0 } as const;

/**
 * A unit vector pointing right { x: 1, y: 0 }.
 *
 * @constant {Vector} VECTOR_RIGHT
 */
export const VECTOR_RIGHT: Vector = { x: 1, y: 0 } as const;
