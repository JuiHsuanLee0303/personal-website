<template>
  <footer class="page-footer">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <p class="fs-6">&copy; {{ currentYear }} Warren Lee. All rights reserved.</p>
      </div>
      <div class="d-flex flex-column justify-content-center">
        <div>
          <h5 class="fs-6 fw-bold">{{ $t('footer.title') }}</h5>
        </div>
        <div class="d-flex">
          <div class="mx-2">
            <a href="https://www.facebook.com/hakumatata.cc/" target="_blank" class="">
              <i class="bi bi-facebook"></i>
            </a>
          </div>
          <div class="mx-2">
            <a href="https://www.instagram.com/warren_0303/" target="_blank" class="">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <div class="mx-2">
            <a href="https://github.com/JuiHsuanLee0303" target="_blank" class="">
              <i class="bi bi-github"></i>
            </a>
          </div>
          <div class="mx-2">
            <a href="https://www.linkedin.com/in/jui-hsuan-lee-a0672ab8/" target="_blank" class="">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  padding: 20px;
  background-color: #f2f2f2;
  text-align: center;
  width: 100%;
  i {
    color: #000;
  }
}
</style>
