<template>
    <div>
      <el-table :data="tableData" border>
        <el-table-column type="index" width="60" label="序号"></el-table-column>
        <el-table-column prop="name" label="权限名称"></el-table-column>
        <el-table-column prop="status" label="权限编码"></el-table-column>
        <el-table-column prop="createdTime" label="创建时间"></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      name: "authListManage",
      data() {
          return{
            tableData: []
          }
      }
    }
</script>

<style scoped>

</style>
