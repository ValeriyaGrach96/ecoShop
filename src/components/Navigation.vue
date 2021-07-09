<template>
  <nav class="nav">
    <ul @click="$emit('onClose')">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/electronics">Electronics</router-link>
      </li>
      <li>
        <router-link to="/jewelery">Jewelery</router-link>
      </li>
      <li>
        <router-link to="/mens">Men's Clothing</router-link>
      </li>
      <li>
        <router-link to="/womens">Women's Clothing</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="less">
.nav {
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  ul {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    li {
      flex: 1;
      a {
        white-space: nowrap;
      }
    }
  }
}
</style>
