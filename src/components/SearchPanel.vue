<template>
  <div class="searchPanel">
    <input
      v-model="filterName"
      type="text"
      name="searchPanel"
      placeholder="Search title..."
    />
    <button type="button" aria-label="filters">
      <img
        src="../assets/image/filterButton.svg"
        alt="filters"
        @click="onToggleFilters"
      />
    </button>
    <article class="filterData" :class="{ visible: isVisibleFilters }">
      <div v-if="isMobile" class="selectSortWrapper">
        <label for="sortProduct">Sort product:</label>
        <select
          name="sortProduct"
          class="sortProduct"
          @change="$emit('onChangeSort', $event)"
        >
          <option>Choose sorting</option>
          <option>Sort by default</option>
          <option>Sort ascending</option>
          <option>Sort by reduction</option>
        </select>
      </div>
      <div v-else class="selectSortWrapper">
        <label>Sort product:</label>
        <button
          type="button"
          aria-label="Dropdown for sorting"
          @click="onToggleSortList"
        >
          Choose sorting
          <img src="../assets/image/icon-arrow-down.svg" />
        </button>
        <ul v-show="isOpenSortList">
          <li class="sortProduct" @click="onChooseSort($event)">
            Sort by default
          </li>
          <li class="sortProduct" @click="onChooseSort($event)">
            Sort ascending
          </li>
          <li class="sortProduct" @click="onChooseSort($event)">
            Sort by reduction
          </li>
        </ul>
      </div>
      <div class="inputPriceWrapper">
        <label for="inputRangePrice">Price range:</label>
        <div class="inputsWrapper">
          <input
            type="text"
            v-model="minPrice"
            class="inputRangePrice"
            @change="onNewPrices"
          />
          <span>-</span>
          <input
            type="text"
            v-model="maxPrice"
            class="inputRangePrice"
            @change="onNewPrices"
          />
        </div>
      </div>
      <div class="checkDescouuntWrapper">
        <label>Discount availability</label>
        <div class="inputsWrapper">
          <div class="likeCheckbox"></div>
          <div v-show="isDiscount" class="likeCheckboxIndicator"></div>
          <input
            type="checkbox"
            id="inputCheckDescount"
            class="checkbox"
            @change="onIsDiscount"
          />
          <label for="inputCheckDescount" class="inputCheckDescount"
            >There is a discount</label
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "SearchPanel",
  props: {
    maxPrice: {
      type: Number,
      default: Infinity,
    },
    minPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      filterName: "",
      isOpenSortList: false,
      isDiscount: false,
      isVisibleFilters: false,
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
  watch: {
    filterName() {
      this.$emit("onFilteredName", this.filterName.toLowerCase());
    },
  },
  mounted() {
    const filter = this.$store.state.filter;
    if (Object.keys(filter).length) {
      this.filterName = filter.filterName;
      this.isDiscount = filter.isDiscount;
    }
    this.getMaxAndMinPrices();
  },
  methods: {
    onToggleSortList() {
      this.isOpenSortList = !this.isOpenSortList;
    },
    onChooseSort(evt) {
      this.$emit("onChangeSort", evt);
      this.onToggleSortList();
    },
    onIsDiscount() {
      this.isDiscount = !this.isDiscount;
      this.$emit("onIsDiscount", this.isDiscount);
    },
    onToggleFilters() {
      this.isVisibleFilters = !this.isVisibleFilters;
      this.getMaxAndMinPrices();
    },
    onNewPrices() {
      this.$emit("setPrices", this.minPrice, this.maxPrice);
    },
    getMaxAndMinPrices() {
      let filter = Object.keys(this.$store.state.filter);
      if (this.isVisibleFilters && !filter.length) {
        this.$emit("getMaxAndMinPrices");
      }
    },
  },
};
</script>

<style lang="less">
@white: #ffffff;
@black: #141010;

.searchPanel {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 25px;
  flex-wrap: wrap;
  position: relative;
  input {
    align-items: center;
    height: 50px;
    width: 80%;
    margin-right: 10px;
    padding: 14px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    border: none;

    font-size: 16px;
    line-height: 22px;
    &:focus-visible {
      outline: none;
      border: 1px solid black;
    }
  }
  button {
    width: 50px;
    height: 50px;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .filterData {
    width: 84%;
    justify-content: space-between;
    padding-top: 30px;
    font-size: 16px;
    transform: scale(1, 0) translate(0%, -100%);
    display: flex;
    height: 0;
    transition: transform 0.3s linear;
    div {
      justify-content: center;
      flex: 1;
    }
    div + div {
      margin-left: 10%;
    }
    .selectSortWrapper,
    .inputPriceWrapper,
    .checkDescouuntWrapper {
      display: flex;
      flex-direction: column;
      position: relative;

      datalist {
        display: flex;
        justify-content: space-between;
      }
      label {
        margin-bottom: 10px;
        text-align: start;
      }
      .sortProduct,
      button {
        display: flex;
        justify-content: space-between;
        height: 45px;
        width: 100%;
        font-size: 14px;
        padding: 8px;
        border-radius: 6px;
        border-color: @white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
        background-color: @white;
        line-height: 30px;
        text-align: start;
        cursor: pointer;

        img {
          width: 15px;
          height: 15px;
        }
      }
      ul {
        position: absolute;
        top: 73px;
        width: 100%;
        z-index: 2;
      }
    }
    .inputsWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .inputRangePrice {
        margin: 0;
      }
      span {
        margin: 8px;
      }
      .inputCheckDescount {
        margin-left: 33px;
        margin-right: auto;
        margin-bottom: 0;
        .checkbox:checked + .likeCheckbox::after {
          display: block;
        }
      }
    }
    .checkbox {
      height: 25px;
      width: 25px;
      margin: 0;
      position: absolute;
      opacity: 0;
      box-shadow: none;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .likeCheckbox {
      position: absolute;
      top: 10px;
      left: 0;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background-color: @white;
      border: 2px solid @black;
    }
    .likeCheckboxIndicator {
      content: "";
      position: absolute;
      top: 15px;
      left: 5px;
      height: 15px;
      width: 15px;
      background-color: @black;
      border-radius: 50%;
      margin: 0;
    }
  }
  .filterData.visible {
    height: auto;
    transform: scale(1) translate(0%, 0%);
  }
}
@media screen and (max-width: 1024px) {
  .searchPanel {
    padding-left: 0;
    padding-right: 0;

    .filterData {
      flex-direction: column;
      div + div {
        margin-top: 5%;
        margin-left: 0;
      }
      .likeCheckbox {
        top: 0;
      }
      .likeCheckboxIndicator {
        top: 5px;
      }
    }
  }
}
</style>
