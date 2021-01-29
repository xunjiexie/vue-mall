<template>
  <tabbar>
    <tabbar-item path="/home">
      <template v-slot:icon><img src="../../assets/imgs/home.png" alt=""></template>
      <template v-slot:icon_active><img src="../../assets/imgs/home-active.png" alt=""></template>
      <template v-slot:name><p>首页</p></template>
    </tabbar-item>
    <tabbar-item path="/category">
      <template v-slot:icon><img src="../../assets/imgs/category.png" alt=""></template>
      <template v-slot:icon_active><img src="../../assets/imgs/category-active.png" alt=""></template>
      <template v-slot:name><p>分类</p></template>
    </tabbar-item>
    <tabbar-item path="/cart">
      <template v-slot:icon><img src="../../assets/imgs/cart.png" alt=""></template>
      <template v-slot:icon_active><img src="../../assets/imgs/cart-active.png" alt=""></template>
      <template v-slot:name><p>购物车</p></template>
    </tabbar-item>
    <tabbar-item path="/profile">
      <template v-slot:icon><img src="../../assets/imgs/profile.png" alt=""></template>
      <template v-slot:icon_active><img src="../../assets/imgs/profile-active.png" alt=""></template>
      <template v-slot:name><p>我的</p></template>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from '../Tabbar/Tabbar'
import TabbarItem from '../Tabbar/TabbarItem'
export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>
