<template>
  <div class="jewelery">
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
  name: "Jewelery",
  components: {
    CardOfProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await productService.getOnlyJewelery();
  },
};
</script>
