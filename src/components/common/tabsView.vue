<template>
    <div>
      <el-tabs v-model="tabView" type="card" @tab-click="tabClick" closable @tab-remove="removeTab" @contextmenu.prevent.native="openMenu($event)">
        <el-tab-pane label="首页" name="/home"></el-tab-pane>
        <el-tab-pane
          v-for="(item, idx) in visitedViews"
          :key="item.meta.title"
          :label="item.meta.title"
          :name="item.path"
        >
        </el-tab-pane>
      </el-tabs>
      <span @click.prevent.stop="closeMenu"></span>
      <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
        <li @click="closeSelectedTab">关闭当前</li>
        <li @click="closeOthersTabs">关闭其他</li>
        <li @click="closeAllTabs">关闭所有</li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "tabsView",
      data() {
        return{
          tabView: '',
          data: [],

          visible: false,
          top: 0,
          left: 0,
          selectedTag: {}
        }
      },
      computed:{
        visitedViews () {
          return this.$store.state.tabsView.visitedViews
        }
      },
      created () {
        this.$store.commit('CLEAR_VIEWS',this.$route)
        this.tabView = this.$route.path;
        this.addVisitedView(this.$route)
      },
      methods: {
        removeTab (tab) {
          if (tab === '/home') return;
          else this.$store.dispatch('delVisitedViews',tab).then(views=>{
            const latestView = views.slice(-1)[0];
            if (this.tabView === this.$route.path) {
              if (latestView) {
                this.$router.push(latestView.path);
              } else {
                this.$router.push('/home');
              }
            }
          })
        },
        tabClick (tab) {
          this.$router.push(tab.name)
        },
        addVisitedView (to) {
          if (to.path === '/home') return;
          if (!this.$store.state.tabsView.visitedViews.some(e => e.path === to.path)) {
            this.$store.commit('ADD_VISITED_VIEWS',to);
          }
        },
        closeSelectedTab () {
          this.removeTab(this.$route.path);
        },
        closeOthersTabs () {
          this.$store.commit('DEL_OTHER_VIEWS',this.$route.path)
        },
        closeAllTabs () {
          this.$store.commit('CLEAR_VIEWS')
        },
        openMenu(e) {
          if (this.visitedViews.length != 1 || this.visitedViews[0].path != '/home') {
            this.visible = true;
            this.left = e.clientX - 250;
            this.top = e.clientY - 60
          }
        },
        closeMenu () {
          this.visible = false
        },
      },
      watch: {
        $route(to) {
          this.tabView = to.path;
          this.addVisitedView(to)
        },
        visible(value) {
          if (value) {
            document.body.addEventListener('click', this.closeMenu)
          } else {
            document.body.removeEventListener('click', this.closeMenu)
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  @import (reference) '../../assets/common.less';
  /deep/ .el-tabs__header{
    margin: 0 !important;
  }
  /deep/ .el-tabs__item{
    height: 35px;
    line-height: 35px;
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 9999;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      border-bottom: 1px solid #f0f0f0;
      &:hover {
        background: #eee;
      }
    }
  }
</style>
