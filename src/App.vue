<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img src="./assets/image/logo.svg" alt="logo" width="50px" height="50px"> 
      </router-link>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <router-link to="/">
        <img src="./assets/image/buy.svg" alt="logo">
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
@font-face {
  font-family: Open Sans;
  src: url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);
}
* {
  box-sizing: border-box;
}
body {
  background-color: #f5f6f7;
  margin: 0;
  padding: 25px;
}
#app {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141010;
}

#nav {
  padding: 25px;
  height: 100px;
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
