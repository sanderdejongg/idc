<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), { tag: 'div' });

const cornerBase =
  "absolute w-[11px] h-[11px] text-ink/55 before:content-[''] before:absolute before:bg-current before:left-[5px] before:top-0 before:w-px before:h-full after:content-[''] after:absolute after:bg-current after:top-[5px] after:left-0 after:w-full after:h-px";
</script>

<template>
  <component :is="tag" class="relative m-0 border border-divider">
    <i :class="[cornerBase, '-top-1.5 -left-1.5']" />
    <i :class="[cornerBase, '-top-1.5 -right-1.5']" />
    <i :class="[cornerBase, '-bottom-1.5 -left-1.5']" />
    <i :class="[cornerBase, '-bottom-1.5 -right-1.5']" />
    <slot />
  </component>
</template>
