import type { Directive } from 'vue';

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
  }
  return observer;
}

const reducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal');
    if (binding.value) {
      el.style.transitionDelay = `${binding.value}s`;
    }
    if (reducedMotion()) {
      el.classList.add('reveal-in');
      return;
    }
    getObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
