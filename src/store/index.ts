import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import createPersistedState from 'vuex-persistedstate';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';
import { ITBState } from './main/state';
import main from './main';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  main: ITBState;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key');

let tbStore: VuexStore<StateInterface>;
export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      main,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,

    plugins: [createPersistedState()],
  });

  tbStore = Store;

  return Store;
});

export { tbStore };

export function useStore() {
  return vuexUseStore(storeKey);
}
