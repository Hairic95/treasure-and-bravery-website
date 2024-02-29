<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar class="row q-py-md">
        <q-toolbar-title class="text-center text-size-20">
          {{ $t('title') }}
        </q-toolbar-title>
      </q-toolbar>
      <div class="row">
        <div class="col-12 text-center">
          <q-btn
            unelevated
            class="q-ma-sm btn-menu"
            :class="isCharacterCreationPageActive ? 'white-borders' : ''"
            :label="$t('menu.characterCreation')"
            :color="isCharacterCreationPageActive ? 'primary' : 'secondary'"
            :text-color="
              isCharacterCreationPageActive ? 'secondary' : 'primary'
            "
            @click="goToPage(EPages.CharacterCreation)"
          ></q-btn>
          <q-btn
            class="q-ma-sm btn-menu"
            :class="isHowToPlayPageActive ? 'white-borders' : ''"
            unelevated
            :label="$t('menu.howToPlay')"
            :color="isHowToPlayPageActive ? 'primary' : 'secondary'"
            :text-color="isHowToPlayPageActive ? 'secondary' : 'primary'"
            @click="goToPage(EPages.HowToPlay)"
          ></q-btn>
          <q-btn
            class="q-ma-sm btn-menu"
            :class="isCombatPageActive ? 'white-borders' : ''"
            unelevated
            :label="$t('menu.combat')"
            :color="isCombatPageActive ? 'primary' : 'secondary'"
            :text-color="isCombatPageActive ? 'secondary' : 'primary'"
            @click="goToPage(EPages.Combat)"
          ></q-btn>
          <q-btn
            class="q-ma-sm btn-menu"
            :class="isMagicPageActive ? 'white-borders' : ''"
            unelevated
            :label="$t('menu.magic')"
            :color="isMagicPageActive ? 'primary' : 'secondary'"
            :text-color="isMagicPageActive ? 'secondary' : 'primary'"
            @click="goToPage(EPages.Magic)"
          ></q-btn>
          <q-btn
            class="q-ma-sm btn-menu"
            :class="isItemsPageActive ? 'white-borders' : ''"
            unelevated
            :label="$t('menu.items')"
            :color="isItemsPageActive ? 'primary' : 'secondary'"
            :text-color="isItemsPageActive ? 'secondary' : 'primary'"
            @click="goToPage(EPages.Items)"
          ></q-btn>
          <q-btn
            class="q-ma-sm btn-menu"
            :class="isNpcsPageActive ? 'white-borders' : ''"
            unelevated
            :label="$t('menu.npcs')"
            :color="isNpcsPageActive ? 'primary' : 'secondary'"
            :text-color="isNpcsPageActive ? 'secondary' : 'primary'"
            @click="goToPage(EPages.Npcs)"
          ></q-btn>
        </div>
      </div>
    </q-header>

    <q-page-container class="fit">
      <q-scroll-area :style="'height: ' + pageHeight">
        <q-page class="row justify-center q-pa-md">
          <router-view
            style="max-width: 1550px"
            @initialize-page="initializePage"
          />
        </q-page>
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { EPages } from 'src/shared/base/enumerators';
import { RouterHelper } from 'src/shared/helpers/router-helper';
import { computed, ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    // 1) Variables
    const { screen } = useQuasar();
    const currentPage = ref<EPages>(EPages.CharacterCreation);
    // 2) Computed
    const pageHeight = computed<string>(() => {
      return screen.height - 117 + 'px';
    });
    const isCharacterCreationPageActive = computed<boolean>(() => {
      return currentPage.value === EPages.CharacterCreation;
    });
    const isHowToPlayPageActive = computed<boolean>(() => {
      return currentPage.value === EPages.HowToPlay;
    });
    const isCombatPageActive = computed<boolean>(() => {
      return currentPage.value === EPages.Combat;
    });
    const isMagicPageActive = computed<boolean>(() => {
      return currentPage.value === EPages.Magic;
    });
    const isItemsPageActive = computed<boolean>(() => {
      return currentPage.value === EPages.Items;
    });
    const isNpcsPageActive = computed<boolean>(() => {
      return currentPage.value === EPages.Npcs;
    });
    // 3) Private Methods
    // 4) Public Methods
    const initializePage = (page: EPages): void => {
      currentPage.value = page;
    };
    const goToPage = (page: EPages): void => {
      RouterHelper.goToPage(page);
    };
    // 5) Watches
    // 6) Lifecycle
    // 7) Export
    return {
      EPages,

      pageHeight,
      isCharacterCreationPageActive,
      isHowToPlayPageActive,
      isCombatPageActive,
      isMagicPageActive,
      isItemsPageActive,
      isNpcsPageActive,

      initializePage,
      goToPage,
    };
  },
});
</script>
