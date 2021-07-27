const productService = {
  getCardsData: async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
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
    return response.json();
  },
  async getOnlyProduct(cardId) {
    const response = await fetch(`https://fakestoreapi.com/products/${cardId}`);
    return response.json();
  },
  async setLogIn(username, password) {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    return response.json();
  },
  async getUserData(login, password) {
    const response = await fetch("https://fakestoreapi.com/users");
    const json = await response.json();
    return json.find(
      (user) => user.username === login && user.password === password
    );
  },
};

export default productService;
