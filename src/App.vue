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
  mounted() {
    window.addEventListener("resize", this.resizeWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWidth);
  },
  methods: {
    resizeWidth(evt) {
      this.isMobile = false;
      if (evt.currentTarget.innerWidth < 1024) {
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
