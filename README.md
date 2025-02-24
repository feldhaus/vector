# @feldhaus/vector

A lightweight vector utility library that provides commonly used vector operations for JavaScript and TypeScript applications.

## Installation

You can install the package via npm:

```bash
npm install @feldhaus/vector
```

## Example

```typescript
import { add, sub, mult, div } from '@feldhaus/vector';

const vectorA = [1, 2];
const vectorB = [3, 4];

const addedVector = add(vectorA, vectorB); // Output: { x: 4, y: 6 }
const subtractedVector = sub(vectorA, vectorB); // Output: { x: -2, y: -2 }
const multipliedVector = mult(vectorA, 2); // Output: { x: 2, y: 4 }
const dividedVector = div(vectorA, 2); // Output: { x: 0.5, y: 1 }
```

```typescript
import { mag, magSqr } from '@feldhaus/vector';

const vectorA = [1, 2];
const vectorB = [3, 4];

const magnitude = mag(vectorA); // Output: 2.23606797749979
const magnitudeSquared = magSqr(vectorA); // Output: 5
```

```typescript
import { angleBetween, distanceBetween } from '@feldhaus/vector';

const vectorA = [1, 0];
const vectorB = [0, 1];

const angle = angleBetween(vectorA, vectorB); // Output: 1.5707963267948966 (which is π/2 radians or 90 degrees)
const distance = distanceBetween(vectorA, vectorB); // Output: : 1.41
```

## License

[MIT](LICENSE)
