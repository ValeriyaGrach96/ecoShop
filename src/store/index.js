import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
    cart: [],
  },
  mutations: {
    setFavorite(state, item) {
      const indexCard = state.favorites.findIndex(
        (card) => card.id === item.id
      );
      if (indexCard === -1) {
        state.favorites.push(item);
      } else {
        state.favorites = state.favorites.filter((_, idx) => idx !== indexCard);
      }
    },
    setInCart(state, item) {
      const indexCard = state.cart.findIndex((card) => card.id === item.id);
      if (indexCard === -1) {
        if (!item.amount) {
          item.amount = 1;
        }
        state.cart.push(item);
      } else {
        state.cart[indexCard].amount++;
      }
    },
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    },
    getCart(state) {
      return state.cart;
    },
  },
  actions: {
    saveToLocalStorage({ state }, nameOfData) {
      localStorage.setItem(`${nameOfData}`, JSON.stringify(state[nameOfData]));
    },
    setFavorite({ dispatch, commit }, cardOfProduct) {
      commit("setFavorite", cardOfProduct);
      dispatch("saveToLocalStorage", "favorites");
    },
    setInCart({ dispatch, commit }, cardOfProduct) {
      commit("setInCart", cardOfProduct);
      dispatch("saveToLocalStorage", "cart");
    },
  },
  modules: {},
});
