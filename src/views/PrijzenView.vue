<script setup lang="ts">
import Blueprint from '../components/Blueprint.vue';
import PageHero from '../components/PageHero.vue';

const steps = [
  {
    kicker: '01 · INSPECTIE',
    kickerColor: 'var(--color-accent-700)',
    title: 'Locatiebezoek',
    big: 'Eerste stap',
    text: 'Wij bekijken het object, meten hoogte en bereikbaarheid en bepalen wat de klus vraagt aan tijd, water en veiligheidszones.',
  },
  {
    kicker: '02 · REINIGEN',
    kickerColor: 'var(--color-accent2-700)',
    title: 'Vaste prijs',
    big: 'Na inspectie',
    text: 'U krijgt één prijs voor de hele klus, inclusief drone, hogedrukinstallatie, piloot en operator. Warm water standaard, osmosewater en schoonmaakmiddelen als optie.',
  },
  {
    kicker: '03 · ONDERHOUD',
    kickerColor: 'var(--color-accent-700)',
    title: 'Jaarcontract',
    big: 'Op maat',
    bigLarge: true,
    text: 'Vaste reinigingsrondes per kwartaal of seizoen, met voorrang bij spoed en een vast tarief per ronde.',
  },
];
</script>

<template>
  <main>
    <PageHero
      kicker="Prijzen"
      title="Wat een opdracht kost"
      lead="Elke locatie is anders: hoogte, vervuiling, bereikbaarheid en waterafvoer bepalen de tijd op locatie. Wij bepalen de prijs daarom na inspectie van de klus — daarna weet u precies waar u aan toe bent."
      lead-max-width="58ch"
    />

    <section class="px-6 py-16 md:px-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Blueprint
          v-for="(step, i) in steps"
          :key="step.kicker"
          v-reveal="i * 0.08"
          class="p-[26px]"
        >
          <div
            class="font-heading text-[13px] tracking-[0.1em]"
            :style="{ color: step.kickerColor }"
          >
            {{ step.kicker }}
          </div>
          <h2 class="mt-2 mb-1.5 font-heading text-[30px] uppercase">{{ step.title }}</h2>
          <div
            class="font-heading text-[40px] leading-[1.1]"
            :class="{ 'text-[44px]': step.bigLarge }"
          >
            {{ step.big }}
          </div>
          <p class="mt-2.5 text-[15px] leading-[1.6] text-neutral-800">{{ step.text }}</p>
        </Blueprint>
      </div>

      <Blueprint class="mt-10 flex flex-wrap items-center justify-between gap-8 p-[26px]" v-reveal>
        <p class="m-0 max-w-[62ch] text-[15px] leading-[1.6] text-neutral-800">
          Wij geven pas een prijs als we de klus hebben gezien. Zo voorkomen we verrassingen
          achteraf voor beide kanten. Alle bedragen exclusief btw.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center gap-1.5 border border-divider bg-accent2-500 px-3 py-2 font-heading text-sm leading-tight text-white"
          >Inspectie aanvragen</router-link
        >
      </Blueprint>
    </section>
  </main>
</template>
