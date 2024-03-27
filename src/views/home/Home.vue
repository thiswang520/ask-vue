<template>
    <div class="test">
        <button @click="but" class="test__btn">点击</button>
    </div>
  </template>
  
  <script>
    import {post} from '../../utils/request'
  export default {
    name: 'Home',
    components: {
    },
    methods: {
        but () {
            post('/login/login',{name:'123'})
        }
    }
  }
  </script>
  
  <style lang="scss">
.test{
    border: 1px red solid;
}
  </style>
  