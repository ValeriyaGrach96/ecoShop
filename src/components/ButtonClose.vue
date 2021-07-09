<template>
  <button type="button" class="closeButton" @click.stop="$emit('onClose')">
    <img
      src="../assets/image/closeButton.svg"
      alt="Close window"
      class="closeImg"
    />
  </button>
</template>

<script>
export default {
  name: "ButtonClose",
};
</script>

<style lang="less">
.closeButton {
  position: relative;
  cursor: pointer;
  .closeImg {
    margin: 0;
  }
}
</style>
