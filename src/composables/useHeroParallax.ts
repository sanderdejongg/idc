import { onMounted, onUnmounted, type Ref } from 'vue';

export function useHeroParallax(imgRef: Ref<HTMLElement | null>) {
  let raf = 0;
  let reducedMotion = false;

  function update() {
    const el = imgRef.value;
    if (!el || reducedMotion) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    const progress = (vh - rect.top) / (vh + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const offset = (clamped - 0.5) * 60;
    el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  }

  function onScroll() {
    if (reducedMotion || raf) return;
    raf = requestAnimationFrame(() => {
      update();
      raf = 0;
    });
  }

  onMounted(() => {
    reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (raf) cancelAnimationFrame(raf);
  });
}
