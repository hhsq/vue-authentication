const tabsView = {
  state: {
    visitedViews: [],
    aliveView: [],
  },
  mutations: {
    ADD_VISITED_VIEWS: (state,view) => {
      state.visitedViews.push(view);
      state.aliveView.push(view.name)
    },
    DEL_VISITED_VIEWS: (state,path) => {
      let idx = state.visitedViews.findIndex( e => {
        return e.path === path;
      });
      if (idx > -1) state.visitedViews.splice(idx,1)
      state.aliveView.forEach((e,i) => {
        if (e == path)
          state.aliveView.splice(i,1)
      })
    },
    DEL_OTHER_VIEWS: (state,path) => {
      state.visitedViews = state.visitedViews.filter( e=>{
        return e.path === path
      });
      state.aliveView = state.aliveView.filter( e=>{
        return e === path
      });
    },
    CLEAR_VIEWS: (state) => {
      state.visitedViews.splice(0,state.visitedViews.length);
      state.aliveView.splice(0,state.aliveView.length)
    }
  },
  actions: {
    delVisitedViews ({commit,state}, path) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', path);
        resolve(state.visitedViews)
      })
    },
  }
};
export default tabsView
