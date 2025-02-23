import { describe, it, expect } from 'vitest';
import { div } from '@/div';
import { Vector } from '@/types';

describe('div', () => {
  it('should divide vector by scalar correctly', () => {
    const vector: Vector = { x: 8, y: 10 };
    const scalar = 2;
    const result = div(vector, scalar);
    expect(result).toEqual({ x: 4, y: 5 });
  });

  it('should handle division by zero', () => {
    const vector: Vector = { x: 8, y: 10 };
    const scalar = 0;
    const result = div(vector, scalar);
    expect(result.x).toBe(Infinity);
    expect(result.y).toBe(Infinity);
  });

  it('should handle negative scalar values', () => {
    const vector: Vector = { x: -8, y: 10 };
    const scalar = -2;
    const result = div(vector, scalar);
    expect(result).toEqual({ x: 4, y: -5 });
  });

  it('should handle zero values in vector', () => {
    const vector: Vector = { x: 0, y: 0 };
    const scalar = 2;
    const result = div(vector, scalar);
    expect(result).toEqual({ x: 0, y: 0 });
  });

  it('should handle zero scalar value', () => {
    const vector: Vector = { x: 0, y: 0 };
    const scalar = 0;
    const result = div(vector, scalar);
    expect(result.x).toBeNaN();
    expect(result.y).toBeNaN();
  });
});
