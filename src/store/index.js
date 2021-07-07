import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
  },
  mutations: {
    setFavorite(state, item) {
      state.favorites.push(item);
    },
  },
  actions: {},
  modules: {},
});
