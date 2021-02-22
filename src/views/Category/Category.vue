<template>
  <div class="category">
    <Header></Header>
    <div class="content">
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
export default {
  name: 'Category',
  data () {
    return {

    }
  },
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="less">
  .category {
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
