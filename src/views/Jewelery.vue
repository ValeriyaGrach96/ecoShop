<template>
  <ContentWrapper :products="products" />
</template>

<script>
import productService from "../api/api";
import stoke from "../api/stoke";
import ContentWrapper from "../components/ContentWrapper.vue";

export default {
  name: "Jewelery",
  components: {
    ContentWrapper,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await productService.getOnlyJewelery();
    this.products.forEach((card) => {
      stoke.setDiscount(card);
      stoke.setFinalPrice(card);
    });
  },
};
</script>
