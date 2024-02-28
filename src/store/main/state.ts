import { ELanguage } from '../../shared/base/enumerators';

export interface ITBState {
  language: ELanguage;
}

function state(): ITBState {
  return {
    language: ELanguage.IT,
  };
}

export default state;
