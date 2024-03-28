<template>
    <div class="register-container">
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
        <button class="btn" type="submit">Register</button>
        <button class="close" type="submit">关闭</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    }
  };
  </script>
  
  <style lang="scss">
  .register-container {
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
      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
    }
    .btn,.close {
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
  