<template>
  <nav>
    <ul
      class="navigation"
      :class="{ 'dark-mode-elements': this.$store.getters.isDarkSwitcher }"
    >
      <li>
        <h3>
          <router-link to="/">Where in the world?</router-link>
        </h3>
      </li>
      <li class="dark-mode-switcher" @click="darkModeSwitch">
        <span v-if="this.$store.getters.isDarkSwitcher"
          ><font-awesome-icon icon="moon" /> Light mode</span
        >
        <span v-else><i class="fa-regular fa-moon"></i> Dark mode</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  methods: {
    darkModeSwitch() {
      this.$store.dispatch("isDarkSwitcherAction");
    },
  },
};
</script>
<style scoped>
nav {
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 100;
  height: 4rem;
  box-shadow: 0 2px 2px rgba(181, 180, 180, 0.495);
  top: 0;
  font-size: 0.8rem;
}
nav ul {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
}
nav ul li {
  display: flex;
  padding: 0 1.5rem;
}
.fa-moon {
  transform: rotate(-30deg);
  margin-right: 0.5rem;
}
.dark-mode-switcher {
  cursor: pointer;
}
@media screen and (min-width: 600px) {
  nav {
    font-size: 1rem;
  }
}
</style>
