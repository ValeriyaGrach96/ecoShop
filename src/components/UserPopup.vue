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
  background-color: @white;
  width: 70%;
  border-radius: 8px;
  box-shadow: 0px 8px 10px 0 rgba(65, 65, 65, 40%);
  transform: translate(20%, -200%);
  transition: transform 0.5s linear;
  &.visible {
    transform: translate(20%, -5px);
  }
}
</style>
