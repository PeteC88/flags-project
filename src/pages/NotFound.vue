<template>
  <div class="not-found" :class="{ 'dark-mode-elements': this.isDark }">
    <h1>404</h1>
    <p>
      Sorry, page not found. You can go back to the homepage by clicking
      <router-link to="/"><span>here</span></router-link>
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    isDark() {
      return this.$store.getters.isDarkSwitcher;
    },
  },
};
</script>
<style scoped>
.not-found {
  /*  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center; */
  width: 80%;
  height: 50%px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6rem;
  text-align: center;
  padding: 0.9rem 1rem 0.9rem 1rem;
  font-size: 1.5rem;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 5px gainsboro;
  color: rgba(245, 55, 55, 0.995);
}
h1 {
  text-align: center;
  font-size: 10rem;
}
span {
  font-weight: bolder;
}
</style>
