<template>
  <div class="home-page">
    <div class="container-fluid background px-0 row">
      <div class="left-side col-lg-5 px-0"></div>
      <div class="right-side col-lg-7 px-0"></div>
    </div>
    <div class="content row">
      <div class="left-content col d-flex flex-column justify-content-center align-items-center">
        <div class="my-3">
          <img src="/headshot.png" alt="" class="rounded-circle" />
        </div>
        <div class="my-3">
          <h2 class="fw-bolder my-3">{{ $t('home.name') }}</h2>
          <p class="my-3">{{ $t('home.position') }}</p>
        </div>
      </div>
      <div class="right-content col-lg-7">
        <section class="introduction px-3">
          <h1 class="fw-bolder my-5">{{ $t('home.hello') }}</h1>
          <h4 class="my-5">{{ $t('home.greeting') }}</h4>
          <div class="my-5 d-flex">
            <button type="button" class="btn btn-dark mx-3">
              <router-link to="/resume" class="nav-link" aria-current="page">
                {{ $t('navigation.resume') }}
              </router-link>
            </button>
            <button type="button" class="btn btn-outline-dark mx-3">
              <router-link to="/projects" class="nav-link" aria-current="page">
                {{ $t('navigation.projects') }}
              </router-link>
            </button>
          </div>
          <div>
            <p class="my-5 lh-lg">{{ $t('home.introduction') }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.left-side {
  height: 100%;
  background-color: #b5a8a0;
}

.right-side {
  height: 100%;
  // background-color: #f8f9fa;
}

.content {
  position: relative;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  .left-content {
    background-color: #c5b8b0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    img {
      max-width: 200px;
      max-height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
    h2,
    p {
      text-align: center;
    }
  }
  .right-content {
    button {
      // height: 100%;
      border-radius: 40px;
    }
  }
}

.introduction {
  h1 {
    font-size: 6rem;
  }
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
