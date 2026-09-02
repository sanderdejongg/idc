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

    <section class="px-6 py-16 md:px-12">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Blueprint
          v-for="(service, i) in services"
          :key="service.n"
          v-reveal="Math.min(i * 0.06, 0.18)"
          class="p-[26px]"
          :class="{ 'col-span-full': service.wide }"
        >
          <div class="font-heading text-[13px] tracking-[0.1em] text-accent-700">
            {{ service.n }}
          </div>
          <h2 class="mt-1.5 mb-2.5 font-heading text-[30px] uppercase">{{ service.title }}</h2>
          <p class="mb-3.5 max-w-[76ch] text-[15px] leading-[1.6] text-neutral-800">
            {{ service.text }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="inline-flex items-center border border-accent-500 px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-accent-500"
              >{{ tag }}</span
            >
          </div>
        </Blueprint>
      </div>
    </section>

    <section class="px-6 pb-18 md:px-12">
      <Blueprint v-reveal>
        <div
          class="flex flex-col border-b border-divider font-heading text-sm tracking-[0.1em] uppercase md:flex-row"
        >
          <span class="flex-1 px-[22px] py-3">Technische specificatie — reinigingsunit</span>
          <span
            class="border-t border-divider px-[22px] py-3 text-accent-700 md:border-t-0 md:border-l"
            >IDC-01</span
          >
        </div>
        <table class="w-full border-collapse text-sm">
          <tbody>
            <tr v-for="row in specs" :key="row.label">
              <td class="w-[34%] border-b border-ink/8 p-2">{{ row.label }}</td>
              <td class="border-b border-ink/8 p-2 font-heading text-xl">{{ row.value }}</td>
              <td class="border-b border-ink/8 p-2 text-neutral-700">{{ row.note }}</td>
            </tr>
          </tbody>
        </table>
      </Blueprint>
    </section>
  </main>
</template>
