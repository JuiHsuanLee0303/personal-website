<template>
  <div class="min-h-screen relative flex justify-center items-center overflow-hidden">
    <div class="absolute inset-0 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 h-full">
        <div
          class="lg:col-span-5 bg-[#bb9a88] transition-colors duration-500 hover:bg-[#a28170]"
        ></div>
        <div class="lg:col-span-7"></div>
      </div>
    </div>

    <div
      class="relative max-w-4xl z-10 grid grid-cols-1 lg:grid-cols-12 bg-white/95 rounded-lg shadow-2xl transform transition-all duration-500"
    >
      <div
        class="lg:col-span-5 flex flex-col justify-center items-center p-8 bg-[#bb9a88]/90 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none shadow-lg"
      >
        <div class="mb-6 animate-fadeIn">
          <img
            src="/headshot.png"
            alt="Profile"
            class="w-48 h-48 rounded-full object-cover shadow-lg hover:scale-110 transition-all duration-500 hover:shadow-xl bg-white/70"
          />
        </div>
        <div class="text-center space-y-3 animate-slideUp">
          <h2 class="text-2xl font-bold text-white">{{ $t('home.name') }}</h2>
          <p class="text-gray-100">{{ $t('home.position') }}</p>
        </div>
      </div>

      <div class="lg:col-span-7 p-8 animate-slideIn">
        <section class="space-y-8">
          <h1
            class="text-6xl md:text-7xl font-bold text-gray-800 hover:text-[#bb9a88] transition-all duration-300"
          >
            {{ $t('home.hello') }}
          </h1>

          <h4 class="text-xl text-gray-600 animate-fadeIn delay-200">{{ $t('home.greeting') }}</h4>

          <div class="flex space-x-4 animate-fadeIn delay-300">
            <router-link
              to="/resume"
              class="px-8 py-3 bg-[#bb9a88] text-white rounded-full hover:bg-[#a28170] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {{ $t('navigation.resume') }}
            </router-link>

            <router-link
              to="/projects"
              class="px-8 py-3 border-2 border-[#bb9a88] text-[#bb9a88] rounded-full hover:bg-[#bb9a88] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {{ $t('navigation.projects') }}
            </router-link>
          </div>

          <p class="text-gray-600 leading-relaxed animate-fadeIn delay-400">
            {{ $t('home.introduction') }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slideUp {
  animation: slideUp 1s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}
</style>
