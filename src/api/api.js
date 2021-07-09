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
  getOnlyElectronics: async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const result = await response.json();
    return result;
  },
  getOnlyJewelery: async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const result = await response.json();
    return result;
  },
  getOnlyMens: async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    const result = await response.json();
    return result;
  },
  getOnlyWomens: async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    const result = await response.json();
    return result;
  },
};

export default productService;
