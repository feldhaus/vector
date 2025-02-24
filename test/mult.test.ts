import { describe, it, expect } from 'vitest';
import { mult, Vector } from '@/index';

describe('mult', () => {
  it('should multiply the vector by a scalar correctly', () => {
    const vector: Vector = { x: 2, y: 3 };
    const scalar = 4;
    const result = mult(vector, scalar);
    expect(result).toEqual({ x: 8, y: 12 });
  });

  it('should handle zero scalar correctly', () => {
    const vector: Vector = { x: 2, y: 3 };
    const scalar = 0;
    const result = mult(vector, scalar);
    expect(result).toEqual({ x: 0, y: 0 });
  });

  it('should handle negative scalar correctly', () => {
    const vector: Vector = { x: 2, y: 3 };
    const scalar = -4;
    const result = mult(vector, scalar);
    expect(result).toEqual({ x: -8, y: -12 });
  });

  it('should handle decimal scalar correctly', () => {
    const vector: Vector = { x: 2.5, y: 3.1 };
    const scalar = 2.5;
    const result = mult(vector, scalar);
    expect(result).toEqual({ x: 6.25, y: 7.75 });
  });
});
