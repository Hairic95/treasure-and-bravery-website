<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar class="row q-py-md">
        <q-toolbar-title class="text-center text-size-20">
          {{ $t('title') }}
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="row">
        <q-toolbar-title class="text-center">
          <q-btn
            unelevated
            :label="$t('menu.characterCreation')"
            color="secondary"
            text-color="primary"
          ></q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="fit">
      <q-scroll-area :style="'height: ' + pageHeight">
        <q-page class="row justify-center q-pa-md">
          <router-view style="max-width: 1500px" />
        </q-page>
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const { screen } = useQuasar();
    const pageHeight = computed<string>(() => {
      return screen.height - 112 + 'px';
    });
    return { pageHeight };
  },
});
</script>
