<template>
  <article class="cardOfProduct">
    <section class="service">
      <button class="likeIt">
        <img src="../assets/image/icon-likeIt.svg" alt="like it" />
      </button>
    </section>
    <header>
      <img
        :src="card.image"
        alt="image of product"
        width="110px"
        height="110px"
      />
      <h2>{{ card.title }}</h2>
    </header>
    <footer>
      <div class="buttons">
        <button>+</button>
        <button>-</button>
      </div>
      <h3>{{ card.price }}$</h3>
    </footer>
  </article>
</template>

<script>
export default {
  name: "CardOfProduct",
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less">
@white: #ffffff;
@green: #38972e;

.cardOfProduct {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  background-color: @white;
  box-shadow: 0px 8px 10px rgba(65, 65, 56, 0.14);
  border-radius: 6px;
  .service {
    display: flex;
    justify-content: flex-end;
  }
  h2 {
    font-size: 17px;
    line-height: 22px;
    margin-top: 20px;
    font-weight: 600;
  }
  p {
    font-size: 11px;
    line-height: 13px;
    margin-top: 10px;
  }
  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;

    button {
      color: @white;
      background-color: @green;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      font-size: 12px;
    }
    button + button {
      margin-left: 15px;
    }
    h3 {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: @green;
    }
  }
}
</style>
