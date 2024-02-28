export class SorterHelper {
  /**
   * * Sort by string
   * @param a String A
   * @param b String B
   * @returns Sort index
   */
  public static sortStrings(a: string, b: string): number {
    const textA = a.toUpperCase(); // ignore upper and lowercase
    const textB = b.toUpperCase(); // ignore upper and lowercase
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }
    return 0;
  }

  /**
   * * Sort by number
   * @param a Number A
   * @param b Number B
   * @returns Sort index
   */
  public static sortNumbers(a: number, b: number): number {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  /**
   * * Sort by Date
   * @param a Date A
   * @param b Date B
   * @returns Sort index
   */
  public static sortDates(a: Date, b: Date): number {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
}
