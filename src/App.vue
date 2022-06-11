<template>
  <div
    class="wrapper"
    :class="{ 'body-dark-mode': this.$store.getters.isDarkSwitcher }"
  >
    <the-header></the-header>
    <router-view
      :class="{ 'body-dark-mode': this.$store.getters.isDarkSwitcher }"
    ></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
//import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;600;800&display=swap");
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Kumbh Sans", sans-serif;
}
.wrapper {
  height: 100vh;
}
body {
  background-color: hsl(0, 0%, 98%);
  color: black;
}
.body-dark-mode {
  background-color: hsl(207, 26%, 17%) !important;
  color: hsl(0, 0%, 98%) !important;
}
.dark-mode-elements,
.dark-mode-elements::placeholder {
  background-color: hsl(209, 23%, 22%) !important;
  color: hsl(0, 0%, 98%) !important;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
