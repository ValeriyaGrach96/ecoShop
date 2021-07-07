<template>
  <div class="home">
    <ul>
      <li v-for="card of products" :key="card.id">
        <CardOfProduct :card="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardOfProduct from "../components/CardOfProduct.vue";
import productService from "../api/api";

export default {
  name: "Home",
  components: {
    CardOfProduct,
  },
  data() {
    return {
      products: {
        type: Array,
        default: [],
      },
    };
  },
  async mounted() {
    this.products = await productService.getCardsData();
  },
};
</script>

<style lang="less">
.home {
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-around;
  }
  li {
    align-items: flex-start;
    margin: 0;
    padding: 12.5px;
    text-align: center;
  }
}
@media screen and (max-width: 1024px) {
  .home {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
