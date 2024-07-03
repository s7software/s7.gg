import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import parseBlog from './src/helper/BlogBuilder.js';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        parseBlog(
            path.join(__dirname, 'src/static/blog-post/'),
            path.join(__dirname, 'src/static/blog.json')
        )
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
});