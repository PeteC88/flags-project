<template>
  <base-spinner v-if="this.isLoading"></base-spinner>
  <div v-else :class="{ 'body-dark-mode': this.isDark }">
    <!-- No need to use keyup event as we use a computed property in the search -->
    <section class="search" :class="{ 'body-dark-mode': this.isDark }">
      <div class="search-bar" :class="{ 'dark-mode-elements': this.isDark }">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          class="search-input"
          :class="{ 'dark-mode-elements': this.isDark }"
          type="search"
          name="search"
          placeholder="Search for a Country..."
          v-model="searchedNations"
        />
      </div>
      <select-options
        @select-region="filterRegion"
        :isDark="this.isDark"
      ></select-options>
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
        :class="{ 'body-dark-mode': this.isDark }"
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
    };
  },
  //use the computed property to access the getters from the store
  computed: {
    isDark() {
      return this.$store.getters.isDarkSwitcher;
    },
    filteredNations() {
      const nations = this.$store.getters.nations;

      return nations.filter((nation) => {
        const searchedToLoweCase =
          this.searchedNations.toLowerCase() !== "" &&
          nation.name.common
            .toLowerCase()
            .startsWith(this.searchedNations.toLowerCase());

        if (this.selectedRegion === "all") {
          if (searchedToLoweCase) {
            return true;
          } else if (!this.searchedNations) {
            return nations;
          }
        }
        if (
          nation.region === "Americas" &&
          this.selectedRegion === "Americas"
        ) {
          if (searchedToLoweCase) {
            return true;
          } else if (!this.searchedNations) {
            return nations;
          }
        }
        if (nation.region === "Africa" && this.selectedRegion === "Africa") {
          if (searchedToLoweCase) {
            return true;
          } else if (!this.searchedNations) {
            return nations;
          }
        }
        if (nation.region === "Europe" && this.selectedRegion === "Europe") {
          if (searchedToLoweCase) {
            return true;
          } else if (!this.searchedNations) {
            return nations;
          }
        }
        if (nation.region === "Oceania" && this.selectedRegion === "Oceania") {
          if (searchedToLoweCase) {
            return true;
          } else if (!this.searchedNations) {
            return nations;
          }
        }
        if (nation.region === "Asia" && this.selectedRegion === "Asia") {
          if (searchedToLoweCase) {
            return true;
          } else if (!this.searchedNations) {
            return nations;
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
  },
};
</script>
<style scoped>
.search {
  position: fixed;
  padding: 3rem 0;
  top: 1.5rem;
  z-index: 90;
  width: 100%;
  height: 11rem;
  margin-top: 1.5rem;
  background-color: hsl(0, 0%, 98%);
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
  margin-top: 18rem;
}

.country-list__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 300px);
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
  top: 6rem;
  text-align: center;
  padding: 0.9rem 1rem 0.9rem 3.5rem;
  font-size: 1.5rem;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 5px gainsboro;
  color: rgba(245, 55, 55, 0.995);
}

@media screen and (min-width: 600px) {
  /* .country-list__grid {
    grid-template-columns: repeat(2, 1fr);
  } */
  .no-country-found {
    width: 80%;
    height: 300px;
    top: 8rem;
    text-align: center;
    padding: 0.9rem 1rem 0.9rem 3.5rem;
    font-size: 1.5rem;
    border-radius: 20px;
    background-color: white;
    box-shadow: 1px 1px 5px gainsboro;
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
    margin-top: 11rem;
  }
}
@media screen and (min-width: 1200px) {
  .country-list__grid {
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 5rem;
    height: 55%;
  }
  li img {
    height: 150px;
  }
}
</style>
