import { AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiResponse implements AxiosResponse {
  public data: any;
  public status: number;
  public statusText: string;
  public headers: any;
  public config: AxiosRequestConfig;
  public request?: any;

  /**
   *
   * @param data
   * @param status
   * @param statusText
   * @param headers
   * @param config
   * @param request
   */
  constructor(
    data: any,
    status: number,
    statusText: string,
    headers: any,
    config: AxiosRequestConfig,
    request?: any
  ) {
    this.data = data;
    this.status = status;
    this.statusText = statusText;
    this.headers = headers;
    this.config = config;
    this.request = request;
  }
}
