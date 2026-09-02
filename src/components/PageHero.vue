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
  <section class="bg-night px-6 py-12 text-white md:px-12 md:py-[72px]">
    <div class="font-heading text-sm tracking-[0.16em] text-accent2-500 uppercase">
      {{ kicker }}
    </div>
    <h1
      class="mt-4 font-heading text-[clamp(38px,6vw,68px)] leading-[1.02] uppercase"
      :style="{ maxWidth: titleMaxWidth }"
    >
      {{ title }}
    </h1>
    <p
      v-if="lead"
      class="mt-[22px] text-lg leading-[1.55] text-white/82"
      :style="{ maxWidth: leadMaxWidth }"
    >
      {{ lead }}
    </p>
  </section>
</template>
