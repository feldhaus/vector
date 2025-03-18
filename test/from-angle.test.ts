import { describe, it, expect } from 'vitest';
import { fromAngle } from 'src/index';
import { HALF_PI, QUARTER_PI } from '@feldhaus/math';

describe('fromAngle', () => {
  it('should return a vector pointing to the right for angle 0', () => {
    const result = fromAngle(0);
    expect(result).toEqual({ x: 1, y: 0 });
  });

  it('should return a vector pointing upwards for angle π/2', () => {
    const result = fromAngle(HALF_PI);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(1);
  });

  it('should return a vector pointing to the left for angle π', () => {
    const result = fromAngle(Math.PI);
    expect(result.x).toBeCloseTo(-1);
    expect(result.y).toBeCloseTo(0);
  });

  it('should return a vector pointing downwards for angle 3π/2', () => {
    const result = fromAngle((3 * Math.PI) / 2);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(-1);
  });

  it('should return a normalized vector for any angle', () => {
    const angle = QUARTER_PI;
    const result = fromAngle(angle);
    const magnitude = Math.sqrt(result.x ** 2 + result.y ** 2);
    expect(magnitude).toBeCloseTo(1);
  });
});
