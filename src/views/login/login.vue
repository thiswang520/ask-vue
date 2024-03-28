<template>
  <div class="login-container">
    <div class="login-box" :class="{ 'hover-effect': hoverEffect }">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="text" id="username" placeholder="email" required >
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="password" required>
        </div>
        <button type="submit" class="btn" @click="login">Login</button>
        <button type="submit" class="btn" @click="register">Register</button>
      </form>
      <p class="forgot-password">Forgot your password? <a href="#">Reset here</a></p>
      <p class="sign-up">Don't have an account? <a href="#">Sign up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '王阳',
      password: '',
      hoverEffect: false
    };
  },
  methods: {
    login() {
      // 实现登录逻辑
      alert(123)
      localStorage.isLogin = true
      this.$store.commit('user', this.username)
      this.$router.push({ name: 'Home' })
    }
  }
};
</script>

<style lang="scss">
@import '../../style/viriables.scss';
.login-container {
  background-image: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.1)),url('../../assets/login/login1.jpg');
  background-size: cover;
  background-position: center; // 居中显示背景图像
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 3rem;
  padding: .2rem;
  background-color: rgba(0,0,0,0.4);
  border-radius: .5rem;
  box-shadow: 0 0 .1rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: transform 1s ease; /* 添加过渡效果 */
}


.login-title {
  text-align: center;
  margin-bottom: .2rem;
  color: #fff;
}

.form-group {
  margin-bottom: .2rem;
  color: #fff;
  font-size: .15rem;
  label {
    display: block;
    font-weight: bold;
    margin-bottom: .1rem;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: .1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
}

.btn {
  display: block;
  width: 100%;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  margin: .1rem auto;
  padding: .1rem;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(#3498db, 10%);
  }
}

.forgot-password,
.sign-up {
  text-align: center;
  margin-top: .4rem;
  color: #fff;
}

.forgot-password a,
.sign-up a {
  color: #3498db;
  text-decoration: none;
}
</style>
