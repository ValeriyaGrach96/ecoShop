<template>
  <div class="womens">
    <SearchPanel />
    <ul>
      <li v-for="card of products" :key="card.id">
        <CardOfProduct :card="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardOfProduct from "../components/CardOfProduct.vue";
import SearchPanel from "../components/SearchPanel.vue";
import productService from "../api/api";
import stoke from "../api/stoke";

export default {
  name: "Womens",
  components: {
    CardOfProduct,
    SearchPanel,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await productService.getOnlyWomens();
    this.products.forEach((card) => {
      stoke.setDiscount(card);
      stoke.setFinalPrice(card);
    });
  },
};
</script>
