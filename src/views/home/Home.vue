<template>
   <div class="full-screen">
     <!-- top 顶部导航 -->
     <div class="top-navbar">
        <nav class="nav-menu">
          <ul>
            <li><a href="#" @click="home">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    <div class="content">
      <!-- Your content here -->
      <h1 class="content__font">Welcome to My Website</h1>
    </div>
    
      <!-- 左边  -->
      <!-- 右边  -->
      <!-- 底部  -->
  </div>
  <div class="slide-down-div">1</div>
</template>
  
<script>
import { post } from "../../utils/request";
export default {
  name: "Home",
  components: {},
  data () {
    return {
      user: {
        username: this.$store.state.user.username || ""
      }
    }
  },
  methods: {
    but() {
      post("/login", { name: "123" });
    },
    home() {
      document.querySelector('.slide-down-div').classList.toggle('active');
    }
  },
};
</script>
  
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.full-screen {
  background-image: linear-gradient(to right, rgba(230, 230, 230, 0.1), rgba(0,0,0,0.1)),url('../../assets/home/home.jpg');
  background-position: center; // 居中显示背景图像
  background-size: cover;
  width: 100vw; /* 100% 视口宽度 */
  height: 100vh; /* 100% 视口高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  text-align: center;
  color: #fff; /* 文本颜色 */
  &__h1{

  }
}
.slide-down-div {
  position: fixed;
  bottom: -37rem; /* 初始位置在底部 */
  left: 50%; /* 初始位置水平居中 */
  transform: translateX(-50%); /* 通过 transform 属性水平居中 */
  background-color: rebeccapurple;
  color: #fff;
  padding: .5rem 1rem;
  height: 80%;
  width: 3.5rem;
  background-color: rgba(0,0,0,0.2);
  border-radius: .4rem;
  transition: bottom 0.5s ease; /* 添加过渡效果 */
}
.slide-down-div.active {
  bottom: 2%; /* 点击后垂直居中 */
}
.top-navbar {
  position: fixed; /* 固定定位 */
  top: 0; /* 距离顶部的距离为 0 */
  left: 0; /* 距离左侧的距离为 0 */
  width: 100%; /* 宽度为视口宽度 */
  width: 100%;
  border-radius: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem .2rem;
  .nav-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nav-menu ul li {
    display: inline;
    margin-right: .6rem;
    
  }
  .nav-menu ul li:last-child {
    margin-right: 0;
  }
  .nav-menu ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.3s ease; /* 添加过渡效果 */

  }
  .nav-menu ul li a:hover {
    text-decoration: underline;
    box-shadow: 0 0 20px #333;
  }
}
</style>
  