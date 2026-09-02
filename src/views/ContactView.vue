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
const sending = ref(false);
const failed = ref(false);

async function submitForm() {
  sending.value = true;
  failed.value = false;
  try {
    const response = await fetch('/send-mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const result = await response.json().catch(() => ({ ok: false }));
    if (!response.ok || !result.ok) throw new Error('send_failed');
    sent.value = true;
  } catch {
    failed.value = true;
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <main>
    <PageHero kicker="Contact" title="Inspectie aanvragen" />

    <section class="contact">
      <Blueprint class="form-card" v-reveal>
        <form class="form" @submit.prevent="submitForm">
          <div class="field">
            <label for="c-naam">Naam</label>
            <input
              id="c-naam"
              v-model="form.naam"
              class="input"
              type="text"
              placeholder="Uw naam"
              required
            />
          </div>
          <div class="field">
            <label for="c-bedrijf">Bedrijf</label>
            <input
              id="c-bedrijf"
              v-model="form.bedrijf"
              class="input"
              type="text"
              placeholder="Bedrijfsnaam"
            />
          </div>
          <div class="field">
            <label for="c-mail">E-mail</label>
            <input
              id="c-mail"
              v-model="form.email"
              class="input"
              type="email"
              placeholder="naam@bedrijf.nl"
              required
            />
          </div>
          <div class="field">
            <label for="c-locatie">Locatie en object</label>
            <input
              id="c-locatie"
              v-model="form.locatie"
              class="input"
              type="text"
              placeholder="bv. hal 3, Eemshaven — gevel 18 m"
            />
          </div>
          <button type="submit" class="btn btn-cta" :disabled="sending">
            {{ sending ? 'Versturen…' : 'Aanvraag versturen' }}
          </button>
          <p v-if="sent" class="confirm">Bedankt! Uw aanvraag is verstuurd.</p>
          <p v-if="failed" class="error">
            Versturen is niet gelukt. Probeer het opnieuw of mail ons direct op
            <a href="mailto:info@idc-cleaning.nl">info@idc-cleaning.nl</a>.
          </p>
        </form>
      </Blueprint>

      <div class="direct" v-reveal="0.08">
        <h2>Direct contact</h2>
        <div class="rows">
          <div>
            <span class="label">Telefoon</span>
            <a href="tel:+31634001338">06 34 00 13 38</a>
          </div>
          <div>
            <span class="label">E-mail</span>
            <a href="mailto:industrialdronecleaning@gmail.com">industrialdronecleaning@gmail.com</a>
          </div>
          <div>
            <span class="label">Standplaats</span>
            Groningen — werkgebied heel Nederland
          </div>
        </div>
        <p class="hint">
          Stuur bij je aanvraag zo mogelijk een foto van het object en de hoogte mee; dan kunnen wij
          vaak al voor het locatiebezoek een indicatie geven.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact {
  padding: 64px 48px;
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 56px;
  align-items: start;
}

.form-card {
  padding: 28px;
}
.form {
  display: grid;
  gap: 16px;
}
.btn-cta {
  background: var(--color-accent-2);
  color: #fff;
  align-self: start;
}
.btn-cta:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.confirm {
  font-size: 14px;
  color: var(--color-accent-700);
  margin: 0;
}
.error {
  font-size: 14px;
  color: #b91c1c;
  margin: 0;
}

.direct h2 {
  font-family: var(--font-heading);
  font-size: 30px;
  text-transform: uppercase;
  margin: 0 0 16px;
}
.rows {
  display: grid;
  gap: 14px;
  font-size: 17px;
  line-height: 1.5;
}
.label {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-700);
  display: block;
}
.hint {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-neutral-800);
  margin: 24px 0 0;
  max-width: 44ch;
}

@media (max-width: 900px) {
  .contact {
    padding-left: 24px;
    padding-right: 24px;
    grid-template-columns: 1fr;
  }
}
</style>
