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
              
            </div>
          </div>
        <!-- Secondary Nav -->
        <div class="hidden md:flex items-center space-x-1">
          <svg class="text-gray h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                  <g class="fill-gray-700" id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -671.000000)">
                      <path d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,678.356 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z" id="globe" sketch:type="MSShapeGroup"></path>
                  </g>
              </g>
            </svg>
          <div class="locale-changer">
            <select v-model="$i18n.locale" class="text-gray-700 border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:border-gray-500">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
            </select>
          </div>
          <!-- <div class="relative z-10" @mouseenter="openDropdown" @mouseleave="closeDropdown">
                <button class="py-5 px-3 text-gray-700 hover:text-gray-900 focus:outline-none">Dropdown</button>
                <div v-if="isDropdownOpen" class="absolute left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 1</a>
                  <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 2</a>
                  <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 3</a>
                </div>
              </div> -->
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
        <div class="locale-changer">
          <select v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          </select>
        </div>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.job_ad_search') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.company_reviews') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.find_salaries') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.login') }}</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.create_cv') }}</a>
      </div>
    </nav>
  </div>
  
</template>

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