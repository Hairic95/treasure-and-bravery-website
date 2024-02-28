import { Quasar } from 'quasar';
import { WritableComputedRef } from 'vue';
import { ELanguage } from '../base/enumerators';
import { StoreHelper } from './store-helper';
import { LoggerHelper } from './logger-helper';

export class LocaleHelper {
  /**
   * Set Language
   * @param language
   */
  public static setQuasarLocale(language: ELanguage): boolean {
    try {
      // 1) Imposto la lingua di Quasar
      let appLocale: string = language;
      switch (language) {
        case ELanguage.EN:
          appLocale = 'en-GB';
          break;
        // case ELanguage.NO:
        //   appLocale = "nb-NO";
        //   break;
        // case ELanguage.SE:
        //   appLocale = "sv";
        //   break;
      }
      void import('quasar/lang/' + appLocale)
        .then((lang: any) => {
          Quasar.lang.set(lang.default);
        })
        .catch((error: unknown) => {
          LoggerHelper.writeError(
            'LocaleHelper.setQuasarLocale.setQuasarLang',
            error
          );
        });
      return true;
    } catch (error: unknown) {
      LoggerHelper.writeError('LocaleHelper.setQuasarLocale', error);
      return false;
    }
  }

  /**
   * Cambia la lingua del sito
   * @param locale oggetto i18n da modificare
   * @param language codice lingua
   * @returns risultato operazione
   */
  public static async setLocale(
    locale: WritableComputedRef<unknown>,
    language: ELanguage
  ): Promise<boolean> {
    try {
      // 1) Imposto la lingua dello store
      await StoreHelper.actionChangeLanguage(language);
      // 2) Imposto la lingua del sito
      locale.value = language;
      // 3) Imposto la lingua dei componenti Quasar
      LocaleHelper.setQuasarLocale(language);
      return true;
    } catch (error: unknown) {
      LoggerHelper.writeError('LocaleHelper.setLocale', error);
      return false;
    }
  }

  /**
   * Ritorna l'URL dell'immagine della bandiera della lingua
   * @param language Codice Lingua (locale)
   * @returns URL dell'immagine
   */
  public static getLanguageFlagImage(language: string): string {
    try {
      return require('assets/images/countries/' + language + '.png');
    } catch (error: unknown) {
      LoggerHelper.writeError('LocaleHelper.getLanguageFlagImage', error);
      return '';
    }
  }
}
