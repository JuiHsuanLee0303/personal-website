<template>
  <div class="relative min-h-[90vh] flex justify-center items-center">
    <div
      class="absolute w-full h-full bg-gradient-to-br from-[#b5a8a0] to-[#a28170] animate-gradientFlow"
    ></div>
    <div class="relative container mx-12 lg:mx-0 max-w-[800px] z-10 mt-5 animate-fadeIn">
      <div class="flex justify-center my-4">
        <h1
          class="font-bold text-3xl text-white hover:text-[#4a3f39] transition-colors duration-300 cursor-pointer transform hover:scale-105"
        >
          {{ $t('resume.title') }}
        </h1>
      </div>
      <!-- Experience -->
      <div class="flex justify-start my-3 animate-slideDown">
        <h2 class="text-2xl text-white flex items-center gap-2">
          <i class="bi bi-briefcase"></i>
          {{ $t('resume.experience.title') }}
        </h2>
      </div>
      <section
        v-for="(item, index) in experience_list"
        :key="index"
        class="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg my-5 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-slideIn group"
        :style="{ animationDelay: `${index * 200}ms` }"
      >
        <div class="grid grid-cols-1 md:grid-cols-12 py-5 px-5">
          <div
            class="md:col-span-5 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4"
          >
            <h4
              class="text-[#8b6c5d] font-bold text-lg group-hover:text-[#a28170] transition-colors duration-300"
            >
              {{ item.duration }}
            </h4>
            <p class="my-2 font-bold text-lg">{{ item.position }}</p>
            <p class="my-2 text-gray-600 flex items-center gap-2">
              <i class="bi bi-building"></i>
              {{ item.company }}
            </p>
          </div>
          <div class="md:col-span-7 md:pl-4 pt-4 md:pt-0">
            <p class="leading-relaxed text-gray-700">{{ item.description }}</p>
          </div>
        </div>
      </section>
      <!-- Education -->
      <div class="flex justify-start my-3 animate-slideDown">
        <h2 class="text-2xl text-white flex items-center gap-2">
          <i class="bi bi-mortarboard"></i>
          {{ $t('resume.education.title') }}
        </h2>
      </div>
      <section
        v-for="(item, index) in education_list"
        :key="index"
        class="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg my-5 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-slideIn group"
        :style="{ animationDelay: `${index * 200}ms` }"
      >
        <div class="grid grid-cols-1 md:grid-cols-12 py-5 px-5">
          <div
            class="md:col-span-5 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4"
          >
            <h4
              class="text-[#8b6c5d] font-bold text-lg group-hover:text-[#a28170] transition-colors duration-300"
            >
              {{ item.duration }}
            </h4>
            <p class="my-2 font-bold text-lg">{{ item.degree }}</p>
            <p class="my-2 text-gray-600 flex items-center gap-2">
              <i class="bi bi-bank"></i>
              {{ item.institution }}
            </p>
          </div>
          <div class="md:col-span-7 md:pl-4 pt-4 md:pt-0">
            <p class="leading-relaxed text-gray-700">{{ item.description }}</p>
          </div>
        </div>
      </section>
      <!-- Skills -->
      <div class="flex justify-start my-3 animate-slideDown">
        <h2 class="text-2xl text-white flex items-center gap-2">
          <i class="bi bi-tools"></i>
          {{ $t('resume.skills.title') }}
        </h2>
      </div>
      <section
        class="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg my-5 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-slideIn"
      >
        <div class="flex flex-col py-5 px-5">
          <section class="mb-6">
            <h4 class="text-[#8b6c5d] font-bold text-lg mb-4 flex items-center gap-2">
              <i class="bi bi-gear-wide-connected"></i>
              {{ $t('resume.skills.professional_skillset.title') }}
            </h4>
            <div class="space-y-6">
              <!-- Frontend -->
              <div class="transform transition-all duration-300 hover:scale-[1.01]">
                <h5 class="text-[#a28170] font-semibold mb-3 flex items-center gap-2">
                  <i class="bi bi-window"></i>
                  Frontend Development
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div
                    v-for="skill in skill_list.frontend"
                    :key="skill"
                    class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <i class="bi bi-code-slash text-[#8b6c5d]"></i>
                    <p>{{ skill }}</p>
                  </div>
                </div>
              </div>
              <!-- Backend -->
              <div class="transform transition-all duration-300 hover:scale-[1.01]">
                <h5 class="text-[#a28170] font-semibold mb-3 flex items-center gap-2">
                  <i class="bi bi-hdd-rack"></i>
                  Backend Development
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div
                    v-for="skill in skill_list.backend"
                    :key="skill"
                    class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <i class="bi bi-server text-[#8b6c5d]"></i>
                    <p>{{ skill }}</p>
                  </div>
                </div>
              </div>
              <!-- Data Science -->
              <div class="transform transition-all duration-300 hover:scale-[1.01]">
                <h5 class="text-[#a28170] font-semibold mb-3 flex items-center gap-2">
                  <i class="bi bi-bar-chart"></i>
                  Data Science
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div
                    v-for="skill in skill_list.data"
                    :key="skill"
                    class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <i class="bi bi-graph-up text-[#8b6c5d]"></i>
                    <p>{{ skill }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h4 class="text-[#8b6c5d] font-bold text-lg mb-4 flex items-center gap-2">
              <i class="bi bi-translate"></i>
              {{ $t('resume.skills.language.title') }}
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(item, index) in language_list"
                :key="index"
                class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <i class="bi bi-chat-text text-[#8b6c5d]"></i>
                <p>{{ item }}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import { useLanguageStore } from '../stores/languageStore'
import { onMounted, watch, ref } from 'vue'

export default {
  setup() {
    const languageStore = useLanguageStore()
    const currentLanguage = languageStore.getLanguage()
    const experience_list = ref([])
    const education_list = ref([])
    const skill_list = ref([])
    const language_list = ref([])

    onMounted(() => {
      if (currentLanguage === 'en') {
        experience_list.value = en.resume.experience.experience_list
        education_list.value = en.resume.education.education_list
        skill_list.value = en.resume.skills.professional_skillset.skill_list
        language_list.value = en.resume.skills.language.language_list
      } else if (currentLanguage == 'zh') {
        experience_list.value = zh.resume.experience.experience_list
        education_list.value = zh.resume.education.education_list
        skill_list.value = zh.resume.skills.professional_skillset.skill_list
        language_list.value = zh.resume.skills.language.language_list
      }
    })

    watch(languageStore.getLanguage, (newLanguage) => {
      if (newLanguage === 'en') {
        experience_list.value = en.resume.experience.experience_list
        education_list.value = en.resume.education.education_list
        skill_list.value = en.resume.skills.professional_skillset.skill_list
        language_list.value = en.resume.skills.language.language_list
      } else if (newLanguage === 'zh') {
        experience_list.value = zh.resume.experience.experience_list
        education_list.value = zh.resume.education.education_list
        skill_list.value = zh.resume.skills.professional_skillset.skill_list
        language_list.value = zh.resume.skills.language.language_list
      }
    })

    return {
      experience_list,
      education_list,
      skill_list,
      language_list
    }
  }
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideDown {
  animation: slideDown 0.8s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 0.8s ease-out forwards;
}

.animate-gradientFlow {
  animation: gradientFlow 15s ease infinite;
  background-size: 200% 200%;
}
</style>
