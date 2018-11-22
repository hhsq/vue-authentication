import {defaultRouter, powerRouter} from "@/router";
import router from './../../router'


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
      let power = [];
      arr.forEach( e=> {
        e.children.forEach( c=>{
          power.push(c.url)
        });
      });
      powerRouter.forEach( e=> {
        e.children = e.children.filter( f => power.some( s=> s === f.path))
      });
      router.addRoutes(powerRouter);
      state.menuData = arr;
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
