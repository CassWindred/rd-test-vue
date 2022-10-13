<script lang="ts">
import SearchNavbar from "./SearchNavbar.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    const store = useStore();
    const menuItems = computed<[string, string][]>(() => store.state.menuItems);
    return {
      menuItems,
    };
  },
  components: {
    SearchNavbar,
  },
};
</script>

<template>
  <div>
    <SearchNavbar />
    <div class="wrapper">
      <div class="title">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        <div>
          <div>
            <h1 class="text-2xl leading-none align-top">Good Things</h1>
          </div>
          <div>
            <h3>Foundation</h3>
          </div>
        </div>
      </div>
      <nav>
        <RouterLink v-for="menuItem in menuItems" :key="menuItem[1]" :to="menuItem[1]">{{
          menuItem[0]
        }}</RouterLink>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">What we do</RouterLink>
        <RouterLink to="/thedigitaldivide">The digital divide</RouterLink>
        <RouterLink to="/network">Our network</RouterLink>
        <RouterLink to="/insights">Insights</RouterLink> -->
      </nav>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  line-height: 0.8;
}

nav {
  font-size: 12px;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: var(--vt-c-black);
  font-weight: bold;
}

nav a:first-of-type {
  border: 0;
}

.logo {
  margin: 0 0 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 1rem 1rem 2rem;
}

nav {
  text-align: right;
  font-size: 1rem;

  padding: 0rem 0;
  margin-left: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }
}
</style>
