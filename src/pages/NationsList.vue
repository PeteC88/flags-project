<template>
  <base-spinner v-if="this.isLoading"></base-spinner>
  <div v-else>
    <!-- No need to use keyup event as we use a computed property in the search -->
    <section
      class="search"
      :class="{
        'search--hidden': !showSearch,
        'body-dark-mode': this.$store.getters.isDarkSwitcher,
      }"
    >
      <div
        class="search-bar"
        :class="{ 'dark-mode-elements': this.$store.getters.isDarkSwitcher }"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          class="search-input"
          :class="{ 'dark-mode-elements': this.$store.getters.isDarkSwitcher }"
          type="search"
          name="search"
          placeholder="Search for a Country..."
          v-model="searchedNations"
        />
      </div>
      <select-options @select-region="filterRegion"></select-options>
    </section>
    <section class="country-list">
      <ul class="country-list__grid" v-if="filteredNations.length > 0">
        <nation-card
          v-for="nation in filteredNations"
          :key="nation.name.common"
          :flags="nation.flags"
          :name="nation.name.common"
          :population="nation.population"
          :region="nation.region"
          :capital="nation.capital[0]"
        ></nation-card>
      </ul>
      <h3
        v-else-if="searchedNations !== ''"
        class="no-country-found"
        :class="{ 'body-dark-mode': this.$store.getters.isDarkSwitcher }"
      >
        Sorry, no Country have been found.<br /><br />Try to change the region
        or the spelling in search bar.<br /><br />If you want to show all the
        Countries, please refresh the page.
      </h3>
    </section>
  </div>
</template>
<script>
import SelectOptions from "../components/SelectOptions.vue";
import NationCard from "../components/NationCard.vue";
export default {
  components: {
    NationCard,
    SelectOptions,
  },
  data() {
    return {
      selectedRegion: "all",
      searchedNations: "",
      noNationsFound: false,
      isLoading: false,
      showSearch: true,
    };
  },
  //use the computed property to access the getters from the store
  computed: {
    filteredNations() {
      const nations = this.$store.getters.nations;
      return nations.filter((nation) => {
        const searchedToLoweCase =
          this.searchedNations.toLowerCase() !== "" &&
          nation.name.common
            .toLowerCase()
            .startsWith(this.searchedNations.toLowerCase());

        if (
          this.selectedRegion === "all" ||
          nation.region.toLowerCase() === this.selectedRegion.toLowerCase()
        ) {
          if (searchedToLoweCase || !this.searchedNations) {
            return true;
          }
        }
        return false;
      });
    },
    areTheNationsFound() {
      return this.$store.getters.nationsFound;
    },
  },
  created() {
    //loadNations is triggered when the component is created
    this.loadNations();
  },
  mounted() {
    this.searchBarScroll();
  },
  methods: {
    async loadNations() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadNations");
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }
      this.isLoading = false;
    },
    filterRegion(region) {
      this.selectedRegion = region;
    },
    searchBarScroll() {
      //get the position in the page
      let prev = window.pageYOffset;
      window.addEventListener("scroll", () => {
        //recalculate it when scroll.
        let curr = window.pageYOffset;
        if (prev > curr) {
          this.showSearch = true;
        } else {
          this.showSearch = false;
        }
        prev = curr;
      });
    },
  },
};
</script>
<style scoped>
.search {
  position: fixed;
  padding: 3rem 0;
  top: 1.5rem;
  z-index: 10;
  width: 100%;
  height: 11rem;
  margin-top: 1.5rem;
  transition: transform 0.5s;
  transform: translate3d(0, 0, 0);
  background-color: hsl(0, 0%, 98%);
}
.search--hidden {
  box-shadow: none;
  transition: transform 0.5s;
  transform: translate3d(0, -110%, 0);
}
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  color: gray;
  width: 80%;
}
.search-input {
  border: none;
  width: 100%;
  padding: 0.9rem 1rem 0.9rem 3.5rem;
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 5px gainsboro;
  color: black;
}
.fa-magnifying-glass {
  position: absolute;
  left: 25px;
  font-size: 1.2rem;
}
.country-list {
  width: 100%;
  /*  display: flex;
  justify-content: center; */
  padding-top: 14rem;
}
.country-list__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 19rem);
  justify-content: center;
  gap: 5rem;
  padding: 1.5rem 1.5rem 0.9rem 1.5rem;
}
.no-country-found {
  width: 80%;
  height: 350px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2rem;
  text-align: center;
  padding: 0.9rem 1rem 0.9rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 5px gainsboro;
  color: rgba(245, 55, 55, 0.995);
}
@media screen and (min-width: 600px) {
  .no-country-found {
    height: 300px;
    top: 8rem;
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 900px) {
  .search {
    display: flex;
    width: 100%;
    top: 3rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    height: 9rem;
    margin-top: 0;
  }
  .search-bar {
    width: 35%;
    margin-bottom: 0;
  }
  .search-input {
    width: 100%;
  }
  .country-list {
    padding: 0 3rem;
    padding-top: 11rem;
  }
}
@media screen and (min-width: 1200px) {
  .country-list__grid {
    grid-template-columns: repeat(auto-fill, 255px);
    gap: 2rem;
    height: 55%;
  }
  li img {
    height: 150px;
  }
}
</style>