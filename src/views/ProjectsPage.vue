<template>
  <div class="projects-page d-flex justify-content-center align-items-center">
    <div class="background"></div>
    <div class="content container-lg pt-5">
      <div class="d-flex justify-content-center my-4">
        <h1 class="fw-bold">{{ $t('projects.title') }}</h1>
      </div>
      <section class="project-card my-5" v-for="(item, index) in project_list" :key="index">
        <div class="row m-0">
          <div class="left-card col-md-7 p-5">
            <div class="mb-4">
              <h4 class="duration fw-bold d-flex">
                <a :href="item.link" class="custom-link"><i class="bi bi-github"></i> </a>
                <p class="ms-3">{{ item.title }}</p>
              </h4>
            </div>
            <div class="mb-4">
              <p class="lh-lg">{{ item.description }}</p>
            </div>
            <div class="progress" style="height: 10%">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Vue.js
              </div>
              <div
                class="progress-bar bg-primary"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                SCSS
              </div>
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JavaScript
              </div>
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Vite
              </div>
            </div>
          </div>
          <div class="right-card col-md-5 px-0 d-flex justify-content-end">
            <img src="/project_1_1.PNG?url" alt="" />
          </div>
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
    const project_list = ref([])
    onMounted(() => {
      if (currentLanguage === 'en') {
        project_list.value = en.projects.project_list
      } else if (currentLanguage == 'zh') {
        project_list.value = zh.projects.project_list
      }
    })

    watch(languageStore.getLanguage, (newLanguage) => {
      if (newLanguage === 'en') {
        project_list.value = en.projects.project_list
      } else if (newLanguage == 'zh') {
        project_list.value = zh.projects.project_list
      }
    })

    return {
      project_list
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-page {
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
    max-width: 900px;
    z-index: 1;
    .project-card {
      .row {
        width: 100%;
        .left-card {
          background-color: white;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
        }
      }
      img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
