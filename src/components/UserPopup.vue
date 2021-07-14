<template>
  <div class="userPopup">
    <UsersNavigetion />
  </div>
</template>

<script>
import UsersNavigetion from "./UsersNavigetion.vue";

export default {
  name: "UserPopup",
  components: {
    UsersNavigetion,
  },
};
</script>

<style lang="less">
@white: #ffffff;

.userPopup {
  position: absolute;
  top: 20px;
  left: 20%;
  background-color: @white;
  width: 70%;
  border-radius: 8px;
  box-shadow: 0px 8px 10px rgb(65 65 56 / 14%);
}
</style>
