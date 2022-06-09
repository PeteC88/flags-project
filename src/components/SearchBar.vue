<template>
  <section class="search">
    <div class="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        class="search-input"
        type="search"
        name="search"
        placeholder="Search for a Country..."
        v-model="searchedNations"
      />
    </div>
    <select-options @select-region="filterRegion"></select-options>
  </section>
</template>
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
}
.search-input {
  border: none;
  width: 80%;
  padding: 0.9rem 1rem 0.9rem 3.5rem;
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 5px gainsboro;
}

.fa-magnifying-glass {
  position: absolute;
  left: 25px;
  color: gray;
  font-size: 1.2rem;
}
</style>
