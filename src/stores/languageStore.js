import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: 'en'
  }),
  actions: {
    setLanguage(newLanguage) {
      this.language = newLanguage
    },
    getLanguage() {
      return this.language
    }
  }
})
