<template>
  <div class="contentWrapper">
    <SearchPanel
      :maxPrice="maxPrice"
      :minPrice="minPrice"
      @onFilteredName="onFilteredName"
      @onChangeSort="onChangeSort"
      @onIsDiscount="onIsDiscount"
      @setPrices="setPrices"
      @getMaxAndMinPrices="getMaxAndMinPrices"
    />
    <ul>
      <li v-for="card of filteredProduct" :key="card.id">
        <CardOfProduct :card="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardOfProduct from "../components/CardOfProduct.vue";
import SearchPanel from "../components/SearchPanel.vue";

export default {
  name: "ContentWrapper",
  components: {
    CardOfProduct,
    SearchPanel,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filterName: "",
      isSortByAscending: "",
      isDiscount: false,
      maxPrice: Infinity,
      minPrice: 0,
    };
  },
  computed: {
    sortedProduct() {
      const copyProducts = [...this.products];
      if (this.isSortByAscending === true) {
        return copyProducts.sort((a, b) => a.price - b.price);
      }
      if (this.isSortByAscending === false) {
        copyProducts.sort((a, b) => b.price - a.price);
      }
      return copyProducts;
    },
    filteredProduct() {
      let filteredProduct = this.sortedProduct.filter(
        (card) =>
          card.title.toLowerCase().includes(this.filterName) &&
          card.price >= this.minPrice &&
          card.price <= this.maxPrice
      );
      if (this.isDiscount) {
        filteredProduct = filteredProduct.filter((card) => card.discount);
      }
      return filteredProduct;
    },
  },
  mounted() {
    const filter = this.$store.state.filter;
    if (Object.keys(filter).length) {
      this.filterName = filter.filterName;
      this.isDiscount = filter.isDiscount;
      this.isSortByAscending = filter.isSortByAscending;
      this.maxPrice = filter.maxPrice;
      this.minPrice = filter.minPrice;
    }
  },
  beforeDestroy() {
    const filter = {
      filterName: this.filterName,
      isSortByAscending: this.isSortByAscending,
      isDiscount: this.isDiscount,
      maxPrice: this.maxPrice,
      minPrice: this.minPrice,
    };
    this.$store.commit("setFilter", filter);
  },
  methods: {
    onFilteredName(filterName) {
      this.filterName = filterName;
    },
    onChangeSort(evt) {
      let eventObj = evt.target.innerText;
      if (this.$store.state.isMobile) {
        eventObj = evt.currentTarget.options.selectedIndex;
      }
      switch (eventObj) {
        case "Sort ascending":
        case 2:
          this.isSortByAscending = true;
          break;
        case "Sort by reduction":
        case 3:
          this.isSortByAscending = false;
          break;
        default:
          this.isSortByAscending = "";
          break;
      }
    },
    onIsDiscount(isDiscount) {
      this.isDiscount = isDiscount;
    },
    getMaxAndMinPrices() {
      this.maxPrice = 0;
      this.minPrice = Infinity;
      this.products.forEach((card) => {
        if (card.price > this.maxPrice) {
          this.maxPrice = card.price;
        }
        if (card.price < this.minPrice) {
          this.minPrice = card.price;
        }
      });
    },
    setPrices(minPrice, maxPrice) {
      this.minPrice = minPrice;
      this.maxPrice = maxPrice;
    },
  },
};
</script>
