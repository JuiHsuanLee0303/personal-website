import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    base: env.VITE_BASE_URL || '/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @import "@/assets/scss/custom.scss";
              `
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})