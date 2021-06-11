// vite.config.js

const { resolve } = require('path')
const { posthtmlPlugin } = require('vite-plugin-posthtml');
// https://github.com/chromeos/static-site-scaffold-modules/tree/main/modules/vite-plugin-posthtml

export default {
    root: "./src",
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                de_index: resolve(__dirname, 'src/index.html'),
                de_contact: resolve(__dirname, 'src/contact.html'),
                de_data: resolve(__dirname, 'src/impress.html'),
                en_index: resolve(__dirname, 'src/en/index.html'),
                en_contact: resolve(__dirname, 'src/en/contact.html'),
                en_data: resolve(__dirname, 'src/en/impress.html'),
            }
        }
    },
    plugins: [
        posthtmlPlugin({
            plugins: [
                require('posthtml-include')(),
                //require('posthtml-favicons')()
            ],
            options: {}
        })
    ]
}
