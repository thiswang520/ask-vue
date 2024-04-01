<template>
  <div class="login-container">
    <form>
      <h1>登录</h1>
      <div class="input-group">
        <input
          :class="{ invalid: !isEmalValid }"
          type="text"
          id="username"
          v-model="eamil"
          placeholder="Enter your email"
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
      <button
        class="btn"
        type="submit"
        @click="login"
        :disabled="!isPasswordValid || !isEmalValid"
      >
        Login
      </button>
      <button class="btn" type="submit" @click="register">Go Register</button>
    </form>
    <tiShi ref="loginSuccess" :message="message" />
  </div>
</template>

<script>
import { post } from "../../utils/request";
import tiShi from "../../components/tishi.vue";
export default {
  components: { tiShi },
  data() {
    return {
      eamil: "",
      password: "",
      message: "",
      isLoginStatus: false,
      user: {
        username: "",
      },
    };
  },
  methods: {
    login() {
      if (this.isPasswordValid && this.isEmalValid) {
        post("/user/login", {
          eamil: this.eamil,
          password: this.password,
        }).then((res) => {
          console.log(res.data);
          const data = res.data
          //登录成功
          if (data.code === 0+'') {
            this.message = "登录成功哦";
            this.$refs.loginSuccess.childFunction();
            setTimeout(() => {
              localStorage.isLogin = true;
              this.isLoginStatus = true;
              this.user.username = data.username
              localStorage.username = data.username
              this.$emit("send-login-to", this.isLoginStatus);
              const user = {username: data.username,email: data.email}
              // vuex保存 用户信息
              this.$store.commit("addUser", user);
            }, 3000);
          }
        });
      }
    },
    register() {
      this.$emit("send-login", false);
    },
  },
  computed: {
    isEmalValid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.eamil);
    },
    isPasswordValid() {
      return /^(?=.*\d)(?=.*[a-z]).{8,}$/.test(this.password);
    },
  },
};
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
    margin-top: 0.3rem;
    margin-left: 0.1rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    &:hover {
      background-color: #2980b9;
    }
  }
}
.invalid {
  color: red;
}
</style>
