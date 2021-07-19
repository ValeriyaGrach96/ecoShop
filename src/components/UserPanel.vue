<template>
  <article class="userPanel">
    <UsersNavigetion />
  </article>
</template>

<script>
import UsersNavigetion from "./UsersNavigetion.vue";
export default {
  name: "UserPanel",
  components: { UsersNavigetion },
};
</script>

<style lang="less">
@white: #ffffff;
.userPanel {
  position: fixed;
  z-index: 2;
  top: calc(100% - 64px);
  left: 0px;

  height: 65px;
  width: 100%;
  box-shadow: 0px 8px 10px rgba(65, 65, 56, 0.14);

  background-color: @white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

}
</style>
