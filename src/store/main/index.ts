import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ITBState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const mainModule: Module<ITBState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default mainModule;
