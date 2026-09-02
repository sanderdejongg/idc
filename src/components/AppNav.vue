<script setup lang="ts">
import logo from '../assets/img/logo-idc.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/diensten', label: 'Diensten' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/prijzen', label: 'Prijzen' },
];
</script>

<template>
  <nav
    class="sticky top-0 z-20 flex flex-wrap items-center gap-3.5 bg-night px-5 py-3.5 md:gap-6 md:px-12 md:py-4"
  >
    <div class="mr-auto flex items-center gap-3">
      <img :src="logo" alt="IDC" class="block h-[22px] w-auto" />
      <span
        class="hidden font-heading text-[15px] tracking-[0.1em] text-white/72 uppercase md:inline"
        >Industrial Drone Cleaning</span
      >
    </div>
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="cursor-pointer border-0 bg-none px-0.5 py-1.5 font-heading text-[15px] tracking-[0.06em] text-white uppercase hover:text-accent2-500 [&.router-link-active]:text-accent2-500"
    >
      {{ link.label }}
    </router-link>
    <router-link
      to="/contact"
      class="inline-flex items-center justify-center gap-1.5 border border-divider bg-accent2-500 px-3 py-2 font-heading text-sm leading-tight text-white hover:text-white hover:opacity-90"
      >Contact</router-link
    >
  </nav>
</template>
