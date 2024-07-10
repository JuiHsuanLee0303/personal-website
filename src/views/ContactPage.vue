<template>
  <div class="contact-page">
    <h1>聯繫我</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">姓名：</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">郵箱：</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">消息：</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">發送</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 這裡添加表單提交邏輯
      console.log('Form submitted:', this.form)
      // 可以在這裡添加發送郵件或保存到數據庫的邏輯
    }
  }
}
</script>

<style scoped>
.contact-page {
  /* 樣式 */
}
</style>
