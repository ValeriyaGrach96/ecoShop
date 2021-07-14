<template>
  <div class="productPage">
    <ButtonClose @onClose="onClose" />
    <div class="headerWrapper">
      <div class="imgWrapper">
        <img
          :src="card.image"
          alt="image of product"
          height="100%"
          width="100%"
        />
      </div>
      <header class="productHeader">
        <h3>Infortion of product</h3>
        <ul class="productInformation">
          <li>Product names: {{ card.title }}</li>
          <li>Cards id: {{ card.id }}</li>
          <li>Category: {{ card.category }}</li>
        </ul>
        <div class="price" @click.stop="onSetInCart">
          Buy for {{ card.finalPrice }}$
        </div>
      </header>
    </div>
    <main class="description">
      <h3>Description of product:</h3>
      {{ card.description }}
    </main>
  </div>
</template>

<script>
import productService from "../api/api";
import ButtonClose from "../components/ButtonClose.vue";
import stoke from "../api/stoke";

export default {
  name: "ProductPage",
  components: {
    ButtonClose,
  },
  data() {
    return {
      card: {},
    };
  },
  async created() {
    let path = this.$route.path.slice(1);
    const cardIndex = path.lastIndexOf("/");
    const cardId = path.slice([cardIndex]);
    this.card = await productService.getOnlyProduct(cardId);
    stoke.setDiscount(this.card);
    stoke.setFinalPrice(this.card);
  },
  methods: {
    onClose() {
      this.$router.back();
    },
    onSetInCart() {
      this.$store.dispatch("setInCart", this.card);
      this.onClose();
    },
  },
};
</script>

<style lang="less">
@black: #141010;
@white: #ffffff;
@green: #38972e;

.productPage {
  display: flex;
  flex-direction: column;
  background-color: @white;
  border-radius: 30px;
  box-shadow: 0px 8px 10px rgba(65, 65, 56, 0.14);
  padding: 20px;
  position: relative;
  overflow: auto;

  .headerWrapper {
    display: flex;
    .imgWrapper {
      max-height: 360px;
      max-width: 360px;
      margin-right: 30px;
      margin-bottom: 15px;
      border: 2px solid @black;
      border-radius: 30px;
      overflow: hidden;
      position: relative;
    }
  }
  .productHeader {
    width: 100%;
  }
  h3 {
    text-align: start;
    margin-bottom: 20px;
  }
  .productInformation {
    flex-direction: column;
    text-align: start;
    margin-top: 20px;

    li {
      margin: 0;
    }
    li + li {
      margin-top: 10px;
    }
  }
  .description {
    margin-top: 30px;
    margin-bottom: 0;
  }
  .price {
    background-color: @green;
    color: @white;
    height: 45px;
    width: 100%;
    border-radius: 6px;
    margin-top: 30px;
    padding: 15px 0;
  }
  .closeButton {
    top: 0;
    left: 97%;
    width: 32px;
  }
}
@media screen and (max-width: 426px) {
  .productPage {
    .headerWrapper {
      flex-direction: column;

      .imgWrapper {
        max-height: 100%;
        max-width: 100%;
        margin-left: 30px;
      }
    }
    .closeButton {
    left: 90%;
  }
  }
}
</style>
