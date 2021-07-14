<template>
  <nav class="UsersNavigation">
    <router-link to="/" class="homeLink" exact>
      <img src="../assets/image/icon-home.svg" alt="home" />
    </router-link>
    <router-link to="/buy" class="buyLink" exact>
      <img src="../assets/image/icon-buy.svg" alt="buy" />
      <Indicator v-show="isFullCart" />
    </router-link>
    <router-link to="/favorites" class="favoritesLink" exact>
      <img src="../assets/image/icon-favorites.svg" alt="favorites" />
    </router-link>
    <router-link to="/user" class="userLink" exact>
      <img src="../assets/image/icon-user.svg" alt="user" />
    </router-link>
  </nav>
</template>

<script>
import Indicator from "./Indicator.vue";

export default {
  name: "UsersNavigetion",
  components: { Indicator },
  computed: {
    isFullCart() {
      return this.$store.getters.getCartHasItems;
    },
  },
};
</script>

<style lang="less">
.UsersNavigation {
  line-height: 65px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-around;

  .buyLink {
    position: relative;
    .indicator {
      top: 20px;
      left: 21px;
    }
  }
  .homeLink.router-link-exact-active {
    img {
      content: url("../assets/image/icon-home-active.svg");
    }
  }
  .buyLink.router-link-exact-active {
    img {
      content: url("../assets/image/icon-buy-active.svg");
    }
  }
  .favoritesLink.router-link-exact-active {
    img {
      content: url("../assets/image/icon-favorites-active.svg");
    }
  }
  .userLink.router-link-exact-active {
    img {
      content: url("../assets/image/icon-user-active.svg");
    }
  }

  img {
    vertical-align: middle;
  }
}
</style>
