import moment from 'moment';
import { StoreHelper } from './store-helper';
import { LoggerHelper } from './logger-helper';

export class ConverterHelper {
  /*****************************************
   * DATE-TIME METHODS
   *****************************************/

  /**
   * Convert date time to string
   * @param date Date Time
   * @param format Format
   */
  public static dateTimeToString(dateTime: Date, format: string): string {
    try {
      return moment(dateTime).format(format);
    } catch (error: unknown) {
      LoggerHelper.writeError('ConverterHelper.dateTimeToString', error);
      return '';
    }
  }

  /**
   * Convert string to date time
   * @param date Date Time
   * @param format Format
   */
  public static stringToDateTime(value: string, format: string): Date {
    try {
      return moment(value, format).toDate();
    } catch (error: unknown) {
      LoggerHelper.writeError('ConverterHelper.stringToDateTime', error);
      return new Date();
    }
  }

  /**
   * Convert string to UTC date time
   * @param date Date Time
   * @param format Format
   */
  public static stringToUtcDateTime(value: string, format: string): Date {
    try {
      return moment.utc(value, format).toDate();
    } catch (error: unknown) {
      LoggerHelper.writeError('ConverterHelper.stringToDateTime', error);
      return new Date();
    }
  }

  /**
   * Convert decimal number to string by locale
   * @param value Number value
   * @param decimalDigits Number of decimal digits
   */
  public static decimalToString(value: number, decimalDigits: number = 1) {
    try {
      return Number(value).toLocaleString(StoreHelper.language, {
        minimumFractionDigits: decimalDigits,
        maximumFractionDigits: decimalDigits,
      });
    } catch (error: unknown) {
      LoggerHelper.writeError('ConverterHelper.decimalToString', error);
      return '' + value;
    }
  }
}
