<template>
  <div class="tabbar_item" @click="itemClick">
    <slot v-if="!isActive" name="icon"></slot>
    <slot v-else name="icon_active"></slot>
    <slot name="name"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick () {
      // console.log(this.$route)
      if (this.$route.path === this.path) return
      this.$router.replace({
        path: this.path
      })
    }
  }
}
</script>

<style lang="less">
  .tabbar_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
    }
    p {
      font-size: 26px;
    }
  }
</style>
