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

    <section class="intro">
      <div class="copy" v-reveal>
        <p class="lead">
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
        <p class="last">
          Wij werken door heel Nederland en zijn bereikbaar voor spoedopdrachten wanneer een schip
          of een productielijn niet kan wachten.
        </p>
      </div>
      <Blueprint class="commitments" v-reveal="0.08">
        <h3>Vaste afspraken</h3>
        <div class="list">
          <div v-for="(item, i) in commitments" :key="item" class="item">
            <span class="n">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ item }}</span>
          </div>
        </div>
      </Blueprint>
    </section>

    <section class="gallery">
      <Blueprint tag="figure" v-reveal>
        <img :src="zonnepanelen" alt="Drone reinigt zonnepanelen" class="gallery-img" />
      </Blueprint>
      <Blueprint tag="figure" v-reveal="0.08">
        <img :src="heroImg" alt="Drone in bedrijf" class="gallery-img" />
      </Blueprint>
    </section>
  </main>
</template>

<style scoped>
.intro {
  padding: 64px 48px;
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 56px;
  align-items: start;
}
.copy p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-neutral-800);
  margin: 0 0 16px;
}
.copy p.lead {
  font-size: 18px;
  color: var(--color-text);
}
.copy p.last {
  margin: 0;
}

.commitments {
  padding: 24px;
}
.commitments h3 {
  font-family: var(--font-heading);
  font-size: 22px;
  text-transform: uppercase;
  margin: 0 0 14px;
}
.list {
  display: grid;
  gap: 12px;
  font-size: 15px;
  line-height: 1.5;
}
.item {
  display: flex;
  gap: 12px;
}
.item .n {
  font-family: var(--font-heading);
  color: var(--color-accent-700);
}

.gallery {
  padding: 0 48px 72px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}
.gallery-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  .intro,
  .gallery {
    padding-left: 24px;
    padding-right: 24px;
  }
  .intro {
    grid-template-columns: 1fr;
  }
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
