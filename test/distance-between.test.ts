import { describe, it, expect } from 'vitest';
import { distanceBetween, Vector } from 'src/index';

describe('distanceBetween', () => {
  it('should return the correct distance between two vectors', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 4, y: 6 };
    const result = distanceBetween(vectorA, vectorB);
    expect(result).toBe(5);
  });

  it('should return 0 when the vectors are the same', () => {
    const vectorA: Vector = { x: 3, y: 3 };
    const vectorB: Vector = { x: 3, y: 3 };
    const result = distanceBetween(vectorA, vectorB);
    expect(result).toBe(0);
  });

  it('should handle negative coordinates', () => {
    const vectorA: Vector = { x: -1, y: -2 };
    const vectorB: Vector = { x: -4, y: -6 };
    const result = distanceBetween(vectorA, vectorB);
    expect(result).toBe(5);
  });

  it('should handle mixed positive and negative coordinates', () => {
    const vectorA: Vector = { x: 1, y: -2 };
    const vectorB: Vector = { x: -4, y: 6 };
    const result = distanceBetween(vectorA, vectorB);
    expect(result).toBeCloseTo(9.43, 2);
  });
});
