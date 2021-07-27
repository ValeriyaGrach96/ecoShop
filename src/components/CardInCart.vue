<template>
  <article class="cardIncart">
    <img
      :src="card.image"
      alt="image of product"
      width="110px"
      height="110px"
    />
    <div class="dataCard">
      <h2>{{ card.title }}</h2>
      <div class="price">
        <h3>{{ card.price }}$</h3>
        <div v-if="card.discount" class="promotion">
          <p class="sale">{{ card.discount }}%</p>
        </div>
        <p class="finalPrice">Final price: {{ finalPrice }}</p>
      </div>
    </div>
    <div class="amount">
      <p>{{ card.amount }}</p>
    </div>
    <div class="buttonsWrapper">
      <button
        type="button"
        @click="onIncreaseAmount"
        aria-label="increase amount"
      >
        +
      </button>
      <button type="button" @click="onSetOutCart" aria-label="reduce amount">
        -
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "CardInCart",
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    finalPrice() {
      return Math.round(this.card.finalPrice * this.card.amount * 100) / 100;
    },
  },
  methods: {
    onIncreaseAmount() {
      this.$store.dispatch("increaseAmount", this.card);
    },
    onSetOutCart() {
      this.$store.dispatch("setOutCart", this.card);
    },
  },
};
</script>

<style lang="less">
@white: #ffffff;
@black: #141010;
@greydark: #828282;
@green: #38972e;

.cardIncart {
  display: flex;
  width: 100%;
  height: 110px;
  background-color: @white;
  border-radius: 15px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  justify-content: space-between;

  img {
    margin-right: 15px;
  }

  .dataCard {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    justify-content: space-between;
    text-align: start;
    width: 100%;

    h2 {
      margin-top: 15px;
      color: @black;
      font-size: 16px;
      line-height: 22px;
    }
    p {
      margin-top: 10px;
      margin-bottom: 0;
      color: @greydark;
      font-size: 14px;
      line-height: 20px;
      text-align: start;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    h3 {
      margin-top: 10px;
      margin-bottom: 15px;
      margin-right: 10px;
      color: @green;
      font-size: 14px;
      line-height: 13px;
    }
    .price {
      display: flex;
      justify-content: start;

      .promotion {
        margin-left: 15px;
      }
      .finalPrice {
        font-size: 16px;
        color: @black;
        font-weight: 600;
        margin-left: auto;
        margin-right: 0;
      }
    }
    .sale {
      background-color: @green;
      color: @white;
      border-radius: 4px;
      padding: 4px;
      margin-right: 10px;
      font-size: 12px;
    }
  }
  .amount {
    margin-left: 15px;
    margin-right: 15px;
    align-items: stretch;

    p {
      margin-top: auto;
      line-height: 110px;
    }
  }
  .buttonsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 15px;

    button {
      border-radius: 50%;
      background-color: @green;
      color: @white;
      font-size: 16px;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    button + button {
      margin-top: 10px;
    }
  }
}
@media screen and (max-width: 426px) {
  .cardIncart {
    position: relative;
    height: 100%;
    flex-direction: column;
    .dataCard {
      margin-left: 10px;
      max-width: 100%;
      h3,
      p {
        margin-top: 15px;
      }
    }
    .amount {
      position: absolute;
      top: 0px;
      left: 60%;
    }
    .buttonsWrapper {
      position: absolute;
      top: 25px;
      left: 75%;
    }
  }
}
</style>
