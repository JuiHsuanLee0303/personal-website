<template>
  <div class="relative min-h-[90vh] flex justify-center items-center">
    <div
      class="absolute w-full h-full bg-gradient-to-br from-[#b5a8a0] to-[#a28170] animate-gradientFlow"
    ></div>
    <div class="relative container mx-12 lg:mx-0 max-w-[900px] z-10 mt-5 animate-fadeIn">
      <div class="flex justify-center my-4">
        <h1
          class="font-bold text-3xl text-white hover:text-[#4a3f39] transition-colors duration-300 cursor-pointer transform hover:scale-105"
        >
          {{ $t('projects.title') }}
        </h1>
      </div>
      <section
        v-for="(item, index) in project_list"
        :key="index"
        class="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg my-8 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-slideIn group"
        :style="{ animationDelay: `${index * 200}ms` }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-lg">
          <div class="lg:col-span-7 p-6 lg:p-8">
            <div class="mb-4">
              <div class="flex items-center gap-3 mb-3">
                <a
                  :href="item.link"
                  target="_blank"
                  class="text-[#4a3f39] hover:text-[#8b6c5d] transition-colors duration-300 flex items-center gap-2"
                >
                  <i class="bi bi-github text-2xl"></i>
                  <h3
                    class="text-xl font-bold text-[#4a3f39] hover:text-[#8b6c5d] transition-colors duration-300"
                  >
                    {{ item.title }}
                  </h3>
                </a>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(badge, badgeIndex) in item.badge"
                  :key="badgeIndex"
                  class="px-3 py-1 text-sm font-semibold text-white bg-[#bb9a88] rounded-full hover:bg-[#a28170] transition-colors duration-300 cursor-default"
                >
                  {{ badge }}
                </span>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
          <div class="lg:col-span-5 h-[300px] lg:h-auto">
            <img
              src="/project_1_1.PNG?url"
              alt="Project Preview"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import { useLanguageStore } from '../stores/languageStore'
import { onMounted, watch, ref } from 'vue'

const languageStore = useLanguageStore()
const currentLanguage = languageStore.getLanguage()
const project_list = ref([])

onMounted(() => {
  if (currentLanguage === 'en') {
    project_list.value = en.projects.project_list
  } else if (currentLanguage == 'zh') {
    project_list.value = zh.projects.project_list
  }
  console.log('Project List:', project_list.value)
})

watch(languageStore.getLanguage, (newLanguage) => {
  if (newLanguage === 'en') {
    project_list.value = en.projects.project_list
  } else if (newLanguage == 'zh') {
    project_list.value = zh.projects.project_list
  }
})
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

.animate-gradientFlow {
  animation: gradientFlow 15s ease infinite;
  background-size: 200% 200%;
}
</style>
