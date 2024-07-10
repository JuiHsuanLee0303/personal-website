import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    zh
  }
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
