<script setup lang="ts">
import LocaleChanger from './LocaleChanger.vue';

const props = defineProps([
  'isMenuOpen'
])

const emits = defineEmits([
  'togglemenu'
])
</script>

<template>
  <!-- Mobile button -->
  <div class="md:hidden flex items-center">
    <LocaleChanger />
    <button @click="$emit('togglemenu')" class="mobile-menu-button">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>
</template>
