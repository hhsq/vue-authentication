<template>
  <div>
    <div class="conHeadTitle">
      <div class="cc">
        <div class="collapseBtn" @click="collapse">
          <i class="el-icon-rank"> </i>
        </div>
        <Bread></Bread>
      </div>

      <div class="userInfo">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="one">第一</el-dropdown-item>
            <el-dropdown-item command="tow">第二</el-dropdown-item>
            <el-dropdown-item command="three">第三</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="tabsView">
      <TabsView></TabsView>
    </div>
  </div>
</template>
<script>
  const Bread = r => require.ensure([], () => r(require('@/components/common/breadcrumb.vue')), 'Bread');
  const TabsView = r => require.ensure([], () => r(require('@/components/common/tabsView.vue')), 'tabsView');
  export default {
    name: 'conHead',
    components: {
      Bread,
      TabsView,
    },
    data () {
      return {
        userName: '黄某人'
      }
    },
    methods: {
      collapse() {
        this.$store.commit("TOGGLE_MENU");
      },
      handleCommand (command) {
        switch (command) {
          case 'one':
            break;
          case 'two':
            break;
          case 'three':
            break;
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import (reference) '../../assets/common.less';

  .conHeadTitle {
    .flsb;
    height: 40px;
    border-bottom: 1px solid #f0f0f0;
    .flaic;
    /*box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);*/
  }

  .conHeadTab {
    padding: 5px 20px 0 20px;
  }
  .tabList {
    .flex
  }
  .tabList li {
    background: #f0f0f0;
  }
  .tabList span {
    cursor: pointer;
  }
  .tabList i {
    cursor: pointer;
  }
  .collapseBtn {
    width: 40px;
    height: 40px;
    border: none;
    color: #393a3f;
    cursor: pointer;
    .cc
  }

  .userInfo{
    margin-right: 15px;
  }
  .el-dropdown-link{
    cursor: pointer;
  }
</style>
