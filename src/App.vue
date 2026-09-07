<script setup lang="ts">
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="app-shell">
    <AppNav />
    <router-view />
    <AppFooter />
  </div>
</template>

<style scoped>
.app-shell {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
}
</style>
