const MIN_DISCOUNT = 10;
const MAX_DISCOUNT = 70;

const stoke = {
  setDiscount(card) {
    const isDiscount = Math.random() > 0.5;
    if (isDiscount) {
      const amountOfDiscount =
        MIN_DISCOUNT + Math.random() * (MAX_DISCOUNT - MIN_DISCOUNT);
      card.discount = Math.round(amountOfDiscount);
    }
  },
  setFinalPrice(card) {
    let price = card.price;
    if (card.discount) {
      price = card.price - (card.price * card.discount) / 100;
    }
    const roundingPrice = Math.floor(price * 100) / 100;
    card.finalPrice = roundingPrice;
  },
};

export default stoke;
