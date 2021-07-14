<template>
  <div class="indicator"></div>
</template>

<script>
export default {
  name: "Indicator",
};
</script>

<style lang="less">
@yellow: #f2c94c;

.indicator {
  width: 10px;
  height: 10px;
  position: absolute;
  background-color: @yellow;
  border-radius: 50%;
}
</style>
