<template>
  <div class="electronics">
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
  name: "Electronics",
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
    this.products = await productService.getOnlyElectronics();
    this.products.forEach((card) => {
      stoke.setDiscount(card);
      stoke.setFinalPrice(card);
    });
  },
};
</script>
