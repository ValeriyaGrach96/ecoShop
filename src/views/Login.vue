<template>
  <article class="logIn">
    <h3>Log <span class="green">In</span></h3>
    <p>Please, log in to buy</p>
    <form class="inputsUser" @submit.prevent="onLogIn">
      <div>
        <img src="../assets/image/icon-login-user.svg" alt="icon user" />
        <input
          type="text"
          placeholder="Username"
          name="login"
          v-model="login"
        />
      </div>
      <div>
        <img src="../assets/image/icon-login-password.svg" alt="icon log" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          v-model="password"
        />
      </div>
      <p v-show="error" class="error">{{ error }}</p>
      <button type="submit" class="logInButton">Log In</button>
    </form>
  </article>
</template>

<script>
import productService from "../api/api";

export default {
  name: "LogIn",
  data() {
    return {
      login: "",
      password: "",
      error: "",
    };
  },
  watch: {
    login() {
      this.clearError();
    },
    password() {
      this.clearError();
    },
  },
  methods: {
    async onLogIn() {
      try {
        const responce = await productService.setLogIn(
          this.login,
          this.password
        );
        document.cookie = `user=${responce.token}`;
        this.getUserData();
      } catch (err) {
        console.log(err);
        this.error = err.msg;
      }
      this.login = "";
      this.password = "";
    },
    clearError() {
      if (this.error) {
        this.error = "";
      }
    },
    async getUserData() {
      const userData = await productService.getUserData(
        this.login,
        this.password
      );
      this.$store.dispatch("setUser", userData);
      this.$router.push("User");
    },
  },
};
</script>

<style lang="less">
@green: #38972e;
@black: #141010;
@white: #ffffff;
@greylight: #828282;

.logIn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: @white;
  margin-bottom: 75px;
  border-radius: 50px;
  box-shadow: 0px 8px 10px rgba(65, 65, 56, 0.14);
  padding: 25px;
  font-size: 18px;
  text-align: start;

  h3 {
    margin-top: 70px;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    color: @greylight;
    font-size: 24px;
  }
  button {
    padding: 11px;
    color: @white;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
  }
  .logInButton {
    margin: 40px 0px;
    background-color: @black;
    max-width: 400px;
    width: 100%;
    height: 45px;
    font-size: 16px;
  }
}
.green {
  color: @green;
}
.inputsUser {
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  div {
    box-shadow: 0px 5px 10px rgba(65, 65, 56, 0.14);
    border-radius: 10px;
    overflow: hidden;
    height: 60px;
    width: 100%;
    max-width: 400px;
    margin: 14px 0 0 0;
    display: flex;
    justify-content: start;
    img {
      margin: 18px 20px;
    }
    input {
      width: 100%;
      max-width: 376px;
      height: 100%;
      border: none;
      padding: 20px;
      font-size: 16px;
      color: @greylight;
    }
  }
}
</style>
