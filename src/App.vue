<script setup lang="ts">
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="min-h-screen">
    <AppNav />
    <router-view />
    <AppFooter />
  </div>
</template>
