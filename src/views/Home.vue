<template>
  <ContentWrapper :products="products" />
</template>

<script>
import productService from "../api/api";
import stoke from "../utils/stoke";
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
    try {
      this.products = await productService.getCardsData();
    } catch (err) {
      console.error(err);
    }
    this.products.forEach((card) => {
      stoke.setDiscount(card);
      stoke.setFinalPrice(card);
    });
  },
};
</script>
