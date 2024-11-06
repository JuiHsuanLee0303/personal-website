<template>
  <MainNavigation />

  <main class="mx-0 px-0 flex-grow w-screen">
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
  @apply m-0 p-0 w-full overflow-x-hidden;
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
  @apply text-[#2c3e50] flex flex-col min-h-screen w-screen p-0 m-0;
}

.custom-link {
  @apply text-current no-underline transition-colors duration-300 ease-in-out hover:text-[#bb9a88];
}
</style>
