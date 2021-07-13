<template>
  <div class="favorites">
    <ul>
      <li v-for="card of favorites" :key="card.id">
        <CardOfProduct :card="card" />
      </li>
    </ul>
    <footer v-if="!favorites.length" class="emtyFooter">
      <p>You don't have a favorites products :(</p>
    </footer>
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

<style lang="less">
@greydark: #828282;

.emtyFooter {
  text-align: center;
  height: 100%;

  p {
    margin-top: 20%;
    margin-bottom: auto;
    color: @greydark;
    font-weight: 600;
  }
}
</style>
