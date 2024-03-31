<template>
    <div class="register-container" ref="isClose">
      <form>
        <h1>注册</h1>
        <div class="input-group">
          <input type="text" id="username" v-model="username" placeholder="Enter your email">
        </div>
        <div class="input-group">
          <input type="password" id="password" v-model="password" placeholder="Enter your password">
        </div>
        <div class="input-group">
          <input type="password" id="password" v-model="password" placeholder="Enter your password">
        </div>
        <button class="btn" type="submit" @click="register">Register</button>
        <button class="login" type="submit" @click="login" :isLogin="isLogin">Go Login</button>
        <button class="close" type="submit" @click="close">关闭</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        isLogin: true
      };
    },
    methods: {
      close () {
        this.$refs.isClose.classList.add('close-all')
      },
      // 注册
      register () {
      
      },
      // 跳到登录
      login () {
        this.$emit('send-login',this.isLogin)
      }
    }
  };
  </script>
  
  <style lang="scss">
  .close-all {
    display: none;
  }
  .register-container {
    width: 30rem;
    margin: -1rem auto;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    &-close{
      right: .7rem;
      position: fixed;

    }
    form {
      display: flex;
      flex-direction: column;
    }
    .input-group {
      margin-bottom: 20px;
      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
    }
    .btn,.close ,.login{
      padding: 10px;
      background-color: #3498db;
      color: #333;
      top: 2rem;
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
  