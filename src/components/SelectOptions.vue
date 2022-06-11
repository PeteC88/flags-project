<template>
  <div
    class="select-box"
    :class="{ 'dark-mode-elements': this.$store.getters.isDarkSwitcher }"
  >
    <div
      class="select__default"
      :class="{ 'dark-mode-elements': this.$store.getters.isDarkSwitcher }"
      @click="openBox"
    >
      {{ selection }}
      <div class="select__arrow">∨</div>
    </div>
    <ul
      class="select__options"
      v-show="open"
      :class="{ 'dark-mode-elements': this.$store.getters.isDarkSwitcher }"
    >
      <li class="select__option" @click="selectRegions('Africa')">Africa</li>
      <li class="select__option" @click="selectRegions('Americas')">
        Americas
      </li>
      <li class="select__option" @click="selectRegions('Asia')">Asia</li>
      <li class="select__option" @click="selectRegions('Europe')">Europe</li>
      <li class="select__option" @click="selectRegions('Oceania')">Oceania</li>
    </ul>
  </div>
</template>
<script>
export default {
  emits: ["select-region"],
  data() {
    return {
      selection: "Filter by Region",
      input: "all",
      open: false,
    };
  },
  methods: {
    openBox() {
      this.open = !this.open;
    },
    selectRegions(region) {
      this.selection = region;
      this.open = !this.open;
      this.$emit("select-region", region);
    },
  },
};
</script>
<style scoped>
.select-box {
  position: relative;
  width: 50%;
  margin-left: 1.5rem;
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: white;
}
/* .select__arrow {
  cursor: pointer;
} */
.select__default {
  display: flex;
  position: relative;
  justify-content: space-between;
  border: none;
  width: 80%;
  /* padding: 0.9rem 1rem 0.9rem 1rem; */
}
.select__default,
.select__options {
  width: 100%;
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 3px gainsboro;
  cursor: pointer;
  padding: 0.9rem 1rem 0.9rem 1rem;
}
.select__option {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin-top: 0.5rem;
}
.select__option:hover {
  background-clip: padding-box;
  background-color: rgb(179, 213, 242);
}

@media screen and (min-width: 900px) {
  .select-box {
    position: relative;
    width: 30%;
    margin-right: 3.5rem;
    padding-right: 0;
    padding-left: 0;
  }
  .select__options {
    position: absolute;
    top: 3.4rem;
    width: 100%;
    padding: 0.9rem 1rem 0.9rem 1rem;
    margin-top: 0;
  }
}
@media screen and (min-width: 1200px) {
  .select-box {
    width: 20%;
  }
}
</style>
