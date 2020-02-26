<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
button,
input[type="submit"] {
  cursor: pointer;
  padding: 3px 8px;
  font-size: 18px;
}
input {
  padding: 5px;
  font-size: 18px;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
</style>
