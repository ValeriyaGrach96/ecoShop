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
    <router-link to="/buy" class="toCart">
      <img src="../assets/image/buy.svg" alt="buy" class="buy" />
      <Indicator />
    </router-link>
  </header>
</template>

<script>
import Indicator from "./Indicator.vue";
import MenuPopup from "./MenuPopup.vue";
import productService from "../api/api";

const NAMES_LIST = {
  electronics: "Electronics",
  jewelery: "Jewelery",
  mens: "Men's Clothing",
  womens: "Women's Clothing",
  buy: "Cart",
  search: "Search",
  favorites: "Favorites",
  user: "User page",
  async nameProducst(cardID) {
    const titleCard = await productService.getOnlyProduct(cardID);
    return titleCard.title;
  },
};

export default {
  components: {
    MenuPopup,
    Indicator,
  },
  name: "HeaderMobile",
  data() {
    return {
      namePage: "",
      isVisiblePopup: false,
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
      let path = location.path.slice(1);
      const cardIndex = path.lastIndexOf("/");
      this.namePage = "Home";
      if (path && cardIndex === -1) {
        this.namePage = NAMES_LIST[path];
      } else if (path) {
        const cardId = path.slice([cardIndex]);
        NAMES_LIST.nameProducst(cardId).then((name) => (this.namePage = name));
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
  .toCart {
    position: relative;
    .indicator {
      top: 11px;
      left: 18px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .headerMobile {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
