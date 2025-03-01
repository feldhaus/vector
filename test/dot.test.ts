import { describe, it, expect } from 'vitest';
import {
  dot,
  Vector,
  VECTOR_DOWN,
  VECTOR_LEFT,
  VECTOR_UP,
  VECTOR_ZERO,
} from 'src/index';

describe('dot', () => {
  it('should return the correct dot product of two vectors', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 3, y: 4 };
    expect(dot(vectorA, vectorB)).toBe(11);
  });

  it('should return 0 when one of the vectors is a zero vector', () => {
    const vector: Vector = { x: 3, y: 4 };
    expect(dot(VECTOR_ZERO, vector)).toBe(0);
  });

  it('should return the correct dot product for negative values', () => {
    const vectorA: Vector = { x: -1, y: -2 };
    const vectorB: Vector = { x: 3, y: 4 };
    expect(dot(vectorA, vectorB)).toBe(-11);
  });

  it('should return the correct dot product for mixed positive and negative values', () => {
    const vectorA: Vector = { x: 1, y: -2 };
    const vectorB: Vector = { x: -3, y: 4 };
    expect(dot(vectorA, vectorB)).toBe(-11);
  });

  it('should return the correct dot product for large values', () => {
    const vectorA: Vector = { x: 1000, y: 2000 };
    const vectorB: Vector = { x: 3000, y: 4000 };
    expect(dot(vectorA, vectorB)).toBe(11000000);
  });

  it('should return the correct dot product for opposite vectors', () => {
    expect(dot(VECTOR_UP, VECTOR_DOWN)).toBe(-1);
  });

  it('should return 0 for perpendicular vectors', () => {
    expect(dot(VECTOR_UP, VECTOR_LEFT)).toBe(0);
  });

  it('should return the correct dot product for vectors in the same direction', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 2, y: 4 };
    expect(dot(vectorA, vectorB)).toBe(10);
  });
});
