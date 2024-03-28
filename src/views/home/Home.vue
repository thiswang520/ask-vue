<template>
   <div class="full-screen">
     <!-- top 顶部导航 -->
     <div class="top-navbar">
        <nav class="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">{{ this.$store.state.user.username|| Login }}</a></li>
            <li><a href="#">register</a></li>
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
  padding: 20px 30px;
  .nav-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nav-menu ul li {
    display: inline;
    margin-right: 60px;
    
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
    transform: scale(1.6); /* 悬停时放大 20% */
  }
}
</style>
  