<template>
  <li class="nation-card">
    <router-link :to="nationDetailsLink"
      ><img :src="flags.png" :alt="name + ' flag'"
    /></router-link>
    <div
      class="country-details"
      :class="{ 'dark-mode-elements': this.$store.getters.isDarkSwitcher }"
    >
      <h3 class="nation-card__title">
        <router-link :to="nationDetailsLink">{{ name }}</router-link>
      </h3>
      <p>Population: {{ population }}</p>
      <p>Region: {{ region }}</p>
      <p>Capital: {{ capital }}</p>
    </div>
  </li>
</template>
<script>
export default {
  //the to props is used to indicate where to redirect
  props: ["flags", "name", "population", "region", "capital", "to"],
  data() {
    return {};
  },
  computed: {
    nationDetailsLink() {
      return this.$route.path + "/" + this.name.split(" ").join("-");
    },
  },
};
</script>
<style scoped>
li {
  width: 19rem;
  height: 400px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gainsboro;
}
li img {
  width: 100%;
  height: 52%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 1;
}
.country-details {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 1.5rem 3rem 1.5rem;
  height: 48%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  top: -0.3rem;
  z-index: 0;
}
.country-details h3 {
  margin-bottom: 1rem;
  cursor: pointer;
}
@media screen and (min-width: 1200px) {
  li {
    width: 15rem;
    height: 360px;
  }
  li img {
    width: 100%;
    height: 150px;
  }
  .country-details {
    height: 58%;
  }
}
</style>
