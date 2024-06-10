<template>
  <div class="wrapper">
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <!-- Logo -->
            <div>
            <a href="#" class="flex items-center py-5 px-2 text-gray-700">
                <img src="../assets/Mjobs.png" alt="Mjobs Logo" class="object-contain h-8 w-24 mr-2">
                <!-- <span class="font-bold">Mjobs</span> -->
            </a>
            </div>
            <!-- Primary Nav -->
            <div class="hidden md:flex items-center space-x-1">
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">{{ $t('message.job_ad_search') }}</a>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">{{ $t('message.company_reviews') }}</a>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">{{ $t('message.find_salaries') }}</a>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">{{ $t('message.login') }}</a>
              <div class="relative z-10" @mouseenter="openDropdown" @mouseleave="closeDropdown">
                <button class="py-5 px-3 text-gray-700 hover:text-gray-900 focus:outline-none">Dropdown</button>
                <div v-if="isDropdownOpen" class="absolute left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 1</a>
                  <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 2</a>
                  <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 3</a>
                </div>
              </div>
            </div>
          </div>
        <!-- Secondary Nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">{{ $t('message.create_cv') }}</a>
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
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.job_ad_search') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.company_reviews') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.find_salaries') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.login') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.create_cv') }}</a>
      </div>
    </nav>
  </div>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>

<style scoped>
.z-10 {
  z-index: 10;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      isDropdownOpen: false,  
      isMenuOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    openDropdown() {
      this.isDropdownOpen = true;
    },
    keepDropDownOpen() {
      this.isDropdownOpen = true;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>