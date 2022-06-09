<template>
  <div class="country__container">
    <div class="img-flag">
      <img :src="flags.svg" :alt="name + ' flag'" />
    </div>
    <div class="country__info">
      <div>
        <h1 class="country-name">{{ name }}</h1>
      </div>
      <div class="country__details">
        <div class="country__details-up">
          <p><b>Native Name:</b> {{ nativeName }}</p>
          <p><b>Population:</b> {{ population }}</p>
          <p><b>Sub Region:</b> {{ subregion }}</p>
          <p><b>Capital:</b> {{ capital }}</p>
        </div>
        <div class="country__details-lower">
          <p><b>Top Level Domain:</b> {{ tld }}</p>
          <p><b>Currencies:</b> {{ currencies }}</p>
          <p><b>Languages:</b> {{ languages }}</p>
        </div>
        <div class="country__details-borders">
          <h4>Border Countries:</h4>
          <p v-if="borders.length === 0">No border Countries</p>
          <base-button
            v-else
            :class="{ 'dark-mode-elements': this.isDark }"
            class="borders-btn"
            v-for="(border, index) in borders"
            :key="index"
            :to="`${border.split(' ').join('-')}`"
            >{{ border }}</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "name",
    "flags",
    "nativeName",
    "population",
    "subregion",
    "capital",
    "tld",
    "currencies",
    "languages",
    "borders",
    "to",
  ],
  components: {},
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      console.log(this.borders);
    },
  },
  computed: {
    isDark() {
      return this.$store.getters.isDarkSwitcher;
    },
  },
  created() {
    //this.loadNation();
    this.loadNations();
  },
  methods: {
    loadNations() {
      this.$store.dispatch("loadNations");
    },
  },
};
</script>
<style scoped>
.country-name {
  margin: 2rem 0;
  font-size: 1.4rem;
}
.country__details-up,
.country__details-lower {
  margin-bottom: 2.5rem;
}
.country__details-up p,
.country__details-lower p {
  margin-bottom: 1.2rem;
}
.borders-btn {
  text-align: center;
  min-width: 7rem;
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
.img-flag {
  width: 100%;
  height: 20rem;
}
img {
  width: 100%;
  height: 80%;
}
h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
@media screen and (min-width: 500px) {
  .img-flag {
    height: 25rem;
  }
  img {
    height: 100%;
  }
}
@media screen and (min-width: 768px) {
  .country__container {
    display: flex;
    gap: 5rem;
  }
  .country__info {
    width: 50%;
  }
  .country__details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .country__details-borders {
    grid-column-start: span 2;
  }
  .img-flag {
    display: flex;
    align-items: center;
    width: 50%;
  }
  img {
    width: 100%;
    height: 50%;
  }
}
@media screen and (min-width: 900px) {
  .img-flag {
    height: 70%;
  }
  img {
    max-width: 45rem;
    max-height: 20rem;
  }
}
@media screen and (min-width: 1024px) {
  .img-flag {
    width: 50%;
  }
}
@media screen and (min-width: 1250px) {
  .img-flag {
    width: 50%;
  }
  img {
    max-width: 50rem;
    max-height: 27rem;
  }
}
@media screen and (min-width: 1950px) {
  .country__container {
    justify-content: center;
  }
}
</style>
