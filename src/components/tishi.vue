<template>
  <div v-if="showSuccessMessage" class="success-message">
    <span class="icon">✔</span>
    <span class="text">{{message}}！</span>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      showSuccessMessage: false
    };
  },
  methods: {
    childFunction() {
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000); // 3秒后隐藏提示
    }
  }
};
</script>

<style scoped>
.success-message {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}

.icon {
  margin-right: 10px;
  font-size: 20px;
}

.text {
  font-size: 16px;
}
</style>
