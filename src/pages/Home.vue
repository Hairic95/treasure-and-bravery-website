<template>
  <div class="row justify-evenly">W.I.P.</div>
</template>

<script lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { defineComponent } from 'vue';
import { EPages } from '../shared/base/enumerators';
import { GridHandler } from '../shared/handlers/grid-handler';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'PageHome',
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
      context.emit('initializePage', EPages.Home);
    });
    // 7) Export
    return {
      detailsHeight,
    };
  },
});
</script>
