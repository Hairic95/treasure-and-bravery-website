import { Dialog, Notify } from 'quasar';

export class NotifyHelper {
  /**
   * Show success message
   * @param message Message
   * @param html Is Html message (default: false)
   * @param timeout Timeout (default: 3000)
   * @param position Position (default: bottom)
   */
  public static success(
    message: string,
    html?: boolean,
    timeout?: number,
    position?:
      | 'bottom'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
      | 'top'
      | 'left'
      | 'right'
      | 'center'
      | undefined
  ) {
    if (!!!html) {
      html = false;
    }
    if (!!!timeout) {
      timeout = 3000;
    }
    if (!!!position) {
      position = 'bottom';
    }
    Notify.create({
      message: message,
      type: 'positive',
      position: position,
      timeout: timeout,
      html: html,
    });
  }

  /**
   * Show warning message
   * @param message Message
   * @param html Is Html message (default: false)
   * @param timeout Timeout (default: 4000)
   * @param position Position (default: bottom)
   */
  public static warning(
    message: string,
    html?: boolean,
    timeout?: number,
    position?:
      | 'bottom'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
      | 'top'
      | 'left'
      | 'right'
      | 'center'
      | undefined
  ) {
    if (!!!html) {
      html = false;
    }
    if (!!!timeout) {
      timeout = 4000;
    }
    if (!!!position) {
      position = 'center';
    }
    Notify.create({
      message: message,
      type: 'warning',
      position: position,
      timeout: timeout,
      html: html,
    });
  }

  /**
   * Show error message
   * @param message Message
   * @param html Is Html message (default: false)
   * @param timeout Timeout (default: 4000)
   * @param position Position (default: bottom)
   */
  public static error(
    message: string,
    html?: boolean,
    timeout?: number,
    position?:
      | 'bottom'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
      | 'top'
      | 'left'
      | 'right'
      | 'center'
      | undefined
  ) {
    if (!!!html) {
      html = false;
    }
    if (!!!timeout) {
      timeout = 5000;
    }
    if (!!!position) {
      position = 'center';
    }
    Notify.create({
      message: message,
      type: 'negative',
      position: position,
      timeout: timeout,
      html: html,
    });
  }

  /**
   * Show confirm message
   * @param title Title
   * @param message Message
   * @param html Is Html message (default: false)
   * @returns true if confirmed
   */
  public static async confirm(
    title: string,
    message: string,
    html?: boolean
  ): Promise<boolean> {
    if (!!!html) {
      html = false;
    }
    return await new Promise<boolean>((resolve) =>
      Dialog.create({
        title: title,
        message: message,
        cancel: true,
        persistent: true,
        html: html,
      })
        .onOk(() => resolve(true))
        .onCancel(() => resolve(false))
    );
  }

  /**
   * Show prompt message
   * @param title Title
   * @param message Message
   * @param html Is Html message (default: false)
   * @returns true if prompted
   */
  public static async prompt(
    title: string,
    message: string,
    html?: boolean
  ): Promise<string | null> {
    if (!!!html) {
      html = false;
    }
    return await new Promise<string | null>((resolve) =>
      Dialog.create({
        title: title,
        message: message,
        cancel: true,
        persistent: true,
        html: html,
        prompt: {
          model: '',
          type: 'text',
          isValid: (val: string) => !!val,
        },
      })
        .onOk((data: string) => resolve(data))
        .onCancel(() => resolve(null))
    );
  }
}
