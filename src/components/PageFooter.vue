<template>
  <footer class="w-full bg-white/95 backdrop-blur-sm py-8 px-6 shadow-inner">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 animate-fadeIn"
    >
      <div class="transform hover:scale-105 transition-all duration-300">
        <p class="text-sm text-gray-600 hover:text-[#a28170]">
          &copy; {{ currentYear }} Warren Lee. All rights reserved.
        </p>
      </div>
      <div class="flex flex-col items-center md:items-end space-y-4">
        <h5 class="text-sm font-semibold text-gray-600 animate-slideDown">
          {{ $t('footer.title') }}
        </h5>
        <div class="flex space-x-6 animate-slideUp">
          <a
            href="https://www.facebook.com/hakumatata.cc/"
            target="_blank"
            class="text-gray-600 hover:text-[#a28170] transition-all duration-300 hover:scale-125"
            title="Facebook"
          >
            <i class="bi bi-facebook text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/warren_0303/"
            target="_blank"
            class="text-gray-600 hover:text-[#a28170] transition-all duration-300 hover:scale-125"
            title="Instagram"
          >
            <i class="bi bi-instagram text-2xl"></i>
          </a>
          <a
            href="https://github.com/JuiHsuanLee0303"
            target="_blank"
            class="text-gray-600 hover:text-[#a28170] transition-all duration-300 hover:scale-125"
            title="GitHub"
          >
            <i class="bi bi-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jui-hsuan-lee-a0672ab8/"
            target="_blank"
            class="text-gray-600 hover:text-[#a28170] transition-all duration-300 hover:scale-125"
            title="LinkedIn"
          >
            <i class="bi bi-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
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

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideDown {
  animation: slideDown 0.8s ease-out forwards;
}

.animate-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}
</style>
