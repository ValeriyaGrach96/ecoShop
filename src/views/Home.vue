<template>
  <ContentWrapper :products="products" />
</template>

<script>
import productService from "../api/api";
import stoke from "../api/stoke";
import ContentWrapper from "../components/ContentWrapper.vue";

export default {
  name: "Home",
  components: {
    ContentWrapper,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await productService.getCardsData();
    this.products.forEach((card) => {
      stoke.setDiscount(card);
      stoke.setFinalPrice(card);
    });
  },
};
</script>
