# @feldhaus/vector

A lightweight vector utility library that provides commonly used vector operations for JavaScript and TypeScript applications.

## Installation

You can install the package via npm:

```bash
npm install @feldhaus/vector
```

## Available Functions

- **add**: Adds two vectors. [Source](https://github.com/feldhaus/vector/blob/main/src/add.ts)
- **sub**: Subtracts the second vector from the first. [Source](https://github.com/feldhaus/vector/blob/main/src/sub.ts)
- **mult**: Multiplies a vector by a scalar. [Source](https://github.com/feldhaus/vector/blob/main/src/mult.ts)
- **div**: Divides a vector by a scalar. [Source](https://github.com/feldhaus/vector/blob/main/src/div.ts)
- **mag**: Calculates the magnitude of a vector. [Source](https://github.com/feldhaus/vector/blob/main/src/mag.ts)
- **magSqr**: Calculates the squared magnitude of a vector. [Source](https://github.com/feldhaus/vector/blob/main/src/magSqr.ts)
- **angleBetween**: Calculates the angle between two vectors. [Source](https://github.com/feldhaus/vector/blob/main/src/angleBetween.ts)
- **distanceBetween**: Calculates the distance between two vectors. [Source](https://github.com/feldhaus/vector/blob/main/src/distanceBetween.ts)
- **normalize**: Normalizes a vector to have a magnitude of 1. [Source](https://github.com/feldhaus/vector/blob/main/src/normalize.ts)

## Available Constants

- **VECTOR_ZERO**: A constant representing the zero vector `{ x: 0, y: 0 }`.
- **VECTOR_UP**: A constant representing the unit vector pointing up `{ x: 0, y: 1 }`.
- **VECTOR_DOWN**: A constant representing the unit vector pointing down `{ x: 0, y: -1 }`.
- **VECTOR_LEFT**: A constant representing the unit vector pointing left `{ x: -1, y: 0 }`.
- **VECTOR_RIGHT**: A constant representing the unit vector pointing right `{ x: 1, y: 0 }`.

## Examples

```typescript
import { add, sub, mult, div } from '@feldhaus/vector';

const vectorA = { x: 1, y: 2 };
const vectorB = { x: 3, y: 4 };

const addedVector = add(vectorA, vectorB); // Output: { x: 4, y: 6 }
const subtractedVector = sub(vectorA, vectorB); // Output: { x: -2, y: -2 }
const multipliedVector = mult(vectorA, 2); // Output: { x: 2, y: 4 }
const dividedVector = div(vectorA, 2); // Output: { x: 0.5, y: 1 }
```

```typescript
import { mag, magSqr } from '@feldhaus/vector';

const vectorA = { x: 1, y: 2 };
const vectorB = { x: 3, y: 4 };

const magnitude = mag(vectorA); // Output: 2.23606797749979
const magnitudeSquared = magSqr(vectorA); // Output: 5
```

```typescript
import { angleBetween, distanceBetween } from '@feldhaus/vector';

const vectorA = { x: 1, y: 0 };
const vectorB = { x: 0, y: 1 };

const angle = angleBetween(vectorA, vectorB); // Output: 1.5707963267948966 (which is π/2 radians or 90 degrees)
const distance = distanceBetween(vectorA, vectorB); // Output: : 1.41
```

## License

[MIT](LICENSE)
