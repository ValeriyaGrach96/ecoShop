<template>
  <div class="menuPopup">
    <article>
      <Navigation />
    </article>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "MenuPopup",
  components: {
    Navigation,
  },
};
</script>

<style lang="less">
@white: #ffffff;
.menuPopup {
  position: absolute;
  top: -50px;
  left: -25px;
  width: 100vw;
  height: 100vh;

  background-color: @white;
}
</style>
