<template>
  <div class="productPage">
    <p>arbgabrrharg</p>
    {{ card }}
  </div>
</template>

<script>
import productService from "../api/api";

export default {
  name: "ProductPage",
  data() {
    return {
      card: {},
    };
  },
  async created() {
    let path = this.$route.path.slice(1);
    console.log(path);
    const cardIndex = path.lastIndexOf("/");
    const cardId = path.slice([cardIndex]);
    this.card = await productService.getOnlyProduct(cardId);
    console.dir(this.card);
  },
};
</script>
