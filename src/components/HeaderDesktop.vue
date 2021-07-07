<template>
  <header class="headerDesktop">
    <router-link to="/">
      <img src="../assets/image/logo.svg" alt="logo" class="logo" />
    </router-link>
    <Navigation />
    <router-link to="/buy">
      <img src="../assets/image/buy.svg" alt="buy" class="buy" />
    </router-link>
  </header>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "HeaderDesktop",
  components: {
    Navigation,
  },
};
</script>

<style lang="less">
.headerDesktop {
  display: flex;
  justify-content: space-between;

  padding: 25px;
  height: 100px;
  a {
    margin-top: auto;
    margin-bottom: auto;
  }
  .logo {
    margin-right: 25px;
  }
  .buy {
    margin-left: 25px;
  }
}
</style>
