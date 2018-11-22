<template>
  <div class="menu">
    <template v-for="(menu, idx) in menus">
      <el-menu-item v-if="!menu.children || (!menu.children.length&&menu.parentId)" :index="menu.url">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
      <el-submenu v-else :index="menu.id">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span v-show="!$store.state.aboutMenu.collapse" slot="title"> {{menu.name}}</span>
        </template>
        <Menu :menus="menu.children"></Menu>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: ['menus'],
  data () {
    return {
      isCollapse: false
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style scoped lang="less">

  /*.el-menu--collapse .el-submenu .el-submenu__title .el-submenu__icon-arrow, .el-menu--collapse .el-submenu .el-submenu__title span*/
</style>
