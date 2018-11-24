<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column type="index" width="60" label="序号"></el-table-column>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="createdTime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button>权限授予</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: "authManage",
      data() {
        return{
          tableData: [
            {name:'管理员', status: '01' , createdTime: '2018-10-10'}
          ],
        }
      },
      methods: {
        open() {
          this.$c.alertConfirm("二次包裹message").then(e=>{
            this.$c.alertMsg("二次包裹message");
          }).catch(e=>{});
        },
      },
    }
</script>

<style scoped>

</style>
