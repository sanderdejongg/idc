import { onMounted, reactive } from 'vue';

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function reducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Animates every target from 0 to its final value over the same shared
 * timeline, so they all land on their end value at the same moment. */
export function useCountUp(targets: number[], duration = 1400) {
  const values = reactive(targets.map(() => 0));

  onMounted(() => {
    if (reducedMotion()) {
      targets.forEach((t, i) => (values[i] = t));
      return;
    }

    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);
      targets.forEach((t, i) => {
        values[i] = Math.round(t * eased);
      });
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  return values;
}
