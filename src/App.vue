<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
//import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  //To get the state var "isDark" and use it in a watcher I have imported {mapState} from vuex and I have called the var isDark
  computed: {
    isDark() {
      return this.$store.getters.isDarkSwitcher;
    },
  },
  watch: {
    isDark() {
      if (this.isDark === true) {
        document.body.classList.add("body-dark-mode");
      } else {
        document.body.classList.remove("body-dark-mode");
      }
    },
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
