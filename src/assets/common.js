import Vue from "vue";

/**
 * 公共方法地址
 * */
const common = {
  alertMsg:(msg,type)=> {
    Vue.prototype.$message({
      message: msg || '提示',
      type: type || 'success'
    });
  },
  alertConfirm: (content = '确认操作', title = '提示') => { // 确认提示框
    return Vue.prototype.$confirm(content, title, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
  },
};
export default common
