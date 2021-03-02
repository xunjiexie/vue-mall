<template>
  <div class="suning">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from '../../components/MainTabbar/MainTabbar.vue'
export default {
  components: { MainTabbar },
  name: 'SuNing'

}
</script>

<style lang="less">
  .suning {
    height: 100%;
    display: flex;
    flex-direction: column;
    >div:first-child {
      flex:1;
      overflow: hidden;
    }
  }
</style>
