<template>
  <div id="contentBox">
    <ConHead class="conHead"></ConHead>
    <div style="height: 40px"></div>
    <div class="contentDetail" ref="contentDetail" element-loading-text="正在加载数据...">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  const ConHead = r => require.ensure([], () => r(require('@/components/common/conHead.vue')), 'ConHead');
  export default {
    name: "contentBar",
    components:{
      ConHead
    }
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
     height: calc(~'100% - 40px');
     flex: 1;
     overflow-y: auto;
   }
</style>
