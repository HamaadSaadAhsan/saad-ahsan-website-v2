import { defineConfig } from 'vite'
import { resolve } from 'path'
import cssnano from 'cssnano' // Import cssnano
export default defineConfig({
    base: '/themes/saad-ahsan/assets/build/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'resources/css/main.css'),
            },
        },
        manifest: true,
        minify: true,
        emptyOutDir: true,
        outDir: resolve(__dirname, 'assets/build'),
    },
    server: {
        hmr: {
            protocol: 'ws'
        },
        cors: {
            origin: 'http://localhost',
        },
    },
    css: {
        devSourcemap: true,
        // Add PostCSS configuration here
        postcss: {
            plugins: [
                cssnano({
                    preset: 'default', // Standard minification settings
                }),
            ],
        },
    }
})
