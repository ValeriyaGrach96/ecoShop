<template>
  <div class="buy">
    <ul>
      <li v-for="card of cart" :key="card.id">
        <CardInCart :card="card" />
      </li>
    </ul>
    <footer v-if="cartHasItems" class="totalPrice">
      <hr />
      <p>Total price: {{ totalPrice }}$</p>
    </footer>
    <footer v-else class="emtyFooter">
      <p>Your cart is emty :(</p>
    </footer>
  </div>
</template>

<script>
import CardInCart from "../components/CardInCart.vue";

export default {
  name: "Buy",
  components: {
    CardInCart,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      let totalPrice = 0;
      this.$store.state.cart.forEach((card) => {
        totalPrice += card.finalPrice * card.amount;
      });
      return Math.round(totalPrice * 100) / 100;
    },
    cartHasItems() {
      return this.$store.getters.getCartHasItems;
    },
  },
};
</script>

<style lang="less">
@greydark: #828282;

.buy {
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    li {
      width: 100%;
    }
    li + li {
      margin-top: 15px;
    }
  }
  hr {
    margin-top: 30px;
    width: 90%;
    border: 0.5px solid @greydark;
  }
  footer {
    font-size: 16px;
    font-weight: 600;
    text-align: end;
  }
  .emtyFooter {
    text-align: center;
    height: 100%;

    p {
      margin-top: 20%;
      margin-bottom: auto;
      color: @greydark;
    }
  }
}
</style>
