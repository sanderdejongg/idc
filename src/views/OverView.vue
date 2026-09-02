<script setup lang="ts">
import Blueprint from '../components/Blueprint.vue';
import PageHero from '../components/PageHero.vue';
import zonnepanelen from '../assets/img/zonnepanelen.jpg';
import heroImg from '../assets/img/hero.jpg';

const commitments = [
  'Vluchten onder ILT-vergunning',
  'EASA-gecertificeerde piloten',
  'Locatie-inspectie vóór elke opdracht',
  'Werken volgens uw veiligheidsprocedures',
  'Rapportage met beeld voor en na',
];
</script>

<template>
  <main>
    <PageHero kicker="Over ons" title="Vanuit Groningen, de hele industrie in" />

    <section class="grid grid-cols-1 items-start gap-14 px-6 py-16 md:grid-cols-[7fr_5fr] md:px-12">
      <div v-reveal class="[&_p]:mb-4 [&_p]:text-base [&_p]:leading-[1.6] [&_p]:text-neutral-800">
        <p class="text-lg text-ink">
          Industrial Drone Cleaning reinigt industriële objecten met een drone waaronder een
          hogedrukinstallatie hangt. Wat vroeger een steiger, een hoogwerker of een klimteam vroeg,
          doen wij vanaf de grond: sneller opgebouwd, minder risico, geen mensen op hoogte.
        </p>
        <p>
          Onze focus ligt op de industriële sector: productielocaties, havens en infrastructuur.
          Elke klus begint met een locatie-inspectie — hoogte, bereikbaarheid, waterafvoer, omgeving
          en veiligheidszones. Daarna leggen we het plan vast en werken we volgens uw eigen
          procedures.
        </p>
        <p>
          Onze vluchten worden uitgevoerd met vergunning van de ILT en onze piloten zijn
          EASA-gecertificeerd. Dat betekent vaste procedures, aantoonbare bevoegdheid van de piloot
          en een risicobeoordeling per locatie — de basis om op een industrieterrein of in een haven
          te mogen werken.
        </p>
        <p class="mb-0">
          Wij werken door heel Nederland en zijn bereikbaar voor spoedopdrachten wanneer een schip
          of een productielijn niet kan wachten.
        </p>
      </div>
      <Blueprint class="p-6" v-reveal="0.08">
        <h3 class="mt-0 mb-3.5 font-heading text-[22px] uppercase">Vaste afspraken</h3>
        <div class="grid gap-3 text-[15px] leading-[1.5]">
          <div v-for="(item, i) in commitments" :key="item" class="flex gap-3">
            <span class="font-heading text-accent-700">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ item }}</span>
          </div>
        </div>
      </Blueprint>
    </section>

    <section class="grid grid-cols-1 gap-8 px-6 pb-18 md:grid-cols-2 md:px-12">
      <Blueprint tag="figure" v-reveal>
        <img
          :src="zonnepanelen"
          alt="Drone reinigt zonnepanelen"
          class="block h-[300px] w-full object-cover"
        />
      </Blueprint>
      <Blueprint tag="figure" v-reveal="0.08">
        <img :src="heroImg" alt="Drone in bedrijf" class="block h-[300px] w-full object-cover" />
      </Blueprint>
    </section>
  </main>
</template>
