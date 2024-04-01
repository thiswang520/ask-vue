<template>
  <div class="register-container" ref="isClose">
    <form>
      <h1>注册</h1>
      <div class="input-group">
        <input
          type="text"
          id="username"
          v-model="eamil"
          placeholder="Enter your email"
          :class="{ invalid: !isEmalValid }"
        />
      </div>
      <div class="input-group">
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          :class="{ invalid: !isUsernameValid }"
        />
      </div>
      <div class="input-group">
        <input
          :class="{ invalid: !isPasswordValid }"
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
        />
      </div>
      <!-- <div class="input-group">
          <input type="password" id="password" v-model="passwordTo" placeholder="Enter your password">
        </div> -->
      <button
        class="btn"
        type="submit"
        @click="register"
        :disabled="!isUsernameValid || !isPasswordValid || !isEmalValid" 
      >
        Register
      </button>
      <button class="login" type="submit" @click="login" :isLogin="isLogin">
        Go Login
      </button>
      <button class="close" type="submit" @click="close">关闭</button>
    </form>
    <tiShi ref="registerSuccess" :message="message"/>
  </div>
</template>
  
  <script>
import { post } from "../../utils/request";
import  tiShi  from "../../components/tishi.vue";
export default {
  components:{tiShi},
  data() {
    return {
      eamil: "",
      username: "",
      password: "",
      passwordTo: "",
      isLogin: true,
      message: ''
    };
  },
  computed: {
    isEmalValid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.eamil);
    },
    isPasswordValid() {
      return /^(?=.*\d)(?=.*[a-z]).{8,}$/.test(this.password);
    },
    isUsernameValid() {
      return /^[a-zA-Z0-9_\u4e00-\u9fa5]{2,20}$/.test(this.username);
    },
  },
  methods: {
    close() {
      this.$refs.isClose.classList.add("close-all");
    },
    // 注册
    register() {
      if (this.isUsernameValid && this.isPasswordValid && this.isEmalValid) {
        post("/user/register", {
          eamil: this.eamil,
          username: this.username,
          password: this.password,
        }).then((res) => {
          //注册成功
          if(res) {
            this.message = '注册成功哦'
            this.$refs.registerSuccess.childFunction();
            setTimeout(() => {
              this.$emit("send-login", this.isLogin);
            }, 3000);
          }
        });
      }
    },
    // 跳到登录
    login() {
      this.$emit("send-login", this.isLogin);
    },
  },
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
  &-close {
    right: 0.7rem;
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
  .btn,
  .close,
  .login {
    padding: 10px;
    background-color: #3498db;
    color: #333;
    top: 2rem;
    margin-top: 0.3rem;
    margin-left: 0.1rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #2980b9;
    }
  }
  .btn {
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
  .invalid {
    color: red;
  }
}
</style>
  