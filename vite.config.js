import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import dns from 'dns'

// dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: { 
    //     hmr: {
            //host: true,//host=ip
    //     },
    },
});
