import { MutationTree } from 'vuex';
import { ITBState } from './state';
import { ELanguage } from '../../shared/base/enumerators';

const mutation: MutationTree<ITBState> = {
  changeLanguage(state: ITBState, payload: ELanguage) {
    state.language = payload;
  },
};

export default mutation;
