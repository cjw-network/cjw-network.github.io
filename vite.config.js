// vite.config.js

const { resolve } = require('path')

export default {
    root: "./src",
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                de_index: resolve(__dirname, 'src/index.html'),
                de_contact: resolve(__dirname, 'src/contact.html'),
                de_data: resolve(__dirname, 'src/privacy.html'),
                en: resolve(__dirname, 'src/en/index.html')
            }
        }
    },
}
