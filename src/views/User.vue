<template>
  <div class="userWrapper">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
  name: "User",
};
</script>
