<template>
  <header class="headerDesktop">
    <router-link to="/">
      <img src="../assets/image/logo.svg" alt="logo" class="logo" />
    </router-link>
    <Navigation />
    <router-link to="/buy">
      <img src="../assets/image/buy.svg" alt="buy" class="buy" />
      <Indicator />
    </router-link>
  </header>
</template>

<script>
import Indicator from './Indicator.vue';
import Navigation from "./Navigation.vue";

export default {
  name: "HeaderDesktop",
  components: {
    Navigation,
    Indicator,
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
    position: relative;
    margin-top: auto;
    margin-bottom: auto;

    .indicator {
      top: 0px;
      left: 85%;
    }
  }
  .logo {
    margin-right: 25px;
  }
  .buy {
    margin-left: 25px;
  }
  li + li {
    margin-left: 50px;
  }
}
</style>
