import { defineConfig } from 'vitest/config';
import { join } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src'), // Map '@' to the 'src' folder
    },
  },
  test: {
    globals: true,
    environment: 'node',
  },
});
