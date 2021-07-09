<template>
  <article class="cardOfProduct">
    <section class="service">
      <div class="promotion">
        <p class="sale">-30%</p>
      </div>
      <button
        class="likeIt"
        type="button"
        @click.stop="onSetFavorite"
        :class="{ active: isActive }"
      >
        <img src="../assets/image/icon-likeIt.svg" alt="like it" />
      </button>
    </section>
    <header>
      <img
        :src="card.image"
        alt="image of product"
        width="110px"
        height="110px"
      />
      <h2>{{ card.title }}</h2>
    </header>
    <footer>
      <button class="inCart" @click="onAddInCart">
        <img src="../assets/image/icon-inCart.svg" alt="Add in cart" />
      </button>
      <h3>{{ card.price }}$</h3>
    </footer>
  </article>
</template>

<script>
export default {
  name: "CardOfProduct",
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isActive() {
      return this.$store.getters.getFavorites.some(
        (item) => item.id === this.card.id
      );
    },
  },
  methods: {
    onSetFavorite() {
      this.$store.dispatch("setFavorite", this.card);
    },
    onAddInCart() {
      this.$store.dispatch("setInCart", this.card);
    },
  },
};
</script>

<style lang="less">
@white: #ffffff;
@green: #38972e;

.cardOfProduct {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  background-color: @white;
  box-shadow: 0px 8px 10px rgba(65, 65, 56, 0.14);
  border-radius: 6px;
  .service {
    display: flex;
    justify-content: space-between;
    .sale {
      background-color: @green;
      color: @white;
      border-radius: 4px;
      padding: 4px;
    }
    .likeIt {
      cursor: pointer;
      &.active {
        img {
          content: url("../assets/image/icon-likeIt-active.svg");
        }
      }
    }
  }
  h2 {
    font-size: 17px;
    line-height: 22px;
    margin-top: 20px;
    font-weight: 600;
  }
  p {
    font-size: 11px;
    line-height: 13px;
    margin-top: 10px;
  }
  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;

    .inCart {
      cursor: pointer;
    }

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: @green;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
</style>
