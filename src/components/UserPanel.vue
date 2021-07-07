<template>
  <article id="userPanel">
    <nav>
      <router-link to="/" class="homeLink" exact>
        <img src="../assets/image/icon-home.svg" alt="home" />
      </router-link>
      <router-link to="/buy" class="buyLink" exact>
        <img src="../assets/image/icon-buy.svg" alt="buy" />
      </router-link>
      <router-link to="/search" class="searchLink" exact>
        <img src="../assets/image/icon-search.svg" alt="search" />
      </router-link>
      <router-link to="/favorites" class="favoritesLink" exact>
        <img src="../assets/image/icon-favorites.svg" alt="favorites" />
      </router-link>
      <router-link to="/user" class="userLink" exact>
        <img src="../assets/image/icon-user.svg" alt="user" />
      </router-link>
    </nav>
  </article>
</template>

<script>
export default {
  name: "UserPanel",
};
</script>

<style lang="less">
@white: #ffffff;
@green: #38972e;
#userPanel {
  position: fixed;
  top: calc(100% - 64px);
  left: 0px;

  height: 65px;
  width: 100%;
  box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.07);

  background-color: @white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  nav {
    line-height: 65px;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: space-around;

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
    .searchLink.router-link-exact-active {
      img {
        content: url("../assets/image/icon-search-active.svg");
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
}
</style>
