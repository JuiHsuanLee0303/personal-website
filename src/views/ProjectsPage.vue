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
            <div class="mb-3">
              <h4 class="duration fw-bold d-flex mb-1">
                <a :href="item.link" class="custom-link"><i class="bi bi-github"></i> </a>
                <p class="ms-3 mb-0">{{ item.title }}</p>
              </h4>
              <div class="d-flex flex-wrap mt-0">
                <div class="me-2" v-for="(i, index) in item.badge" :key="index">
                  <span class="badge fw-bold">{{ i }}</span>
                </div>
              </div>
            </div>
            <div class="mb-0">
              <p class="lh-lg mb-0">{{ item.description }}</p>
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
          .badge {
            background-color: #bb9a88;
            transition: all 0.5s ease;
            cursor: default;
            &:hover {
              background-color: #a28170;
            }
          }
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
