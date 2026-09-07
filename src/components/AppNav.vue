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
  <nav class="app-nav">
    <div class="brand">
      <img :src="logo" alt="IDC" class="logo" />
      <span class="brand-name">Industrial Drone Cleaning</span>
    </div>
    <router-link v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
      {{ link.label }}
    </router-link>
    <router-link to="/contact" class="btn cta">Contact</router-link>
  </nav>
</template>

<style scoped>
.app-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 48px;
  background: var(--ink-900);
  position: sticky;
  top: 0;
  z-index: 20;
  flex-wrap: wrap;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: auto;
}

.logo {
  height: 22px;
  width: auto;
  display: block;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.nav-link {
  font-family: var(--font-heading);
  font-size: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 6px 2px;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-accent-2);
}
.nav-link.router-link-exact-active {
  color: var(--color-accent-2);
}

.cta {
  background: var(--color-accent-2);
  color: #fff;
}
.cta:hover {
  color: #fff;
  opacity: 0.9;
}

@media (max-width: 860px) {
  .app-nav {
    padding: 14px 20px;
    gap: 14px;
  }
  .brand-name {
    display: none;
  }
}
</style>
