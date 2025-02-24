import { describe, it, expect } from 'vitest';
import { add, Vector } from '@/index';

describe('add', () => {
  it('should add two vectors correctly', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 3, y: 4 };
    const result = add(vectorA, vectorB);
    expect(result).toEqual({ x: 4, y: 6 });
  });

  it('should handle negative values', () => {
    const vectorA: Vector = { x: -1, y: -2 };
    const vectorB: Vector = { x: 3, y: 4 };
    const result = add(vectorA, vectorB);
    expect(result).toEqual({ x: 2, y: 2 });
  });

  it('should handle zero values', () => {
    const vectorA: Vector = { x: 0, y: 0 };
    const vectorB: Vector = { x: 0, y: 0 };
    const result = add(vectorA, vectorB);
    expect(result).toEqual({ x: 0, y: 0 });
  });

  it('should handle large values', () => {
    const vectorA: Vector = { x: 1000000, y: 2000000 };
    const vectorB: Vector = { x: 3000000, y: 4000000 };
    const result = add(vectorA, vectorB);
    expect(result).toEqual({ x: 4000000, y: 6000000 });
  });
});
