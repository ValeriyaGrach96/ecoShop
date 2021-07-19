<template>
  <div id="app">
    <HeaderMobile v-if="isMobile" />
    <HeaderDesktop v-else />
    <main>
      <router-view />
    </main>
    <UserPanel v-if="isMobile" />
  </div>
</template>

<script>
import HeaderMobile from "./components/HeaderMobile.vue";
import HeaderDesktop from "./components/HeaderDesktop.vue";
import UserPanel from "./components/UserPanel.vue";

export default {
  name: "App",
  components: {
    HeaderMobile,
    HeaderDesktop,
    UserPanel,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  async created() {
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
    this.setMobileInStore();
    window.addEventListener("resize", this.resizeWidth);
    window.onbeforeunload = function () {
      window.removeEventListener("resize", this.resizeWidth);
    };
  },
  watch: {
    isMobile() {
      this.setMobileInStore();
    },
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
    setMobileInStore() {
      this.$store.commit("setMobileView", this.isMobile);
    },
  },
};
</script>

<style lang="less">
main {
  margin-bottom: 70px;
}
</style>
