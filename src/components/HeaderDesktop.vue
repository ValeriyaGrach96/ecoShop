<template>
  <header class="headerDesktop">
    <router-link to="/">
      <img src="../assets/image/logo.svg" alt="logo" class="logo" />
    </router-link>
    <Navigation />
    <UserPopup
      @onClosePopup="onToggleUserPopup"
      :class="{ visible: isOpenUserPopup }"
    />
    <button
      type="button"
      aria-label="users navigation"
      class="usersNavigation"
      @click.stop="onToggleUserPopup"
    >
      <img src="../assets/image/user.svg" alt="user" />
    </button>
  </header>
</template>

<script>
import Navigation from "./Navigation.vue";
import UserPopup from "./UserPopup.vue";

export default {
  name: "HeaderDesktop",
  components: {
    Navigation,
    UserPopup,
  },
  data() {
    return {
      isOpenUserPopup: false,
    };
  },
  watch: {
    $route(to) {
      if (to) {
        this.isOpenUserPopup = false;
      }
    },
  },
  methods: {
    onToggleUserPopup() {
      this.isOpenUserPopup = !this.isOpenUserPopup;
    },
  },
};
</script>

<style lang="less">
.headerDesktop {
  display: flex;
  justify-content: space-between;
  position: relative;

  padding: 25px;
  height: 100px;
  a {
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
  }
  .logo {
    margin-right: 25px;
  }
  .usersNavigation {
    margin-left: 25px;
    cursor: pointer;
    padding: 15px;
  }
  li + li {
    margin-left: 50px;
  }
}
</style>
