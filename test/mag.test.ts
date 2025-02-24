import { describe, it, expect } from 'vitest';
import { mag, Vector } from '@/index';

describe('mag', () => {
  it('should calculate the magnitude of a vector', () => {
    const vector: Vector = { x: 3, y: 4 };
    const result = mag(vector);
    expect(result).toBe(5);
  });

  it('should calculate the magnitude of another vector', () => {
    const vector: Vector = { x: 1, y: 2 };
    const result = mag(vector);
    expect(result).toBeCloseTo(2.23606797749979);
  });
});
