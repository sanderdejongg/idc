<script setup lang="ts">
withDefaults(
  defineProps<{
    kicker: string;
    title: string;
    titleMaxWidth?: string;
    lead?: string;
    leadMaxWidth?: string;
  }>(),
  { titleMaxWidth: '22ch', leadMaxWidth: '60ch' },
);
</script>

<template>
  <section class="page-hero">
    <div class="kicker">{{ kicker }}</div>
    <h1 :style="{ maxWidth: titleMaxWidth }">{{ title }}</h1>
    <p v-if="lead" class="lead" :style="{ maxWidth: leadMaxWidth }">{{ lead }}</p>
  </section>
</template>

<style scoped>
.page-hero {
  background: var(--ink-900);
  color: #fff;
  padding: 72px 48px;
}
.kicker {
  font-family: var(--font-heading);
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent-2);
}
h1 {
  font-family: var(--font-heading);
  font-size: clamp(38px, 6vw, 68px);
  line-height: 1.02;
  text-transform: uppercase;
  margin: 16px 0 0;
}
.lead {
  font-size: 18px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.82);
  margin: 22px 0 0;
}

@media (max-width: 720px) {
  .page-hero {
    padding: 48px 24px;
  }
}
</style>
