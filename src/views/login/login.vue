<template>
  <div class="login-container">
    <form>
      <h1>登录</h1>
      <div class="input-group">
        <input type="text" id="username" v-model="username" placeholder="Enter your email">
      </div>
      <div class="input-group">
        <input type="password" id="password" v-model="password" placeholder="Enter your password">
      </div>
      <div class="input-group">
        <input type="password" id="password" v-model="password" placeholder="Enter your password">
      </div>
      <button class="btn" type="submit" @click="login">Login</button>
      <button class="btn" type="submit" @click="register">Go Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoginStatus: false
    };
  },
  methods: {
    login () {
      localStorage.isLogin = true
      this.isLoginStatus = true
      this.$emit('send-login-to', this.isLoginStatus)
      // vuex保存 用户信息
      this.$store.commit('addUser',this.username)
    },
    register () {
      this.$emit('send-login',false)
    }
  }
}
</script>

<style lang="scss">
.login-container {
  width: 30rem;
  margin: -1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
  }

  .input-group {
    margin-bottom: 20px;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  }
  .btn {
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    margin-top: .3rem;
    margin-left: .1rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #2980b9;
    }
  }
}
</style>
