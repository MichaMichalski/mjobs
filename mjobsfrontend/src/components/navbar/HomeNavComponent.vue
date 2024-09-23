<script setup lang="ts">
import { ref } from 'vue';
import MobileNavButton from './MobileNavButton.vue';
import MobileNavMenu from './MobileNavMenu.vue';
import { useI18n } from 'vue-i18n';
import LocaleChanger from './LocaleChanger.vue';

let isMenuOpen = ref(false);

const { t } = useI18n();

let menuMessages = ref([
  'message.job_ad_search',
  'message.company_reviews',
  'message.find_salaries',
  'message.login',
]);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
  <nav class="bg-mybg shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- Logo -->
          <div>
          <a href="#" class="flex items-center py-5 px-2 text-mycontent">
              <img src="../../assets/MJobs.png" alt="Mjobs Logo" class="object-contain h-8 w-24 mr-2 min-w-24">
          </a>
          </div>
          <!-- Primary Nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a v-for="message in menuMessages" href="#" class="py-5 px-3 text-mycontent hover:text-mycontenthover">{{ $t(message) }}</a>
            <a href="#" class="py-2 px-3 bg-blue-500 text-mycontent rounded hover:bg-blue-700 transition duration-300">{{ $t('message.create_cv') }}</a>
          </div>
        </div>
      <!-- Secondary Nav -->
      <div class="hidden md:flex items-center space-x-1">
        <LocaleChanger />
      </div>
        <MobileNavButton @togglemenu="toggleMenu" />
      </div>
    </div>
    <!-- Mobile Menu -->
    <MobileNavMenu :isMenuOpen="isMenuOpen">
      <a v-for="message in menuMessages" href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t(message) }}</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ $t('message.create_cv') }}</a>
    </MobileNavMenu>
  </nav>
  
</template>
