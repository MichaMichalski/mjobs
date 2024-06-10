import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import deJson from './locales/de/translations.json'
import enJson from './locales/en/translations.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: enJson,
    },
    de: {
      message: deJson,
    }
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
