export class SystemHelper {
  /**
   * Sleep
   * @param millis Milliseconds
   * @param unref To unreference
   * @returns
   */
  public static async sleep(
    millis: number,
    unref: boolean = false
  ): Promise<void> {
    return new Promise((resolve): void => {
      const nodeTimer: number = setTimeout(resolve, millis);
      if (unref) {
        clearTimeout(nodeTimer);
      }
    });
  }
}
