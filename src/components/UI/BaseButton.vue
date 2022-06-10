<template>
  <router-link
    :to="to"
    class="button"
    :class="{ 'dark-mode-elements': this.isDark }"
  >
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    //this props will indicate the redirection. The default option will redirect to the home page.
    to: {
      type: String,
      required: false,
      default: "/",
    },
    isDark: {
      type: Boolean,
      reauired: false,
    },
  },
};
</script>
<style scoped>
.button {
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  box-shadow: 5px 5px 20px darkgray;
  font: inherit;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}
</style>
