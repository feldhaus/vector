import { describe, it, expect } from 'vitest';
import { lerp, Vector, VECTOR_ZERO } from 'src/index';

describe('lerp', () => {
  it('should linearly interpolate between two vectors with factor 0', () => {
    const vectorA: Vector = VECTOR_ZERO;
    const vectorB: Vector = { x: 10, y: 10 };
    const factor = 0;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual(VECTOR_ZERO);
  });

  it('should linearly interpolate between two vectors with factor 1', () => {
    const vectorA: Vector = VECTOR_ZERO;
    const vectorB: Vector = { x: 10, y: 10 };
    const factor = 1;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual({ x: 10, y: 10 });
  });

  it('should linearly interpolate between two vectors with factor 0.5', () => {
    const vectorA: Vector = VECTOR_ZERO;
    const vectorB: Vector = { x: 10, y: 10 };
    const factor = 0.5;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual({ x: 5, y: 5 });
  });

  it('should linearly interpolate between two vectors with factor 0.25', () => {
    const vectorA: Vector = VECTOR_ZERO;
    const vectorB: Vector = { x: 10, y: 10 };
    const factor = 0.25;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual({ x: 2.5, y: 2.5 });
  });

  it('should linearly interpolate between two vectors with negative values', () => {
    const vectorA: Vector = { x: -10, y: -10 };
    const vectorB: Vector = { x: 10, y: 10 };
    const factor = 0.5;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual(VECTOR_ZERO);
  });

  it('should linearly interpolate between two vectors with negative factor', () => {
    const vectorA: Vector = VECTOR_ZERO;
    const vectorB: Vector = { x: 10, y: 10 };
    const factor = -0.5;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual({ x: -5, y: -5 });
  });

  it('should linearly interpolate between two vectors with factor greater than 1', () => {
    const vectorA: Vector = VECTOR_ZERO;
    const vectorB: Vector = { x: 10, y: 10 };
    const factor = 1.5;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual({ x: 15, y: 15 });
  });

  it('should linearly interpolate between two vectors with both negative values', () => {
    const vectorA: Vector = { x: -10, y: -10 };
    const vectorB: Vector = { x: -20, y: -20 };
    const factor = 0.5;
    const result = lerp(vectorA, vectorB, factor);
    expect(result).toEqual({ x: -15, y: -15 });
  });
});
