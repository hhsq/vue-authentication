<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path" v-if='item.meta.title'>
        <span v-if = 'index == levelList.length-1 || index == 0' class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect || item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  /**
   * 面包屑
   * */
  export default {
    name: 'breadcrumb',
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      getBreadcrumb () {
        let matched = this.$route.matched;
        const last = matched[matched.length-1];
        if (last && last.name === '/') {
          matched = [last]
        }
        this.levelList = matched;
      }
    }
  }
</script>

<style lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all .5s;
  }
  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }
  .breadcrumb-move {
    transition: all .5s;
  }
  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
