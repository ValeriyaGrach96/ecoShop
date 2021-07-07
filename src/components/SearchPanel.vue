<template>
  <div class="searchPanel">
    <input type="text" name="searchPanel" placeholder="Search..." />
    <button type="button" aria-label="filters">
      <img src="../assets/image/filterButton.svg" alt="filters" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchPanel",
}
</script>

<style lang="less">
.searchPanel {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 25px;
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
}
@media screen and (max-width: 1024px) {
  .searchPanel {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
