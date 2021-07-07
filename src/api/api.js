const productService = {
  getCardsData: async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
  },
  getCategories: async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const result = await response.json();
    return result;
  },
};

export default productService;
