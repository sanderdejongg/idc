<script setup lang="ts">
import logo from '../assets/img/logo-idc.png';
</script>

<template>
  <footer
    class="flex flex-wrap items-center justify-between gap-8 bg-night px-12 py-10 text-white/70"
  >
    <div class="flex items-center gap-4">
      <img :src="logo" alt="IDC" class="h-5 w-auto" />
      <span class="font-heading text-sm tracking-[0.1em] uppercase">Industrial Drone Cleaning</span>
    </div>
    <div class="text-sm [&_a]:text-inherit [&_a:hover]:text-accent2-500">
      Groningen · <a href="tel:+31634001338">06 34 00 13 38</a> ·
      <a href="mailto:industrialdronecleaning@gmail.com">industrialdronecleaning@gmail.com</a>
    </div>
  </footer>
</template>
