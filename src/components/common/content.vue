<template>
  <div id="contentBox">
    <ConHead class="conHead"></ConHead>
    <div style="height: 75px"></div>
    <div class="contentDetail" ref="contentDetail" element-loading-text="正在加载数据...">
      <transition name="fade" mode="out-in">
        <keep-alive :include="aliveViews">
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
  const ConHead = r => require.ensure([], () => r(require('@/components/common/conHead.vue')), 'ConHead');
  export default {
    name: "contentBar",
    components:{
      ConHead,
    },
    computed: {
      aliveViews () {
        return this.$store.state.tabsView.aliveView
      }
    },
  }
</script>

<style scoped lang="less">
  #contentBox {
    position: relative;
    .conHead {
      background: #fff;
      position: absolute;
      top: 0px;
      z-index: 99;
      width: 100%;
    }
  }
  .contentDetail {
     padding: 20px;
     height: calc(100% - 75px);
     flex: 1;
     overflow-y: auto;
   }
</style>
