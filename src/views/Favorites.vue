<template>
  <div class="favorites">
    <ul>
      <li v-for="card of favorites" :key="card.id">
        <CardOfProduct :card="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardOfProduct from "../components/CardOfProduct.vue";

export default {
  name: "Favorites",
  components: {
    CardOfProduct,
  },
  computed: {
    favorites() {
      return this.$store.getters.getFavorites;
    },
  },
};
</script>
