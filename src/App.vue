<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
.app{
  height: 100%;
  width: 100%;
  &__top {
    height: 100%;
    color: red;
    border: 1px red solid;
  }
}
</style>