<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">

    <nav>
      <div class="navbar">
        <div class="navbar-left">
          <RouterLink class="logo" to="/test">
            <img src="@/assets/MJobs_chars_nobg.svg" alt="">
          </RouterLink>
          <RouterLink class="logoHeader" to="/test">
            <img src="@/assets/MJobs_logoheader_nobg.svg" alt="">
          </RouterLink>
          <div class="navbuttons">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </div>
        </div>
        <div class="navbar-right">
          <div class="navbuttons">
            <RouterLink class="signin" to="/">Sign in</RouterLink>
            <RouterLink to="/test">Employers/Post Job</RouterLink>
          </div>
        </div>
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
  display: block;
  unicode-bidi: isolate;
}

div.navbar {
  display: flex;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  min-height: 3.25rem;
  background-color: #ffffff;
  justify-content: space-between;
  border-bottom-width: 0.0625rem;
  border-bottom-color: #e4e2e0;
  border-bottom-style: solid;
}

div.navbar-left {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-width: 0;
  flex-wrap: wrap;
  max-height: 3.25rem;
  overflow: hidden;
  border-bottom: 0.125rem solid transparent;
}

div.navbar-right {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin-left: 1rem;
}

div.navbar-right a.signin {
  margin-right: 1.5rem;
  display: inline-flex;
  align-items: center;
}

div.navbuttons {
  margin: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  min-width: 0;
  border-bottom: 0.125rem solid transparent;
}
div.navbuttons a {
  margin-right: 1.5rem;
  border-bottom: 0.125rem solid transparent;
}
.navbar a {
  color: #2d2d2d;

}
nav div a:hover {
  border-bottom: 0.125rem solid blue;
  
}
nav div a.router-link-active {
  border-bottom: 0.125rem solid blue;
}

.logo {
  margin: 0;
  margin-right: 0;
  padding-left: 1.5rem;
  padding-right: 0.75rem;
  padding-top: 1.375rem;
  padding-bottom: 1.375rem;
  width: 7rem;
}

.logo img {
  width: 100%;
  height: auto;
}

.logoHeader {
  margin-right: 1.5rem;
}

.logoHeader img {
  width: 100%;
  height: auto;
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
