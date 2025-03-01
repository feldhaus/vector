import { describe, it, expect } from 'vitest';
import {
  cross,
  Vector,
  VECTOR_DOWN,
  VECTOR_LEFT,
  VECTOR_UP,
  VECTOR_ZERO,
} from 'src/index';

describe('cross', () => {
  it('should return the correct cross product of two vectors', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 3, y: 4 };
    expect(cross(vectorA, vectorB)).toBe(-2);
  });

  it('should return 0 when both vectors are the same', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 1, y: 2 };
    expect(cross(vectorA, vectorB)).toBe(0);
  });

  it('should return 0 when one of the vectors is a zero vector', () => {
    const vector: Vector = { x: 3, y: 4 };
    expect(cross(VECTOR_ZERO, vector)).toBe(0);
  });

  it('should return the correct cross product for negative values', () => {
    const vectorA: Vector = { x: -1, y: -2 };
    const vectorB: Vector = { x: -3, y: -4 };
    expect(cross(vectorA, vectorB)).toBe(-2);
  });

  it('should return the correct cross product for mixed positive and negative values', () => {
    const vectorA: Vector = { x: 1, y: -2 };
    const vectorB: Vector = { x: -3, y: 4 };
    expect(cross(vectorA, vectorB)).toBe(-2);
  });

  it('should return the correct cross product for opposite vectors', () => {
    expect(cross(VECTOR_UP, VECTOR_DOWN)).toBe(-0);
  });

  it('should return 0 for perpendicular vectors', () => {
    expect(cross(VECTOR_UP, VECTOR_LEFT)).toBe(1);
  });

  it('should return the correct cross product for vectors in the same direction', () => {
    const vectorA: Vector = { x: 1, y: 2 };
    const vectorB: Vector = { x: 2, y: 4 };
    expect(cross(vectorA, vectorB)).toBe(0);
  });
});
