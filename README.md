# @feldhaus/vector

A lightweight vector utility library that provides commonly used vector operations for JavaScript and TypeScript applications.

## Installation

You can install the package via npm:

```bash
npm install @feldhaus/vector
```

## Example

```typescript
import { add, sub, mult, div, mag } from '@feldhaus/vector';

const vectorA = [1, 2];
const vectorB = [3, 4];

const addedVector = add(vectorA, vectorB); // Output: { x: 4, y: 6 }
const subtractedVector = sub(vectorA, vectorB); // Output: { x: -2, y: -2 }
const multipliedVector = mult(vectorA, 2); // Output: { x: 2, y: 4 }
const dividedVector = div(vectorA, 2); // Output: { x: 0.5, y: 1 }
```

## License

[MIT](LICENSE)
