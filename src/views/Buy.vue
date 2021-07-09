<template>
  <div class="buy">
    <ul>
      <li v-for="card of cart" :key="card.id">
        <CardOfProduct :card="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardOfProduct from "../components/CardOfProduct.vue";

export default {
  name: "Buy",
  components: {
    CardOfProduct,
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>
