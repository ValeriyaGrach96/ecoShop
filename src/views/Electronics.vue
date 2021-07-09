<template>
  <div class="electronics">
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
  name: "Electronics",
  components: {
    CardOfProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await productService.getOnlyElectronics();
  },
};
</script>
