import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
const Home = r => require.ensure([], () => r(require('@/views/home.vue')), 'Home');
const Option1 = r => require.ensure([], () => r(require('@/views/option1.vue')), 'Option1');
const Option2 = r => require.ensure([], () => r(require('@/views/option2.vue')), 'Option2');
Vue.use(Router);


export const defaultRouter = [
  {
    path: '/home',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {title: '首页'},
        component: Home,
      },
    ]
  },
];

export const powerRouter = [
  {
    path: '/menu1',
    name: 'menu1',
    component: Index,
    meta: {title: '系统管理'},
    children: [
      {
        path: '/menuManage',
        name: 'menuManage',
        meta: {title: '菜单管理'},
        component: Option1,
      },
      {
        path: '/authManage',
        name: 'authManage',
        meta: {title: '权限管理'},
        component: Option2,
      },
    ]
  },
  // {
  //   path: '/menu2',
  //   name: 'menu2',
  //   component: Index,
  //   meta: {title: 'option2'},
  //   children: [
  //     {
  //       path: '/option2',
  //       name: 'Option2',
  //       meta: {title: 'Option2'},
  //       component: Option2,
  //     },
  //   ]
  // },
];
export default new Router({
  mode: 'history',
  routes: defaultRouter
})
