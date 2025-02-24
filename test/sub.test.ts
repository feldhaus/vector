import { describe, it, expect } from 'vitest';
import { sub, Vector } from '@/index';

describe('sub', () => {
  it('should subtract two vectors correctly', () => {
    const vectorA: Vector = { x: 5, y: 7 };
    const vectorB: Vector = { x: 3, y: 4 };
    const result = sub(vectorA, vectorB);
    expect(result).toEqual({ x: 2, y: 3 });
  });

  it('should handle negative values correctly', () => {
    const vectorA: Vector = { x: -5, y: -7 };
    const vectorB: Vector = { x: -3, y: -4 };
    const result = sub(vectorA, vectorB);
    expect(result).toEqual({ x: -2, y: -3 });
  });

  it('should handle zero values correctly', () => {
    const vectorA: Vector = { x: 0, y: 0 };
    const vectorB: Vector = { x: 0, y: 0 };
    const result = sub(vectorA, vectorB);
    expect(result).toEqual({ x: 0, y: 0 });
  });

  it('should handle mixed positive and negative values correctly', () => {
    const vectorA: Vector = { x: 5, y: -7 };
    const vectorB: Vector = { x: -3, y: 4 };
    const result = sub(vectorA, vectorB);
    expect(result).toEqual({ x: 8, y: -11 });
  });
});
