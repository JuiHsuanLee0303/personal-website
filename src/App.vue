<template>
  <MainNavigation />

  <main class="mx-0 px-0 custom-main">
    <router-view></router-view>
  </main>

  <PageFooter />
</template>

<script>
import MainNavigation from './components/MainNavigation.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    MainNavigation,
    PageFooter
  }
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

a,
p,
h1,
h2,
h3,
h4,
h5,
h6,
button,
label,
select,
span,
li {
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
}

#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw !important;
  padding: 0;
  margin: 0;
}

.custom-main {
  flex-grow: 1;
  width: 100vw;
}

.custom-link {
  color: var(--bs-heading-color) !important;
  text-decoration: none !important;
  transition: color 0.3s ease;
}

.custom-link:hover {
  color: #bb9a88 !important;
}
</style>
