<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
// import ''
export default {
  name: 'Tabbar'
}
</script>

<style lang="less">
  .tabbar {
    width: 750px;
    height: 100px;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }
</style>
