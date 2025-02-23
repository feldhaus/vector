import { describe, it, expect } from 'vitest';
import { magSqr } from '@/magSqr';
import { Vector } from '@/types';

describe('magSqr', () => {
  it('should return the magnitude squared of a vector with positive components', () => {
    const vector: Vector = { x: 3, y: 4 };
    expect(magSqr(vector)).toBe(25);
  });

  it('should return the magnitude squared of a vector with negative components', () => {
    const vector: Vector = { x: -3, y: -4 };
    expect(magSqr(vector)).toBe(25);
  });

  it('should return the magnitude squared of a vector with mixed components', () => {
    const vector: Vector = { x: 1, y: -2 };
    expect(magSqr(vector)).toBe(5);
  });

  it('should return 0 for a zero vector', () => {
    const vector: Vector = { x: 0, y: 0 };
    expect(magSqr(vector)).toBe(0);
  });

  it('should return the magnitude squared of a vector with floating point components', () => {
    const vector: Vector = { x: 1.5, y: 2.5 };
    expect(magSqr(vector)).toBeCloseTo(8.5);
  });
});
