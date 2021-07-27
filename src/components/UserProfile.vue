<template>
  <article class="user">
    <h3>Hello, {{ user.username }}!</h3>
    <p>Your user id: {{ user.id }}</p>
    <ul class="userData">
      <li><span>Email:</span> {{ user.email }}</li>
      <li>
        <span>Name:</span> {{ user.name.firstname }} {{ user.name.lastname }}
      </li>
      <li>
        <span>Address:</span>
        <ul class="userAddress">
          <li><span>City:</span> {{ user.address.city }}</li>
          <li><span>Street:</span> {{ user.address.street }}</li>
          <li><span>Number:</span> {{ user.address.number }}</li>
          <li><span>Zipcode:</span> {{ user.address.zipcode }}</li>
        </ul>
      </li>
      <li><span>Phone:</span> {{ user.phone }}</li>
    </ul>
    <div class="buttonWrapper">
      <button type="button" class="logOut" @click="onLogOut">Log out</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      user: {
        name: {},
        address: {},
      },
    };
  },
  mounted() {
    let user = this.$store.state.user;
    if (Object.keys(user).length) {
      this.user = user;
    } else {
      if (localStorage) {
        user = JSON.parse(localStorage.getItem("user"));
      }
    }
    this.user = user;
  },
  methods: {
    onLogOut() {
      document.cookie = "user=";
      this.user = {};
      this.$store.dispatch("setUser", this.user);
      this.$router.push("Login");
    },
  },
};
</script>

<style lang="less">
@white: #ffffff;
@greyDark: #414138;
@black: #141010;

.user {
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: @white;
  border-radius: 50px;
  box-shadow: 0px 8px 10px rgba(65, 65, 56, 0.14);
  padding: 25px;
  font-size: 18px;

  ul {
    flex-direction: column;
    align-items: start;

    p {
      margin-bottom: 0px;
    }

    li {
      margin: 0;
      text-align: start;
      margin-top: 15px;

      span {
        font-weight: bold;
      }
    }
  }
  .userAddress {
    margin-left: 20px;
  }
}
.buttonWrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    color: @white;
    border-radius: 6px;
    padding: 11px;
    max-width: 325px;
    width: 100%;
    height: 45px;
    margin-top: 25px;
    font-weight: 600;
    font-size: 16px;
  }
}
.logOut {
  background-color: @greyDark;
}
.userChange {
  background-color: @black;
}
</style>
