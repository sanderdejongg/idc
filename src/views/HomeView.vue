<script setup lang="ts">
import { ref } from 'vue';
import Blueprint from '../components/Blueprint.vue';
import { useHeroParallax } from '../composables/useHeroParallax';
import { useCountUp } from '../composables/useCountUp';
import heroImg from '../assets/img/hero.jpg';
import zonnepark from '../assets/img/zonnepark.jpg';
import haven from '../assets/img/haven.webp';
import gebouw from '../assets/img/gebouw.jpg';

const heroImgRef = ref<HTMLImageElement | null>(null);
useHeroParallax(heroImgRef);

const stats = [
  { target: 250, suffix: ' bar', label: 'Werkdruk' },
  { target: 100, suffix: ' m', label: 'Werkhoogte' },
  { target: 120, suffix: ' °C', label: 'Watertemperatuur' },
  { target: null, display: 'Osmose', label: 'Optioneel' },
];
const statCounts = useCountUp(stats.map((stat) => stat.target ?? 0));

const services = [
  {
    img: heroImg,
    alt: 'Industriehal',
    title: 'Industrie & gebouwen',
    text: "Hallen, silo's, leidingbruggen en installaties, vanaf de grond bediend.",
  },
  {
    img: zonnepark,
    alt: 'Zonnepark',
    title: 'Energie',
    text: 'Windturbines en zonneparken, met osmosewater voor maximale opbrengst zonder strepen.',
  },
  {
    img: haven,
    alt: 'Brug in de haven',
    title: 'Havens & infra',
    text: 'Schepen bij aankomst, bruggen en viaducten — zonder hoogwerkers of klimwerk.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Veiliger',
    text: 'Niemand hoeft de hoogte in. Geen steiger, geen hoogwerker, geen klimwerk — het risico van werken op hoogte verdwijnt uit de klus.',
  },
  {
    n: '02',
    title: 'Sneller inzetbaar',
    text: 'Geen opbouwtijd. De drone staat binnen een halve dag op locatie en vliegt, ook bij spoed.',
  },
  {
    n: '03',
    title: 'Voordeliger',
    text: 'Minder downtime en geen steigerkosten. Direct inzetbaar en sneller per m2 dan conventionele methodes.',
  },
];
</script>

<template>
  <main class="overflow-x-clip">
    <section class="relative bg-night text-white">
      <img
        ref="heroImgRef"
        :src="heroImg"
        alt="Drone reinigt een windturbineblad"
        class="hero-parallax-img absolute inset-x-0 top-[-8%] h-[116%] w-full object-cover opacity-38"
      />
      <div class="relative max-w-[820px] px-6 pt-22 pb-14 lg:px-12 lg:pt-28 lg:pb-20">
        <div class="font-heading text-xl tracking-[0.16em] text-accent2-500 uppercase">
          Industrieel reinigen met drones
        </div>
        <h1 class="mt-[18px] font-heading text-[clamp(44px,8vw,92px)] leading-none uppercase">
          <span class="block">250 bar</span>
          <span class="block">op 100 meter hoogte</span>
        </h1>
        <p class="mt-[26px] max-w-[54ch] text-[19px] leading-[1.55] text-white/82">
          Gevels, schepen, turbines en infrastructuur reinigen zonder steiger of hoogwerker. Water
          tot 120 graden, optioneel osmosewater voor een vlekvrij resultaat.
        </p>
        <div class="mt-[34px] flex flex-wrap gap-3">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center gap-1.5 border border-divider bg-accent2-500 px-3 py-2 font-heading text-sm leading-tight text-white"
            >Inspectie aanvragen</router-link
          >
          <router-link
            to="/diensten"
            class="inline-flex items-center justify-center gap-1.5 border border-white/45 px-3 py-2 font-heading text-sm leading-tight text-white"
            >Bekijk diensten</router-link
          >
        </div>
      </div>
      <div class="relative grid grid-cols-2 border-t border-white/18 lg:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="border-white/18 px-7 py-[22px]"
          :class="i === 0 ? 'border-l-0' : i === 1 ? 'border-l lg:border-l-0' : 'border-l'"
        >
          <div class="font-heading text-[36px]">
            {{ stat.target !== null ? statCounts[i] + stat.suffix : stat.display }}
          </div>
          <div class="text-[13px] tracking-[0.08em] text-white/60 uppercase">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-18 lg:px-12">
      <div class="flex flex-wrap items-baseline justify-between gap-6">
        <h2 class="m-0 font-heading text-[44px] uppercase">Wat wij reinigen</h2>
        <router-link
          to="/diensten"
          class="font-heading text-[15px] tracking-[0.08em] text-accent-700 uppercase"
          >Alle diensten →</router-link
        >
      </div>
      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Blueprint
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal="i * 0.08"
          tag="figure"
        >
          <img :src="service.img" :alt="service.alt" class="block h-[220px] w-full object-cover" />
          <figcaption class="p-[18px]">
            <h3 class="mt-0 mb-2 font-heading text-2xl uppercase">{{ service.title }}</h3>
            <p class="m-0 text-[15px] leading-[1.55] text-neutral-800">{{ service.text }}</p>
          </figcaption>
        </Blueprint>
      </div>
    </section>

    <section
      class="grid grid-cols-1 items-center gap-14 px-6 pb-14 lg:grid-cols-[5fr_7fr] lg:px-12 lg:pb-18"
    >
      <div v-reveal>
        <div class="font-heading text-sm tracking-[0.1em] text-accent-700 uppercase">Werkwijze</div>
        <hr class="mt-3 mb-5 h-px border-0 bg-divider" />
        <h2 class="m-0 font-heading text-[40px] leading-[1.05] uppercase">
          Geen steiger, geen hoogwerker, geen stilstand
        </h2>
        <p class="mt-[18px] max-w-[46ch] text-base leading-[1.6] text-neutral-800">
          Eén piloot, één operator, één opstelplaats. Wij inspecteren de locatie vooraf, bepalen de
          aanvliegroute en werken volgens vaste veiligheidsafspraken met uw eigen procedures.
        </p>
        <div class="mt-[26px] grid max-w-[48ch] gap-4">
          <div v-for="step in steps" :key="step.n" class="flex items-baseline gap-3.5">
            <span class="min-w-[2ch] font-heading text-[13px] tracking-[0.1em] text-accent-700">{{
              step.n
            }}</span>
            <span class="text-base leading-[1.55]">
              <strong class="block font-heading text-[19px] tracking-[0.02em] uppercase">{{
                step.title
              }}</strong>
              {{ step.text }}
            </span>
          </div>
        </div>
        <router-link
          to="/over-ons"
          class="mt-[26px] inline-flex items-center justify-center gap-1.5 border border-divider px-3 py-2 font-heading text-sm leading-tight text-ink hover:bg-ink/7 active:bg-ink/14"
          >Over ons</router-link
        >
      </div>
      <Blueprint tag="figure" v-reveal="0.1">
        <img
          :src="gebouw"
          alt="Drone reinigt de gevel van een industriehal"
          class="block h-[280px] w-full object-cover lg:h-[420px]"
        />
      </Blueprint>
    </section>
  </main>
</template>
