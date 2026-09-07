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
    kickerColor: 'var(--color-accent-2-700)',
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

    <section class="pricing">
      <div class="grid">
        <Blueprint
          v-for="(step, i) in steps"
          :key="step.kicker"
          v-reveal="i * 0.08"
          class="card"
        >
          <div class="kicker" :style="{ color: step.kickerColor }">{{ step.kicker }}</div>
          <h2>{{ step.title }}</h2>
          <div class="big" :class="{ large: step.bigLarge }">{{ step.big }}</div>
          <p>{{ step.text }}</p>
        </Blueprint>
      </div>

      <Blueprint class="note" v-reveal>
        <p>
          Wij geven pas een prijs als we de klus hebben gezien. Zo voorkomen we verrassingen
          achteraf voor beide kanten. Alle bedragen exclusief btw.
        </p>
        <router-link to="/contact" class="btn btn-cta">Inspectie aanvragen</router-link>
      </Blueprint>
    </section>
  </main>
</template>

<style scoped>
.pricing {
  padding: 64px 48px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}
.card {
  padding: 26px;
}
.kicker {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 0.1em;
}
.card h2 {
  font-family: var(--font-heading);
  font-size: 30px;
  text-transform: uppercase;
  margin: 8px 0 6px;
}
.big {
  font-family: var(--font-heading);
  font-size: 40px;
  line-height: 1.1;
}
.big.large {
  font-size: 44px;
}
.card p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-neutral-800);
  margin: 10px 0 0;
}

.note {
  margin-top: 40px;
  padding: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}
.note p {
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  max-width: 62ch;
  color: var(--color-neutral-800);
}
.btn-cta {
  background: var(--color-accent-2);
  color: #fff;
}

@media (max-width: 900px) {
  .pricing {
    padding-left: 24px;
    padding-right: 24px;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
