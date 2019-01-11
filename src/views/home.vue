<template>
    <div>
      <el-button @click="open">一个简单的按钮</el-button>
    </div>
</template>

<script>
    export default {
      name: "home",
      methods: {
        open() {
          this.$c.alertConfirm("二次包裹message").then(e=>{
            this.$c.alertMsg("二次包裹message");
          }).catch(e=>{});
        },
      }
    }
</script>

<style scoped>

</style>
