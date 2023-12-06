const { defineConfig } = require('vite');
const { resolve } = require('path');

module.exports = defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${resolve(__dirname, 'src/style/main.scss')}";`,
      },
    },
  },
});