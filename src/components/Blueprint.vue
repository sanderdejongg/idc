<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), { tag: 'div' });
</script>

<template>
  <component :is="tag" class="blueprint">
    <i class="corner tl" />
    <i class="corner tr" />
    <i class="corner bl" />
    <i class="corner br" />
    <slot />
  </component>
</template>

<style scoped>
.blueprint {
  position: relative;
  margin: 0;
}
</style>
