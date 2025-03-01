import { describe, it, expect } from 'vitest';
import {
  normalize,
  Vector,
  VECTOR_RIGHT,
  VECTOR_UP,
  VECTOR_ZERO,
} from 'src/index';

describe('normalize', () => {
  it('should normalize a non-zero vector', () => {
    const vector: Vector = { x: 3, y: 4 };
    const result = normalize(vector);
    expect(result).toEqual({ x: 0.6, y: 0.8 });
  });

  it('should return the original vector if magnitude is 0', () => {
    const result = normalize(VECTOR_ZERO);
    expect(result).toEqual(VECTOR_ZERO);
  });

  it('should normalize a vector with negative components', () => {
    const vector: Vector = { x: -3, y: -4 };
    const result = normalize(vector);
    expect(result).toEqual({ x: -0.6, y: -0.8 });
  });

  it('should normalize a vector with mixed components', () => {
    const vector: Vector = { x: 3, y: -4 };
    const result = normalize(vector);
    expect(result).toEqual({ x: 0.6, y: -0.8 });
  });

  it('should normalize a vector with a zero y component', () => {
    const vector: Vector = { x: 50, y: 0 };
    const result = normalize(vector);
    expect(result).toEqual(VECTOR_RIGHT);
  });

  it('should normalize a vector with a zero x component', () => {
    const vector: Vector = { x: 0, y: 50 };
    const result = normalize(vector);
    expect(result).toEqual(VECTOR_UP);
  });

  it('should normalize a vector with large components', () => {
    const vector: Vector = { x: 3000, y: 4000 };
    const result = normalize(vector);
    expect(result).toEqual({ x: 0.6, y: 0.8 });
  });

  it('should normalize a vector with small components', () => {
    const vector: Vector = { x: 0.3, y: 0.4 };
    const result = normalize(vector);
    expect(result).toEqual({ x: 0.6, y: 0.8 });
  });
});
