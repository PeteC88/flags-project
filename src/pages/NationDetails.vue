<template>
  <div class="country">
    <base-button class="back-button">
      <span class="back-arrow">&#x2190;</span> Back</base-button
    >
    <base-spinner v-if="this.isLoading"></base-spinner>
    <nation-card-details
      v-else
      :flags="filteredNation.flags"
      :name="filteredNation.name.common"
      :nativeName="countryNativeName"
      :population="filteredNation.population"
      :subregion="countrySubRegion"
      :capital="filteredNation.capital[0]"
      :tld="countryTopLevelDomain"
      :currencies="countryCurrencies"
      :languages="countryLanguages"
      :borders="filteredCountryBorderNames"
    ></nation-card-details>
  </div>
</template>
<script>
import NationCardDetails from "../components/NationCardDetails.vue";
export default {
  components: {
    NationCardDetails,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      countryBorderNames: [],
    };
  },
  computed: {
    filteredNation() {
      //return this.$store.getters.nations;
      return this.$store.getters.nations.find((country) => {
        const nameSlug = country.name.common.split(" ").join("-");
        return nameSlug === this.name;
      });
    },
    countryNativeName() {
      //to extract the last entry in native names
      const lastEntryNativeName = Object.values(
        this.filteredNation.name.nativeName
      ).pop().common;
      return lastEntryNativeName;
    },
    countrySubRegion() {
      return this.filteredNation.subregion
        ? this.filteredNation.subregion
        : "none";
    },
    countryTopLevelDomain() {
      return !this.filteredNation.tld
        ? "none"
        : this.filteredNation.tld.join(", ");
    },
    countryCurrencies() {
      const currenciesList = [];

      if (this.filteredNation.currencies) {
        for (const currenciesName of Object.values(
          this.filteredNation.currencies
        )) {
          currenciesList.push(currenciesName.name);
        }
      }

      return currenciesList.length > 0
        ? currenciesList.join(", ")
        : "information not available";
    },
    countryLanguages() {
      const countryLanguages = [];

      for (const language of Object.values(this.filteredNation.languages)) {
        countryLanguages.push(language);
      }
      return countryLanguages.join(", ");
    },
    filteredCountryBorderNames() {
      this.getBordersNames();
      return this.countryBorderNames === false
        ? "none"
        : this.countryBorderNames;
    },
  },

  created() {
    this.loadNations();
  },
  methods: {
    //load the Countries from the API
    async loadNations() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadNations");
        //this.getBordersNames();
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }
      this.isLoading = false;
    },
    //Extract the actual name of the Countries that will be used in borders buttons by finding the cca3 value (this value is the same of the value of the borders in the JSON) and extract the common name too.
    getBordersNames() {
      const nations = this.$store.getters.nations;

      if (!this.filteredNation.borders) {
        this.countryBorderNames = [];
      } else {
        for (let i = 0; i < nations.length; i++) {
          this.countryBorderNames.push({
            nationBorderName: nations[i].cca3,
            nationName: nations[i].name.common,
          });
        }
      }

      const renamedBorders = [];

      const filterBorders = this.countryBorderNames.filter((border) =>
        this.filteredNation.borders.includes(border.nationBorderName)
      );

      for (const border of filterBorders) {
        renamedBorders.push(border.nationName);
      }
      if (renamedBorders !== []) {
        this.countryBorderNames = renamedBorders.sort();
      }
    },
  },
};
</script>
<style scoped>
.country {
  position: relative;
  padding: 7rem 1.5rem 0 1.5rem;
  height: 100vh;
}
.button.back-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  letter-spacing: 5px;
  margin-bottom: 4rem;
}
.back-arrow {
  font-size: 1.5rem;
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 900px) {
}
@media screen and (min-width: 1200px) {
}
</style>
