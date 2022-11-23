import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, 'src/locales/**'),
    }),
  ],
  build: {
    sourcemap: 'hidden',
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
});
