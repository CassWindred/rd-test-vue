<template>
  <div class="searchbar">
    <div class="btn">Search</div>
    <div class="btn learnbtn">Learn</div>
    <div class="btn donatebtn">Donate</div>
  </div>
</template>

<style scoped>
.searchbar {
  border-bottom: 1px solid var(--color-border);
  padding: 0rem 1rem 0rem 2rem;
  display: flex;
}

.btn {
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  padding: 0rem 0.8rem 0rem 0.8rem;
  font-weight: bold;
}

.learnbtn {
  border-bottom: 3px solid var(--col-pastelgreen);
  margin-left: auto;
}

.donatebtn {
  background-color: var(--col-purple);
  color: var(--vt-c-white);
}
</style>
