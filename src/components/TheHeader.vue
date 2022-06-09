<template>
  <nav>
    <ul class="navigation" :class="{ 'dark-mode-elements': this.isDark }">
      <li>
        <h3>
          <router-link to="/frontend-mentor-flags-project/"
            >Where in the world?</router-link
          >
        </h3>
      </li>
      <li class="dark-mode-switcher" @click="darkModeSwitch">
        <span v-if="isDark"><font-awesome-icon icon="moon" /> Light mode</span>
        <span v-else><i class="fa-regular fa-moon"></i> Dark mode</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    isDark() {
      console.log(this.$store.getters.isDarkSwitcher);
      return this.$store.getters.isDarkSwitcher;
    },
  },
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
</style>
