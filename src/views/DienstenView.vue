<script setup lang="ts">
import Blueprint from '../components/Blueprint.vue';
import PageHero from '../components/PageHero.vue';

const services = [
  {
    n: '01',
    title: 'Industriële gebouwen',
    text: "Gevels, daken, silo's, leidingbruggen, kranen en installaties. Wij werken vanaf een vaste opstelplaats, dus de productie kan doorlopen en er hoeft geen steigerwerk te worden opgebouwd.",
    tags: ['Gevelreiniging', 'Dakreiniging', "Silo's & tanks"],
  },
  {
    n: '02',
    title: 'Schepen in de haven',
    text: 'Rompen, opbouw, dekken en schoorstenen van schepen die aankomen. Zout, roetaanslag en vervuiling eraf terwijl het schip aan de kade ligt — klaar voor inspectie, verf of oplevering.',
    tags: ['Romp & opbouw', 'Dek', 'Aan de kade'],
  },
  {
    n: '03',
    title: 'Infrastructuur',
    text: 'Aanslag, algen en uitlaatvervuiling van bruggen, viaducten, geluidsschermen, portalen en sluizen. Wij zijn inzetbaar voor beheerders als Rijkswaterstaat, provincies en gemeenten en stemmen het vliegplan af op hun verkeersmaatregelen: vanaf de berm, het water of de kant, of binnen een geplande stremming.',
    tags: ['Bruggen', 'Viaducten', 'Geluidsschermen'],
  },
  {
    n: '04',
    title: 'Energie: wind & zon',
    text: 'Turbinebladen en zonneparken, gereinigd met osmosewater zodat er geen kalk of strepen achterblijven. Vuil kost opbrengst; reinigen is meetbaar terugverdiend. Bij windturbines geldt een ashoogte van maximaal 100 meter.',
    tags: ['Turbinebladen', 'Ashoogte max. 100 m', 'Zonnepanelen', 'Osmosewater'],
  },
  {
    n: '05',
    title: 'Glasbewassing',
    text: 'Ramen, glazen gevels, lichtstraten en atriumdaken tot 100 meter hoogte. Wij werken met osmosewater, zodat het glas vlek- en kalkvrij opdroogt zonder nawerk. Geen glazenwassersgondel, geen hoogwerker en geen mensen op hoogte.',
    tags: ['Glazen gevels', 'Lichtstraten', 'Atriumdaken', 'Osmosewater'],
    wide: true,
  },
];

const specs = [
  { label: 'Werkdruk', value: '250 bar', note: 'Op elke nozzle' },
  { label: 'Werkhoogte', value: 'tot 100 m', note: 'Zonder steiger of hoogwerker' },
  { label: 'Watertemperatuur', value: 'tot 120 °C', note: 'Voor vet, olie en aanslag' },
  { label: 'Osmosewater', value: 'Optioneel', note: 'Vlekvrij op glas en panelen' },
  {
    label: 'Zeep & schoonmaakmiddelen',
    value: 'Mogelijk',
    note: 'Middel afgestemd op ondergrond en vervuiling',
  },
];
</script>

<template>
  <main>
    <PageHero
      kicker="Diensten"
      title="Reinigen waar mensen niet veilig komen"
      title-max-width="24ch"
      lead="Onze drone draagt een hogedrukinstallatie van 250 bar tot 100 meter hoogte. Warm water tot 120 graden voor vet en aanslag, osmosewater voor glas en panelen. Veiliger dan werken op hoogte, sneller inzetbaar dan een steiger en voordeliger dan een hoogwerker."
    />

    <section class="services">
      <div class="grid">
        <Blueprint
          v-for="(service, i) in services"
          :key="service.n"
          v-reveal="Math.min(i * 0.06, 0.18)"
          class="card"
          :class="{ wide: service.wide }"
        >
          <div class="index">{{ service.n }}</div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.text }}</p>
          <div class="tags">
            <span v-for="tag in service.tags" :key="tag" class="tag tag-outline">{{ tag }}</span>
          </div>
        </Blueprint>
      </div>
    </section>

    <section class="spec-section">
      <Blueprint class="spec-sheet" v-reveal>
        <div class="spec-head">
          <span class="spec-title">Technische specificatie — reinigingsunit</span>
          <span class="spec-id">IDC-01</span>
        </div>
        <table class="table">
          <tbody>
            <tr v-for="row in specs" :key="row.label">
              <td class="spec-label">{{ row.label }}</td>
              <td class="spec-value">{{ row.value }}</td>
              <td class="spec-note">{{ row.note }}</td>
            </tr>
          </tbody>
        </table>
      </Blueprint>
    </section>
  </main>
</template>

<style scoped>
.services {
  padding: 64px 48px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
}
.card {
  padding: 26px;
}
.card.wide {
  grid-column: 1 / -1;
}
.index {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--color-accent-700);
}
.card h2 {
  font-family: var(--font-heading);
  font-size: 30px;
  text-transform: uppercase;
  margin: 6px 0 10px;
}
.card p {
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 14px;
  color: var(--color-neutral-800);
  max-width: 76ch;
}
.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.spec-section {
  padding: 0 48px 72px;
}
.spec-head {
  display: flex;
  border-bottom: 1px solid var(--color-divider);
  font-family: var(--font-heading);
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.spec-title {
  flex: 1;
  padding: 12px 22px;
}
.spec-id {
  padding: 12px 22px;
  border-left: 1px solid var(--color-divider);
  color: var(--color-accent-700);
}
.spec-label {
  width: 34%;
}
.spec-value {
  font-family: var(--font-heading);
  font-size: 20px;
}
.spec-note {
  color: var(--color-neutral-700);
}

@media (max-width: 780px) {
  .services,
  .spec-section {
    padding-left: 24px;
    padding-right: 24px;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .spec-head {
    flex-direction: column;
  }
  .spec-id {
    border-left: none;
    border-top: 1px solid var(--color-divider);
  }
}
</style>
