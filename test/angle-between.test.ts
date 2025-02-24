import { describe, it, expect } from 'vitest';
import { angleBetween } from '@/angle-between';
import { Vector } from '@/types';

describe('angleBetween', () => {
  it('should return the correct angle between two vectors', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 3, y: 4 };
    const result = angleBetween(vectorA, vectorB);
    expect(result).toBeCloseTo(0.7853981633974483, 10); // 45 degrees in radians
  });

  it('should return 0 when both vectors are the same', () => {
    const vectorA: Vector = { x: 1, y: 1 };
    const vectorB: Vector = { x: 1, y: 1 };
    const result = angleBetween(vectorA, vectorB);
    expect(result).toBe(0);
  });

  it('should return the correct angle for vectors along the x-axis', () => {
    const vectorA: Vector = { x: 0, y: 0 };
    const vectorB: Vector = { x: 1, y: 0 };
    const result = angleBetween(vectorA, vectorB);
    expect(result).toBe(0);
  });

  it('should return the correct angle for vectors along the y-axis', () => {
    const vectorA: Vector = { x: 0, y: 0 };
    const vectorB: Vector = { x: 0, y: 1 };
    const result = angleBetween(vectorA, vectorB);
    expect(result).toBeCloseTo(Math.PI / 2, 10); // 90 degrees in radians
  });

  it('should return the correct angle for vectors in the third quadrant', () => {
    const vectorA: Vector = { x: 1, y: 1 };
    const vectorB: Vector = { x: -1, y: -1 };
    const result = angleBetween(vectorA, vectorB);
    expect(result).toBeCloseTo(-2.356194490192345, 10); // -135 degrees in radians
  });
});
