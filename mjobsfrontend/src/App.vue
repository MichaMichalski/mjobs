<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- Logo -->
          <div>
            <a href="#" class="flex items-center py-5 px-2 text-gray-700">
              <img src="https://de.indeed.com/static/images/logo.svg" alt="Indeed Logo" class="h-8 w-8 mr-2">
              <span class="font-bold">Indeed</span>
            </a>
          </div>
          <!-- Primary Nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Stellenanzeigen durchsuchen</a>
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Unternehmensbewertungen</a>
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Gehälter finden</a>
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Anmelden</a>
          </div>
        </div>
        <!-- Secondary Nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Lebenslauf anlegen</a>
        </div>
        <!-- Mobile button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="mobile-menu-button">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div :class="{'hidden': !isMenuOpen}" class="mobile-menu md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Stellenanzeigen durchsuchen</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Unternehmensbewertungen</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Gehälter finden</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Anmelden</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Lebenslauf anlegen</a>
    </div>
  </nav>
  </div>
  <RouterView />
</template>

<script lang="ts">
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
/* a, a:visited, a:hover, a:focus, a:active, a:link {
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
nav div a:hover:not(.logo, .logoHeader) {
  border-bottom: 0.125rem solid blue;
}
nav div a.router-link-active {
  border-bottom: 0.125rem solid blue;
}

.logo {
  display: flex;
  align-items: center;
  width: 7rem;
  border-bottom: 0.125rem solid transparent;
}

.logo img {
  width: 100%;
  height: 100%;
  margin: auto;
}

.logoHeader {
  display: flex;
  align-items: center;
  width: 7rem;
  height: 100%;
  border-bottom: 0.125rem solid transparent;
}

.logoHeader img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  overflow: hidden;
  margin: auto;
} */
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
