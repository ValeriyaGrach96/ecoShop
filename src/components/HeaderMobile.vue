<template>
  <header class="headerMobile">
    <div class="menu">
      <button type="button" class="menuButton" @click="onOpenPopup">
        <img
          src="../assets/image/icon-categories-menu.svg"
          alt="categories menu"
          class="menuLogo"
        />
      </button>
      <MenuPopup v-show="isVisiblePopup" @onClose="onClosePopup" />
    </div>
    <p>{{ namePage }}</p>
    <router-link to="/buy">
      <img src="../assets/image/buy.svg" alt="buy" class="buy" />
    </router-link>
  </header>
</template>

<script>
import MenuPopup from "./MenuPopup.vue";

export default {
  components: {
    MenuPopup,
  },
  name: "HeaderMobile",
  data() {
    return {
      namePage: {
        type: String,
        default: () => {},
      },
      isVisiblePopup: {
        type: Boolean,
        default: false,
      },
    };
  },
  created() {
    this.getNamePage(this.$route);
    this.isVisiblePopup = false;
  },
  watch: {
    $route(to) {
      this.getNamePage(to);
    },
  },
  methods: {
    getNamePage(location) {
      const namesList = {
        electronics: "Electronics",
        jewelery: "Jewelery",
        mens: "Men's Clothing",
        womens: "Women's Clothing",
        buy: "Cart",
        search: "Search",
        favorites: "Favorites",
        user: "User page",
      };
      let path = location.path.slice(1);
      this.namePage = "Home";
      if (path) {
        this.namePage = namesList[path];
      }
    },
    onOpenPopup() {
      this.isVisiblePopup = true;
    },
    onClosePopup() {
      this.isVisiblePopup = false;
    },
  },
};
</script>

<style lang="less">
.headerMobile {
  display: flex;
  justify-content: space-between;

  padding: 25px;
  height: 100px;

  .menu {
    position: relative;

    .menuLogo {
      cursor: pointer;
    }
  }

  img {
    margin-top: 12.5px;
  }
  p {
    font-weight: 600;
  }
}
@media screen and (max-width: 1024px) {
  .headerMobile {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
