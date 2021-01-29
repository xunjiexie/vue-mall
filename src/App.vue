<template>
  <div id="app">
    <router-view/>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from './components/MainTabbar/MainTabbar'
export default {
  components: {
    MainTabbar
  }
}
</script>

<style lang="less">
  @import './assets/css/base.css';
</style>
