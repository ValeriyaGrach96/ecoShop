<template>
  <ContentWrapper :products="products" />
</template>

<script>
import productService from "../api/api";
import stoke from "../utils/stoke";
import ContentWrapper from "../components/ContentWrapper.vue";

export default {
  name: "Electronics",
  components: {
    ContentWrapper,
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
