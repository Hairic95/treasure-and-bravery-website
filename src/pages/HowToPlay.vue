<template>
  <div class="row justify-evenly">
    <div class="col-md-6 col-12 q-pr-md-sm">
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('howToPlay.playersAndMaster.title') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.playersAndMaster.description') }}
        </q-card-section>
      </q-card>
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('howToPlay.rolls.title') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.rolls.description') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.rolls.description2') }}
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="text-size-18 text-bold q-pb-none">
          {{ $t('howToPlay.rolls.opposedRollsTitle') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.rolls.opposedRollsDescription') }}
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="text-size-18 text-bold q-pb-none">
          {{ $t('howToPlay.rolls.bonusAndMalusTitle') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.rolls.bonusAndMalusDescription') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.rolls.bonusAndMalusDescription2') }}
        </q-card-section>
      </q-card>
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('howToPlay.inventoryAndStress.title') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.inventoryAndStress.description') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.inventoryAndStress.description2') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.inventoryAndStress.description3') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.inventoryAndStress.description4') }}
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="text-size-18 text-bold q-pb-none">
          {{ $t('howToPlay.inventoryAndStress.pushingTitle') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.inventoryAndStress.pushingDescription') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.inventoryAndStress.pushingDescription2') }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-6 col-12 q-pl-md-sm">
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('howToPlay.time.title') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.time.description') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.time.descriptionRound') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.time.descriptionTurn') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.time.descriptionWatch') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.time.rationDescription') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.time.exhaustDescription') }}
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('howToPlay.explorationClock.title') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.explorationClock.description') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.explorationClock.description2') }}
        </q-card-section>
      </q-card>
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('howToPlay.experience.title') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.experience.gainingExperienceDescription') }}
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="q-pb-none">
          {{ $t('howToPlay.experience.levelUpDescription') }}
        </q-card-section>
        <q-card-section class="q-py-none">
          {{ $t('howToPlay.experience.levelUpDescription2') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('howToPlay.experience.retireDescription') }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { defineComponent } from 'vue';
import { EPages } from '../shared/base/enumerators';
import { GridHandler } from '../shared/handlers/grid-handler';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'PageHowToPlay',
  emits: ['initializePage'],
  setup(props, context) {
    // 1) Variables
    const { t } = useI18n({ useScope: 'global' });

    // 2) Computed
    const detailsHeight = computed<string>(() => {
      return screen.height - 310 + 'px';
    });
    // 3) Private Methods
    // 4) Public Methods
    // 5) Watches
    // 6) Lifecycle
    onBeforeMount(() => {
      context.emit('initializePage', EPages.HowToPlay);
    });
    // 7) Export
    return {
      detailsHeight,
    };
  },
});
</script>
