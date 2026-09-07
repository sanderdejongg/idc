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
  <main>
    <section class="hero">
      <img
        ref="heroImgRef"
        :src="heroImg"
        alt="Drone reinigt een windturbineblad"
        class="hero-bg hero-parallax-img"
      />
      <div class="hero-content">
        <div class="kicker kicker-light">Industrieel reinigen met drones</div>
        <h1 class="hero-title">
          <span>250 bar</span>
          <span>op 100 meter hoogte</span>
        </h1>
        <p class="hero-text">
          Gevels, schepen, turbines en infrastructuur reinigen zonder steiger of hoogwerker. Water
          tot 120 graden, optioneel osmosewater voor een vlekvrij resultaat.
        </p>
        <div class="hero-actions">
          <router-link to="/contact" class="btn btn-cta">Inspectie aanvragen</router-link>
          <router-link to="/diensten" class="btn btn-outline-light">Bekijk diensten</router-link>
        </div>
      </div>
      <div class="stats">
        <div v-for="(stat, i) in stats" :key="stat.label" class="stat">
          <div class="stat-value">
            {{ stat.target !== null ? statCounts[i] + stat.suffix : stat.display }}
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="section-head">
        <h2>Wat wij reinigen</h2>
        <router-link to="/diensten" class="link-arrow">Alle diensten →</router-link>
      </div>
      <div class="services-grid">
        <Blueprint
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal="i * 0.08"
          tag="figure"
        >
          <img :src="service.img" :alt="service.alt" class="service-img" />
          <figcaption class="service-caption">
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </figcaption>
        </Blueprint>
      </div>
    </section>

    <section class="approach">
      <div class="approach-copy" v-reveal>
        <div class="kicker">Werkwijze</div>
        <hr class="divider" />
        <h2>Geen steiger, geen hoogwerker, geen stilstand</h2>
        <p class="approach-text">
          Eén piloot, één operator, één opstelplaats. Wij inspecteren de locatie vooraf, bepalen de
          aanvliegroute en werken volgens vaste veiligheidsafspraken met uw eigen procedures.
        </p>
        <div class="steps">
          <div v-for="step in steps" :key="step.n" class="step">
            <span class="step-n">{{ step.n }}</span>
            <span class="step-body">
              <strong>{{ step.title }}</strong>
              {{ step.text }}
            </span>
          </div>
        </div>
        <router-link to="/over-ons" class="btn btn-secondary">Over ons</router-link>
      </div>
      <Blueprint tag="figure" class="approach-figure" v-reveal="0.1">
        <img :src="gebouw" alt="Drone reinigt de gevel van een industriehal" class="approach-img" />
      </Blueprint>
    </section>
  </main>
</template>

<style scoped>
main {
  overflow-x: clip;
}

.kicker {
  font-family: var(--font-heading);
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-700);
}
.kicker-light {
  font-size: 20px;
  letter-spacing: 0.16em;
  color: var(--color-accent-2);
}

/* Hero */
.hero {
  position: relative;
  background: var(--ink-900);
  color: #fff;
}
.hero-bg {
  position: absolute;
  top: -8%;
  left: 0;
  right: 0;
  height: 116%;
  width: 100%;
  object-fit: cover;
  opacity: 0.38;
}
.hero-content {
  position: relative;
  padding: 112px 48px 80px;
  max-width: 820px;
}
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(44px, 8vw, 92px);
  line-height: 1;
  text-transform: uppercase;
  margin: 18px 0 0;
}
.hero-title span {
  display: block;
}
.hero-text {
  font-size: 19px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.82);
  margin: 26px 0 0;
  max-width: 54ch;
}
.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 34px;
  flex-wrap: wrap;
}
.btn-cta {
  background: var(--color-accent-2);
  color: #fff;
}
.btn-outline-light {
  border: 1px solid rgba(255, 255, 255, 0.45);
  color: #fff;
}

.stats {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}
.stat {
  padding: 22px 28px;
  border-left: 1px solid rgba(255, 255, 255, 0.18);
}
.stat:first-child {
  border-left: none;
}
.stat-value {
  font-family: var(--font-heading);
  font-size: 36px;
}
.stat-label {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

/* Services */
.services {
  padding: 72px 48px;
}
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.section-head h2 {
  font-family: var(--font-heading);
  font-size: 44px;
  text-transform: uppercase;
  margin: 0;
}
.link-arrow {
  font-family: var(--font-heading);
  font-size: 15px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-700);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin-top: 32px;
}
.service-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}
.service-caption {
  padding: 18px;
}
.service-caption h3 {
  font-family: var(--font-heading);
  font-size: 24px;
  text-transform: uppercase;
  margin: 0 0 8px;
}
.service-caption p {
  font-size: 15px;
  line-height: 1.55;
  margin: 0;
  color: var(--color-neutral-800);
}

/* Approach */
.approach {
  padding: 0 48px 72px;
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 56px;
  align-items: center;
}
.approach h2 {
  font-family: var(--font-heading);
  font-size: 40px;
  line-height: 1.05;
  text-transform: uppercase;
  margin: 0;
}
.divider {
  height: 1px;
  border: 0;
  background: var(--color-divider);
  margin: 12px 0 20px;
}
.approach-text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-neutral-800);
  margin: 18px 0 0;
  max-width: 46ch;
}
.steps {
  display: grid;
  gap: 16px;
  margin-top: 26px;
  max-width: 48ch;
}
.step {
  display: flex;
  gap: 14px;
  align-items: baseline;
}
.step-n {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--color-accent-700);
  min-width: 2ch;
}
.step-body {
  font-size: 16px;
  line-height: 1.55;
}
.step-body strong {
  font-family: var(--font-heading);
  font-size: 19px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: block;
}
.approach-copy .btn-secondary {
  margin-top: 26px;
}
.approach-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

@media (max-width: 960px) {
  .hero-content {
    padding: 88px 24px 56px;
  }
  .stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .stat:nth-child(2) {
    border-left: none;
  }
  .services,
  .approach {
    padding-left: 24px;
    padding-right: 24px;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .approach {
    grid-template-columns: 1fr;
    padding-bottom: 56px;
  }
  .approach-img {
    height: 280px;
  }
}
</style>
