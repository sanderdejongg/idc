<script setup lang="ts">
import { reactive, ref } from 'vue';
import Blueprint from '../components/Blueprint.vue';
import PageHero from '../components/PageHero.vue';

const form = reactive({
  naam: '',
  bedrijf: '',
  email: '',
  locatie: '',
});

const sent = ref(false);

function submitForm() {
  const body = [
    `Naam: ${form.naam}`,
    `Bedrijf: ${form.bedrijf}`,
    `E-mail: ${form.email}`,
    `Locatie en object: ${form.locatie}`,
  ].join('\n');
  const mailto = `mailto:industrialdronecleaning@gmail.com?subject=${encodeURIComponent(
    'Inspectie aanvragen',
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  sent.value = true;
}
</script>

<template>
  <main>
    <PageHero kicker="Contact" title="Inspectie aanvragen" />

    <section class="grid grid-cols-1 items-start gap-14 px-6 py-16 md:grid-cols-2 md:px-12">
      <Blueprint class="p-7" v-reveal>
        <form class="grid gap-4" @submit.prevent="submitForm">
          <div>
            <label for="c-naam" class="mb-[5px] block text-xs text-ink/70">Naam</label>
            <input
              id="c-naam"
              v-model="form.naam"
              class="min-h-9 w-full border border-divider bg-surface px-2.5 py-1.5 text-sm text-ink hover:border-ink/45 focus-visible:border-accent-500 focus-visible:outline-0"
              type="text"
              placeholder="Uw naam"
              required
            />
          </div>
          <div>
            <label for="c-bedrijf" class="mb-[5px] block text-xs text-ink/70">Bedrijf</label>
            <input
              id="c-bedrijf"
              v-model="form.bedrijf"
              class="min-h-9 w-full border border-divider bg-surface px-2.5 py-1.5 text-sm text-ink hover:border-ink/45 focus-visible:border-accent-500 focus-visible:outline-0"
              type="text"
              placeholder="Bedrijfsnaam"
            />
          </div>
          <div>
            <label for="c-mail" class="mb-[5px] block text-xs text-ink/70">E-mail</label>
            <input
              id="c-mail"
              v-model="form.email"
              class="min-h-9 w-full border border-divider bg-surface px-2.5 py-1.5 text-sm text-ink hover:border-ink/45 focus-visible:border-accent-500 focus-visible:outline-0"
              type="email"
              placeholder="naam@bedrijf.nl"
              required
            />
          </div>
          <div>
            <label for="c-locatie" class="mb-[5px] block text-xs text-ink/70"
              >Locatie en object</label
            >
            <input
              id="c-locatie"
              v-model="form.locatie"
              class="min-h-9 w-full border border-divider bg-surface px-2.5 py-1.5 text-sm text-ink hover:border-ink/45 focus-visible:border-accent-500 focus-visible:outline-0"
              type="text"
              placeholder="bv. hal 3, Eemshaven — gevel 18 m"
            />
          </div>
          <button
            type="submit"
            class="inline-flex w-fit items-center justify-center gap-1.5 self-start border border-divider bg-accent2-500 px-3 py-2 font-heading text-sm leading-tight text-white"
          >
            Aanvraag versturen
          </button>
          <p v-if="sent" class="m-0 text-sm text-accent-700">
            Uw mailclient wordt geopend om de aanvraag te versturen.
          </p>
        </form>
      </Blueprint>

      <div v-reveal="0.08">
        <h2 class="mt-0 mb-4 font-heading text-[30px] uppercase">Direct contact</h2>
        <div class="grid gap-3.5 text-[17px] leading-[1.5]">
          <div>
            <span class="block font-heading text-[13px] tracking-[0.1em] text-accent-700 uppercase"
              >Telefoon</span
            >
            <a href="tel:+31634001338">06 34 00 13 38</a>
          </div>
          <div>
            <span class="block font-heading text-[13px] tracking-[0.1em] text-accent-700 uppercase"
              >E-mail</span
            >
            <a href="mailto:industrialdronecleaning@gmail.com">industrialdronecleaning@gmail.com</a>
          </div>
          <div>
            <span class="block font-heading text-[13px] tracking-[0.1em] text-accent-700 uppercase"
              >Standplaats</span
            >
            Groningen — werkgebied heel Nederland
          </div>
        </div>
        <p class="mt-6 max-w-[44ch] text-[15px] leading-[1.6] text-neutral-800">
          Stuur bij je aanvraag zo mogelijk een foto van het object en de hoogte mee; dan kunnen wij
          vaak al voor het locatiebezoek een indicatie geven.
        </p>
      </div>
    </section>
  </main>
</template>
