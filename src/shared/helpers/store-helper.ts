import { tbStore } from '../../store';
import { ELanguage } from '../base/enumerators';

export class StoreHelper {
  /*****************************************
   * STATE
   *****************************************/
  /**
   * Language
   */
  public static get language(): ELanguage {
    return tbStore.state.main.language;
  }
  /*****************************************
   * GETTERS
   *****************************************/
  /*****************************************
   * ACTIONS
   *****************************************/
  /**
   * Change Language
   * @param request Language
   * @returns true if success; false otherwise
   */
  public static async actionChangeLanguage(
    request: ELanguage
  ): Promise<boolean> {
    return await tbStore.dispatch('main/changeLanguage', request);
  }

  /*****************************************
   * UTILITIES METHODS
   *****************************************/
}
