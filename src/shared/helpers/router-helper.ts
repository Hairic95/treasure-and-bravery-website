import { tbRouter } from '../../router';
import { EPages } from '../base/enumerators';
import { LoggerHelper } from './logger-helper';

export class RouterHelper {
  /**
   *
   * @param pageName
   */
  public static goToPage(pageName: EPages) {
    // 1) Reindirizzamento a nuova pagina
    tbRouter
      .push({
        name: pageName,
      })
      .then()
      .catch((error: unknown) => {
        LoggerHelper.writeError('RouterHelper.goToPage', error);
      });
  }

  /**
   *
   * @param pageName
   * @param params
   */
  public static goToPageWithParams(pageName: EPages, params: any) {
    // 1) Reindirizzamento a nuova pagina con passaggio di parametri
    tbRouter
      .push({
        name: pageName,
        params: params,
      })
      .then()
      .catch((error: unknown) => {
        LoggerHelper.writeError('RouterHelper.goToPageWithParams', error);
      });
  }

  /**
   * Go to previous page
   */
  public static goToPreviousPage() {
    tbRouter.go(-1);
  }

  /**
   *
   * @param pageName
   */
  public static goToNewTab(pageName: EPages) {
    // 1) Creazione nuova pagina
    window.open(
      tbRouter.resolve({
        name: pageName,
      }).href,
      '_blank'
    );
  }

  /**
   *
   * @param pageName
   */
  public static goToNewTabWithParams(pageName: EPages, params: any) {
    // 1) Creazione nuova pagina
    window.open(
      tbRouter.resolve({
        name: pageName,
        params: params,
      }).href,
      '_blank'
    );
  }

  /**
   *
   */
  public static async goToDefaultPage() {
    RouterHelper.goToPage(EPages.Home);
  }
}
