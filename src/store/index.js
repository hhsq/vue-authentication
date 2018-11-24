import Vue from 'vue'
import Vuex from 'vuex';
import aboutMenu from './modules/aboutMenu'
import tabsView from './modules/tabsView';
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    aboutMenu,
    tabsView
  },
  getters
})
