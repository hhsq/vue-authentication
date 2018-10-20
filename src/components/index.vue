<template>
  <div class="index">
    <Header class="headBar"></Header>
    <div class="container">
      <div class="menuBox">
        <el-menu class="menus" ref="menu"
                 text-color="#999" active-text-color="#40A9FF" router unique-opened
                 :collapse="collapse" default-active="/home">
          <div class="menu home-menu">
            <li role="menuitem" tabindex="-1" class="el-menu-item" index="/home" style="color: rgb(64, 169, 255);"
                :class="{ 'mainColor': $route.path === '/home',
                                'el-submenu__title': $store.state.aboutMenu.collapse,
                                'home-menu-item': $route.path !== '/home'}" @click="toHome()">
              <i class="el-icon-setting"></i>
              <span v-show="!$store.state.aboutMenu.collapse">首页</span>
            </li>
          </div>
          <Menu :menus="menuData"></Menu>
        </el-menu>
      </div>
      <Content class="content"></Content>
    </div>
  </div>
</template>

<script>

  import {defaultRouter, powerRouter} from "@/router";
  const Menu = r => require.ensure([], () => r(require('@/components/aboutMenu.vue')), 'Menu');
  const Header = r => require.ensure([], () => r(require('@/components/common/header.vue')), 'Header');
  const Content = r => require.ensure([], () => r(require('@/components/common/content.vue')), 'Content');

  export default {
    name: 'Index',
    components: {
      Menu,
      Header,
      Content
    },
    data() {
      return {
        activeIndex: '',
        maxTabNum: 2,
        tabData: [],
      }
    },
    computed: {
      collapse () {
        return this.$store.state.aboutMenu.collapse
      },
      menuData () {
        return this.$store.state.aboutMenu.menuData
      },
    },
    created() {

    },
    updated () {
    },
    methods: {
      toHome () {
        this.$router.push('/home');
        this.$refs.menu.activeIndex = '/home'
      }

    },
    watch: {
      $route () {
        if (this.$refs.menu.activeIndex !== '/home') {

        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import (reference) '../assets/common.less';
  .menuBox{
    height: 100%;
    overflow-y: auto;
  }
  .menus:not(.el-menu--collapse) {
    width: 250px;
    height: 100%;
  }
  .container{
    height: 100vh;
    padding-top: 60px;
    .flex
  }
  .headBar {
    position: fixed;
    top: 0;
    z-index: 1999;
  }
  .content {
    flex: 1;
    overflow-x: hidden;
  }
</style>
