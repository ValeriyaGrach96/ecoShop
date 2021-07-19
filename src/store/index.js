import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
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
      }
    },
    setOutCart(state, item) {
      const indexCard = state.cart.findIndex((card) => card.id === item.id);
      let amountCard = state.cart[indexCard].amount;
      if (amountCard !== 1) {
        state.cart[indexCard].amount--;
      } else {
        state.cart = state.cart.filter((_, idx) => idx !== indexCard);
      }
    },
    setAmount(state, card) {
      let copy = [...state.cart];
      const idx = copy.findIndex((item) => {
        return card.id === item.id;
      });
      let tempItem = { ...copy[idx] };
      tempItem.amount += 1;
      copy[idx] = tempItem;
      state.cart = copy;
    },
    setMobileView(state, mobileView) {
      state.isMobile = mobileView;
    },
  },
  getters: {
    getCartHasItems(state) {
      return state.cart.length > 0;
    },
  },
  actions: {
    saveToLocalStorage({ state }, nameOfData) {
      if (localStorage) {
        localStorage.setItem(
          `${nameOfData}`,
          JSON.stringify(state[nameOfData])
        );
      }
    },
    setFavorite({ dispatch, commit }, cardOfProduct) {
      commit("setFavorite", cardOfProduct);
      dispatch("saveToLocalStorage", "favorites");
    },
    setInCart({ dispatch, commit }, cardOfProduct) {
      commit("setInCart", cardOfProduct);
      dispatch("saveToLocalStorage", "cart");
    },
    setOutCart({ dispatch, commit }, cardOfProduct) {
      commit("setOutCart", cardOfProduct);
      dispatch("saveToLocalStorage", "cart");
    },
    increaseAmount({ dispatch, commit }, card) {
      commit("setAmount", card);
      dispatch("saveToLocalStorage", "cart");
    },
  },
  modules: {},
});
