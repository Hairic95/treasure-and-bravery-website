export class ValidationHelper {
  /**
   *
   * @param value
   * @param minValue
   * @param maxValue
   * @returns
   */
  public static validateNumber(
    value?: number,
    minValue?: number,
    maxValue?: number
  ): boolean {
    if (value === undefined) {
      return false;
    }
    const n: number = Number(value);
    if (isNaN(n)) {
      return false;
    } else if (minValue !== undefined && n < minValue) {
      return false;
    } else if (maxValue !== undefined && n > maxValue) {
      return false;
    }
    return true;
  }

  /**
   *
   * @param value
   * @returns
   */
  public static validateIpAddress(value?: string): boolean {
    const regExpr = new RegExp(
      '^((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)(\\.(?!$)|$)){4}$'
    );
    return value !== undefined && regExpr.test(value);
  }

  /**
   *
   * @param regExpression
   * @param value
   * @returns
   */
  public static validateRegExp(regExpression: string, value?: string): boolean {
    const regExpr = new RegExp(regExpression);
    return value !== undefined && regExpr.test(value);
  }

  /**
   *
   * @param email
   * @returns
   */
  public static validateEmail(email: string): boolean {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  }

  /**
   *
   * @param emailList
   * @returns
   */
  public static validateEmailList(emailList: string): boolean {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*([,;]{1}[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)*$/.test(
      emailList
    );
  }

  /**
   *
   * @param url
   * @returns
   */
  public static validateUrl(url: string): boolean {
    return /(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(url);
  }

  public static validatePhoneNumber(phoneNumber: string): boolean {
    return /^[\d\s\(\)\+]+$/g.test(phoneNumber);
  }
}
