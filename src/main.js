
import Vue from 'vue'
import App from './App'
import Store from './store';
import router from './router'
import {defaultRouter, powerRouter} from "@/router";
import Axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DefaultElementUI from './assets/defaultElementUI';
import API from './api/commonApi';
import Common from './assets/common';
import 'babel-polyfill';
Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$api = API;
Vue.prototype.$c = Common;
Vue.prototype.axios = Axios;
Axios.defaults.headers.common['framework'] = 'huang0318';
/**
 * axios的拦截器进行一些拦截
 * 处理一些事情，比如退出登录
 * */
Axios.interceptors.response.use((response) => {
  if (response.data.length > 100) {
    router.push({path:'/'})
  }
  return response
});
/**
 * 路由守卫 ==> 路由跳转前进行（强大）
 * 可根据next()搞事情
 * */
router.beforeEach((to, from, next) => {
  // 路由跳转前需要进行判断  判断是否存在菜单
  // 如果存在  就在这之前return  next();
  // 后台返回参数示例
  // let d = [
  //   {
  //     code: "menu1",
  //     childs: [
  //       {code: "option1", childs: [], level: 1, icon: "", id: "11", parentId: "1", url: "", name: "选项一",},
  //       {code: "option2", childs: [], level: 2, icon: "", id: "12", parentId: "1", url: "", name: "选项二",}
  //     ],
  //     level: 1,
  //     icon: "el-icon-goods",
  //     id: "1",
  //     name: "菜单1",
  //     parentId: "",
  //     url: "",
  //   },
  //   {
  //     code: "menu1",
  //     childs: [
  //       {code: "option1", childs: [], level: 1, icon: "", id: "21", parentId: "2", url: "", name: "选项一",},
  //       {code: "option2", childs: [], level: 2, icon: "", id: "22", parentId: "2", url: "", name: "选项二",}
  //     ],
  //     level: 2,
  //     icon: "el-icon-message",
  //     id: "2",
  //     name: "菜单2",
  //     parentId: "",
  //     url: "",
  //   },
  // ];

  if (Store.state.aboutMenu.hasMenuData) {
    next();
    return;
  }


  new Promise((resolve, reject) => {
    let params = { // 获取菜单

    };
    let d = [
      {
        code: "menu1",
        childs: [
          {code: "option1", childs: [], level: 1, icon: "", id: "11", parentId: "1", url: "/option1", name: "选项一",},
          {code: "option2", childs: [], level: 2, icon: "", id: "12", parentId: "1", url: "/option2", name: "选项二",}
          ],
        level: 1,
        icon: "el-icon-goods",
        id: "1",
        name: "菜单1",
        parentId: "",
        url: "",
      },
      {
        code: "menu1",
        childs: [
          {code: "option1", childs: [], level: 1, icon: "", id: "21", parentId: "2", url: "/option1", name: "选项一",},
          {code: "option2", childs: [], level: 2, icon: "", id: "22", parentId: "2", url: "/option2", name: "选项二",}
        ],
        level: 2,
        icon: "el-icon-message",
        id: "2",
        name: "菜单2",
        parentId: "",
        url: "",
      },
    ];
    router.addRoutes(powerRouter);
    Store.commit('SET_MENU_DATA', d);
    Store.commit("SET_MENU_STATUS");
    next()


    // API.postApi(params).then( res=>{
    //   Store.commit('clearMenuData');
    //   Store.commit('SET_MENU_DATA', res.data);
    // })
  }).then(e => {
    next();
  });
});

new Vue({
  el: '#app',
  router,
  store: Store,
  components: { App },
  template: '<App/>'
});
