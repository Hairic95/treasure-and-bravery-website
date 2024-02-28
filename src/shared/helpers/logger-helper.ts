import { ConverterHelper } from './converter-helper';

export class LoggerHelper {
  /**
   *
   * @param method
   * @param text
   */
  public static write(method: string, text: string): void {
    console.log(
      `${ConverterHelper.dateTimeToString(
        new Date(),
        'YYYY-MM-DD HH:mm:ss.SSS'
      )}\t[${method}]\t${text}`
    );
  }

  /**
   *
   * @param method
   * @param error
   */
  public static writeError(method: string, error: unknown): void {
    console.log(
      `${ConverterHelper.dateTimeToString(
        new Date(),
        'YYYY-MM-DD HH:mm:ss.SSS'
      )}\t[${method}]\tAn error has occurred: ${error}`
    );
  }
}
