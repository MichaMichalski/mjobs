<script setup lang="ts">
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
