<template>
  <div class="category">
    <category-header></category-header>
    <div class="category_content">
      <category-sidebar :listData="sidebarList" @changeSidebar="changeSidebar"></category-sidebar>
      <category-content :listData="sidebarContent"></category-content>
    </div>
  </div>
</template>

<script>
import CategoryHeader from './CategoryHeader'
import CategorySidebar from './CategorySidebar'
import CategoryContent from './CategoryContent'
import { getCategoryList, getCategoryContent } from '../../fetch/api'
export default {
  name: 'Category',
  data () {
    return {
      // 侧边栏数据
      sidebarList: [],
      sidebarContent: [],
      // 已选中侧边栏
      sidebarCur: 0
    }
  },
  components: {
    CategoryHeader,
    CategorySidebar,
    CategoryContent
  },
  mounted () {
    this.getCategoryList()
    this.getCategoryContent()
  },
  methods: {
    async getCategoryList () {
      const data = await getCategoryList()
      this.sidebarList = data
      // console.log(data)
    },
    async getCategoryContent () {
      const data = await getCategoryContent()
      this.sidebarContent = data
      // console.log(data)
    },
    changeSidebar (index) {
      this.sidebarCur = index
      console.log(index)
    }
  }
}
</script>

<style lang="less">
  .category {
    display: flex;
    flex-direction: column;
    .category_content {
      flex: 1;
      overflow: hidden;
      display: flex;
    }
  }
</style>
