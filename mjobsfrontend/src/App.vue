<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">

    <nav>
      <RouterLink class="logoHeader" to="/">LogoHeader</RouterLink>
      <RouterLink class="logo" to="/">Logo</RouterLink>
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
a, a:visited, a:hover, a:focus, a:active, a:link {
  text-decoration: none;
  color: #2d2d2d;
}
nav {
  display: flex;
  max-height: 4.5rem;
  align-items: center;
  color: rgb(#2d2d2d);
}

nav a {
  height: 100%;
}

nav a.logoHeader {
  margin: 0;
  margin-right: 0;
  padding-left: 1.5rem;
  padding-right: 0.75rem;
  padding-top: 1.375rem;
  padding-bottom: 1.375rem;
  width: 7rem;
}

nav a.logo {
  margin-right: 1.5rem;
}

nav div {
  height: 100%;
}

nav div a {
  flex: 1;
  height: 100%;
  padding-bottom: 1.5rem;
  margin-right: 1.5rem;
}
nav div a:hover {
  border-bottom: 0.125rem solid blue;
  
}
nav div a.router-link-active {
  border-bottom: 0.125rem solid blue;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
