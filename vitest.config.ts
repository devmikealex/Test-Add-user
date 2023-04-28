/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['@testing-library/react/dont-cleanup-after-each','./src/test/setup.ts'],
        css: true,
    },
})
