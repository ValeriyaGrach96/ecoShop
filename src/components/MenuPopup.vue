<template>
  <div class="menuPopup">
    <article>
      <ButtonClose @onClose="$emit('onClose')" />
      <Navigation @onClose="$emit('onClose')" />
    </article>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import ButtonClose from "./ButtonClose.vue";

export default {
  name: "MenuPopup",
  components: {
    Navigation,
    ButtonClose,
  },
};
</script>

<style lang="less">
@white: #ffffff;
.menuPopup {
  z-index: 1;
  .closeButton {
    top: 0;
    left: 47%;
  }
  ul {
    flex-direction: column;
    li + li {
      margin-top: 25px;
    }
  }
  .nav {
    text-align: center;
    ul {
      margin-top: 100px;
    }
  }
}
</style>
