<template>
  <div class="menuManage flfs">
    <div>
      <div>
        <div class="treeHead">
          <span>菜单列表</span>
          <div>
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              v-model="filterText">
            </el-input>
          </div>
        </div>
      </div>
      <el-tree :data="menuData" node-key="id" :props="treeProps" @node-click="nodeClick"
               accordion :filter-node-method="filterNode" ref="menuTree">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button @click.stop="addMenu" type="text" icon="el-icon-plus"></el-button>
            <el-button @click.stop="editMenu" type="text" icon="el-icon-edit"></el-button>
            <el-button @click.stop="delMenu" type="text" icon="el-icon-minus"></el-button>
          </span>
        </span>
      </el-tree>
    </div>
    <div>
      <div class="treeHead">
        <span>子菜单列表</span>
      </div>
      <div>
        <el-table :data="tableData" border>
          <el-table-column type="index" width="60" label="序号"></el-table-column>
          <el-table-column prop="url" label="路径"></el-table-column>
          <el-table-column prop="name" label="菜单名称"></el-table-column>
          <el-table-column prop="level" label="排序"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "menuManage",
      data () {
        return{
          menuData: [
            {
              id: 1,
              code: 'sysManage',
              name: '系统管理',
              url: '',
              level: 1,
              parentId: '',
              children: [
                {
                  id: 2,
                  code: 'menuManage',
                  name: '菜单管理',
                  url: '/menuManage',
                  level: 1,
                  parentId: '1',
                  children: [],
                },{
                  id: 3,
                  code: 'authManage',
                  name: '权限管理',
                  url: '/authManage',
                  level: 2,
                  parentId: '1',
                  children: [],
                },
              ],
            },
          ],
          treeProps: {
            children: 'children',
            label: 'name'
          },
          filterText: '',
          tableData: [],
        }
      },
      methods: {
        open() {
          this.$c.alertConfirm("二次包裹message").then(e=>{
            this.$c.alertMsg("二次包裹message");
          }).catch(e=>{});
        },
        addMenu () {},
        editMenu () {},
        delMenu () {},
        nodeClick (d) {
          this.tableData.splice(0,this.tableData.length)
          if (d.children.length > 0)
            this.tableData = d.children.filter(e=> e);
          else this.tableData.push(d)
        },
        filterNode (value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },
      },
      created () {
        this.tableData = this.menuData[0].children.filter(e=> e);
      },
      watch: {
        filterText(val) {
          this.$refs.menuTree.filter(val);
        }
      },
    }
</script>

<style lang="less" scoped>
  @import (reference) '../assets/common.less';
  .common-style{
    border: 1px solid #e6e6e6;
    padding: 10px;
  }
  .menuManage{
    .flex;
    height: calc(100vh - 154px);
    >div:first-child{
      width: 350px;
      .common-style;
    }
    >div:last-child{
      width: calc(100% - 380px);
      margin-left: 30px;
      overflow-y: auto;
      .common-style;
    }
    .treeHead{
      line-height: 28px;
      padding-bottom: 10px;
      margin-bottom: 15px;
      border-bottom: 2px solid #40A9FF;
      >span{
        color: #40A9FF;
      }
      >div{
        width: 150px;
      }
      .flsb
    }
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
