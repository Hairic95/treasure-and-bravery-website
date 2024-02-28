import { ITBState } from './state';
import { ELanguage } from '../../shared/base/enumerators';
import { LoggerHelper } from '../../shared/helpers/logger-helper';
import { StateInterface } from '..';
import { ActionTree } from 'vuex';

const actions: ActionTree<ITBState, StateInterface> = {
  changeLanguage({ commit }, language: ELanguage): boolean {
    try {
      // 1) Imposta la lingua
      commit('changeLanguage', language);
      return true;
    } catch (error: unknown) {
      LoggerHelper.writeError('store.main.actions.changeLanguage', error);
      return false;
    }
  },
};

export default actions;
