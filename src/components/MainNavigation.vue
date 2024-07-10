<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="d-flex justify-content-between mx-3">
      <div class="d-flex flex-wrap align-items-center">
        <div>
          <router-link to="/" class="nav-link fs-3" aria-current="page">
            {{ $t('navigation.name') }}
          </router-link>
        </div>
        <div>/</div>
        <div>
          <router-link to="/" class="nav-link" aria-current="page">
            {{ $t('navigation.position') }}
          </router-link>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i class="bi bi-justify"></i>
        </button>
      </div>
      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">
                {{ $t('navigation.home') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resume" class="nav-link" aria-current="page">
                {{ $t('navigation.resume') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link" aria-current="page">
                {{ $t('navigation.projects') }}
              </router-link>
            </li>
            <li class="nav-item">
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#languageModal"
              >
                <i class="bi bi-globe-asia-australia"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- Modal -->
  <div
    class="modal fade"
    id="languageModal"
    tabindex="-1"
    aria-labelledby="languageModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="languageModalLabel">
            {{ $t('navigation.languageSetting.title') }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div>
              <label class="form-label" for="language-select">
                {{ $t('navigation.languageSetting.language') }}
              </label>
              <select id="language-select" class="form-select" v-model="currentLanguage">
                <option value="en">{{ $t('navigation.languageSetting.english') }}</option>
                <option value="zh">{{ $t('navigation.languageSetting.zh-tw') }}</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-dismiss="modal"
            @click="switchLanguage(currentLanguage)"
          >
            {{ $t('navigation.languageSetting.apply') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguageStore } from '../stores/languageStore'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n()
    const languageStore = useLanguageStore()
    const currentLanguage = ref(languageStore.getLanguage())
    const switchLanguage = (newLang) => {
      locale.value = newLang
      languageStore.setLanguage(newLang)
    }

    return {
      currentLanguage,
      switchLanguage
    }
  }
}
</script>

<style lang="scss" scoped>
.main-navigation {
  padding: 30px;
  background-color: #f8f9fa;
}

.nav-link {
  margin: 0 15px;
}

.nav-link:hover {
  color: #bb9a88;
}
</style>
