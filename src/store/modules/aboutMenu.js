const aboutMenu = {
  state: {
    menuData: [],
    collapse:false,
    hasMenuData: false,
  },
  mutations: {
    CLEAR_MENU_DATA: (state) => {
      state.menuData.splice(0,state.menuData.length)
    },
    SET_MENU_DATA: (state, arr) => {
      // let indexPage= {
      //   name: '首页',
      //   url: '/home',
      //   icon: 'el-icon-menu'
      // };
      // state.menuData.push(indexPage, ...arr)
      state.menuData = arr
    },
    TOGGLE_MENU (state) {
      state.collapse = !state.collapse
    },
    SET_MENU_STATUS (state) {
      state.hasMenuData = !state.hasMenuData
    }
  },
  actions: {

  }
};
export default aboutMenu
