<script setup lang="ts">
import logo from '../assets/img/logo-idc.png';
</script>

<template>
  <footer class="app-footer">
    <div class="brand">
      <img :src="logo" alt="IDC" class="logo" />
      <span class="brand-name">Industrial Drone Cleaning</span>
    </div>
    <div class="contact-line">
      Groningen · <a href="tel:+31634001338">06 34 00 13 38</a> ·
      <a href="mailto:industrialdronecleaning@gmail.com">industrialdronecleaning@gmail.com</a>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--ink-900);
  color: rgba(255, 255, 255, 0.7);
  padding: 40px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  height: 20px;
  width: auto;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.contact-line {
  font-size: 14px;
}
.contact-line a {
  color: inherit;
}
.contact-line a:hover {
  color: var(--color-accent-2);
}
</style>
