<script setup lang="ts">
import LocaleChanger from './LocaleChanger.vue';
const props = defineProps([
  'isMenuOpen'
])
</script>

<template>
  <!-- Mobile Menu -->
  <div :class="{'hidden': !isMenuOpen}" class="mobile-menu md:hidden">
    <slot>

    </slot>
  </div>
</template>
