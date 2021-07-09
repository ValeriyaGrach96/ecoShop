<template>
  <div id="app">
    <HeaderMobile v-if="isMobile" />
    <HeaderDesktop v-else />
    <main>
      <SearchPanel />
      <router-view />
    </main>
    <UserPanel v-if="isMobile" />
  </div>
</template>

<script>
import HeaderMobile from "./components/HeaderMobile.vue";
import HeaderDesktop from "./components/HeaderDesktop.vue";
import SearchPanel from "./components/SearchPanel.vue";
import UserPanel from "./components/UserPanel.vue";

export default {
  name: "App",
  components: {
    HeaderMobile,
    HeaderDesktop,
    SearchPanel,
    UserPanel,
  },
  data() {
    return {
      isMobile: {
        type: Boolean,
        default: false,
      },
    };
  },
  created() {
    const favoritesFromLS = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesFromLS.length) {
      favoritesFromLS.forEach((card) => {
        this.$store.commit("setFavorite", card);
      });
    }
    const cartFromLS = JSON.parse(localStorage.getItem("cart"));
    if (cartFromLS.length) {
      cartFromLS.forEach((card) => {
        this.$store.commit("setInCart", card);
      });
    }
  },
  mounted() {
    let widthWindow = window.innerWidth;
    this.widthForMobile(widthWindow);
    window.addEventListener("resize", this.resizeWidth);
    window.onbeforeunload = function () {};
  },
  methods: {
    resizeWidth(evt) {
      this.widthForMobile(evt.currentTarget.innerWidth);
    },
    widthForMobile() {
      this.isMobile = false;
      if (window.innerWidth < 1024) {
        this.isMobile = true;
      }
    },
  },
};
</script>

<style lang="less">
main {
  margin-bottom: 70px;
}
</style>
