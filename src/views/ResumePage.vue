<template>
  <div class="resume-page d-flex justify-content-center align-items-center">
    <div class="background"></div>
    <div class="content container-lg mt-5">
      <div class="d-flex justify-content-center my-4">
        <h1 class="fw-bold">{{ $t('resume.title') }}</h1>
      </div>
      <!-- Experience -->
      <div class="d-flex justify-content-start my-3">
        <h2>{{ $t('resume.experience.title') }}</h2>
      </div>
      <section class="resume-card my-5" v-for="(item, index) in experience_list" :key="index">
        <div class="row py-5 px-5">
          <div class="col-5">
            <h4 class="duration fw-bold">{{ item.duration }}</h4>
            <p class="my-2 fw-bold">{{ item.position }}</p>
            <p class="my-2">{{ item.company }}</p>
          </div>
          <div class="col-7">
            <p class="lh-lg">{{ item.description }}</p>
          </div>
        </div>
      </section>
      <!-- Education -->
      <div class="d-flex justify-content-start my-3">
        <h2>{{ $t('resume.education.title') }}</h2>
      </div>
      <section class="resume-card my-5" v-for="(item, index) in education_list" :key="index">
        <div class="row py-5 px-5">
          <div class="col-5">
            <h4 class="duration fw-bold">{{ item.duration }}</h4>
            <p class="my-2 fw-bold">{{ item.degree }}</p>
            <p class="my-2">{{ item.institution }}</p>
          </div>
          <div class="col-7">
            <p class="lh-lg">{{ item.description }}</p>
          </div>
        </div>
      </section>
      <!-- Skills -->
      <div class="d-flex justify-content-start my-3">
        <h2>{{ $t('resume.skills.title') }}</h2>
      </div>
      <section class="resume-card my-5">
        <div class="d-flex flex-column py-5 px-5">
          <section>
            <h4 class="duration fw-bold">{{ $t('resume.skills.professional_skillset.title') }}</h4>
            <div class="row my-3">
              <div class="col-sm-4 my-2" v-for="(item, index) in skill_list" :key="index">
                <p>{{ item }}</p>
              </div>
            </div>
          </section>
          <section>
            <h4 class="duration fw-bold">{{ $t('resume.skills.language.title') }}</h4>
            <div class="row my-3">
              <div class="col-sm-4 my-2" v-for="(item, index) in language_list" :key="index">
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

<style lang="scss" scoped>
.resume-page {
  position: relative;
  min-height: 90vh;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #b5a8a0;
  }
  .content {
    position: relative;
    max-width: 800px;
    z-index: 1;
    .resume-card {
      background-color: white;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
      .duration {
        color: #979d6e;
      }
    }
  }
}
</style>
