import { LoggerHelper } from './logger-helper';
import { StoreHelper } from './store-helper';

export class CountryHelper {
  public static getCountryName(countryCodeIso2: string): string {
    try {
      const countries = require('i18n-iso-countries');
      countries.registerLocale(
        require('i18n-iso-countries/langs/' + StoreHelper.language + '.json')
      );
      return (
        countries.getName(countryCodeIso2, StoreHelper.language) ??
        countryCodeIso2
      );
    } catch (error) {
      LoggerHelper.writeError('CountryHelper.getCountryName', error);
      return countryCodeIso2;
    }
  }
}
