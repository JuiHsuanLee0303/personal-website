<template>
  <nav class="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center space-x-2 animate-fadeIn">
          <router-link
            to="/"
            class="text-2xl font-bold text-gray-800 hover:text-[#a28170] transition-all duration-300 hover:scale-105"
            aria-current="page"
          >
            {{ $t('navigation.name') }}
          </router-link>
        </div>

        <div class="flex items-center lg:hidden animate-fadeIn">
          <button
            class="p-2 rounded-md text-gray-600 hover:text-[#a28170] hover:bg-gray-100/80 transition-all duration-300"
            type="button"
            @click="toggleMobileMenu"
          >
            <i class="bi bi-justify text-xl"></i>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8 animate-slideDown">
          <router-link
            to="/"
            class="text-gray-600 hover:text-[#a28170] transition-all duration-300 hover:scale-105"
            aria-current="page"
          >
            {{ $t('navigation.home') }}
          </router-link>
          <router-link
            to="/resume"
            class="text-gray-600 hover:text-[#a28170] transition-all duration-300 hover:scale-105"
            aria-current="page"
          >
            {{ $t('navigation.resume') }}
          </router-link>
          <router-link
            to="/projects"
            class="text-gray-600 hover:text-[#a28170] transition-all duration-300 hover:scale-105"
            aria-current="page"
          >
            {{ $t('navigation.projects') }}
          </router-link>
          <button
            type="button"
            class="p-2 rounded-full hover:bg-gray-100/80 transition-all duration-300 hover:scale-110"
            @click="toggleLanguageModal"
          >
            <i class="bi bi-globe-asia-australia text-xl text-gray-600 hover:text-[#a28170]"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden fixed right-0 top-0 w-full h-screen z-50 bg-white/95 backdrop-blur-sm transform transition-all duration-300 shadow-lg"
      :class="{
        'translate-x-0 opacity-100': isMobileMenuOpen,
        'translate-x-full opacity-0': !isMobileMenuOpen
      }"
    >
      <div class="p-4 flex justify-end animate-fadeIn">
        <button
          type="button"
          class="p-2 rounded-md text-gray-400 hover:text-[#a28170] hover:bg-gray-100/80 transition-all duration-300"
          @click="toggleMobileMenu"
        >
          <i class="bi bi-x text-xl"></i>
        </button>
      </div>
      <div class="px-4 pt-2 pb-6">
        <nav class="space-y-8">
          <router-link
            to="/"
            class="block text-center text-lg text-gray-600 hover:text-[#a28170] transition-all duration-300 transform hover:scale-105"
            aria-current="page"
            @click="toggleMobileMenu"
          >
            {{ $t('navigation.home') }}
          </router-link>
          <router-link
            to="/resume"
            class="block text-center text-lg text-gray-600 hover:text-[#a28170] transition-all duration-300 transform hover:scale-105"
            aria-current="page"
            @click="toggleMobileMenu"
          >
            {{ $t('navigation.resume') }}
          </router-link>
          <router-link
            to="/projects"
            class="block text-center text-lg text-gray-600 hover:text-[#a28170] transition-all duration-300 transform hover:scale-105"
            aria-current="page"
            @click="toggleMobileMenu"
          >
            {{ $t('navigation.projects') }}
          </router-link>
          <div class="text-center">
            <button
              type="button"
              class="p-2 rounded-full hover:bg-gray-100/80 transition-all duration-300 hover:scale-110"
              @click="toggleLanguageModal"
            >
              <i class="bi bi-globe-asia-australia text-xl text-gray-600 hover:text-[#a28170]"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </nav>

  <!-- Language Modal -->
  <div
    v-if="isLanguageModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300"
    @click.self="toggleLanguageModal"
  >
    <div
      class="bg-white/95 rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 animate-modalSlideUp"
    >
      <div class="p-4 border-b border-gray-200 flex justify-center items-center">
        <h5 class="text-xl font-semibold text-gray-800">
          {{ $t('navigation.languageSetting.title') }}
        </h5>
      </div>
      <div class="p-6">
        <form>
          <div class="space-y-2">
            <select
              id="language-select"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base text-center border-gray-300 focus:outline-none focus:ring-[#a28170] focus:border-[#a28170] rounded-md transition-all duration-300"
              v-model="currentLanguage"
            >
              <option value="en">{{ $t('navigation.languageSetting.english') }}</option>
              <option value="zh">{{ $t('navigation.languageSetting.zh-tw') }}</option>
            </select>
          </div>
        </form>
      </div>
      <div class="p-4 border-t border-gray-200 flex justify-end space-x-4">
        <button
          type="button"
          class="px-4 py-2 bg-[#a28170] text-white rounded-md hover:bg-[#8b6c5d] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          @click="applyLanguage"
        >
          {{ $t('navigation.languageSetting.apply') }}
        </button>
        <button
          type="button"
          class="px-4 py-2 text-gray-800 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-500"
          @click="toggleLanguageModal"
        >
          {{ $t('navigation.languageSetting.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from '../stores/languageStore'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const languageStore = useLanguageStore()
const currentLanguage = ref(languageStore.getLanguage())
const isMobileMenuOpen = ref(false)
const isLanguageModalOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleLanguageModal = () => {
  currentLanguage.value = languageStore.getLanguage()
  isLanguageModalOpen.value = !isLanguageModalOpen.value
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

const applyLanguage = () => {
  locale.value = currentLanguage.value
  languageStore.setLanguage(currentLanguage.value)
  isLanguageModalOpen.value = false
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slideDown {
  animation: slideDown 0.5s ease-out forwards;
}

.animate-modalSlideUp {
  animation: modalSlideUp 0.3s ease-out forwards;
}
</style>
