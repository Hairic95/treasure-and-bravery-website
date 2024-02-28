import { api } from 'src/boot/axios';
import { ApiResponse } from '../models/api/api-response';
import * as querystring from 'querystring';
import StatusCodes from 'http-status-codes';
import { LoggerHelper } from './logger-helper';

export class WebApiHelper {
  /*****************************************
   * PUBLIC METHODS
   *****************************************/

  /**
   * Set base url
   * @param baseUrl Base url
   */
  public static setBaseUrl(baseUrl: string): void {
    api.defaults.baseURL = baseUrl;
  }

  /**
   * Call Api Methods (GET)
   * @param relativeUrl Relative url
   * @returns API call result
   */
  public static async apiGet(relativeUrl: string): Promise<ApiResponse> {
    try {
      return await api.get(relativeUrl);
    } catch (error: any) {
      LoggerHelper.writeError('WebApiHelper.apiGet', error);
      let result: ApiResponse;
      if (error.response) {
        result = new ApiResponse(
          error.response.data,
          error.response.status,
          error.response.statusText,
          error.response.headers,
          error.response.config,
          error.response.request
        );
      } else {
        result = new ApiResponse(
          null,
          StatusCodes.SERVICE_UNAVAILABLE,
          'SERVICE UNAVAILABLE',
          null,
          {},
          null
        );
      }
      return result;
    }
  }

  /**
   * Call Api Methods (POST)
   * @param relativeUrl Relative url
   * @param payload Payload [Optional]
   * @returns API call result
   */
  public static async apiPost(
    relativeUrl: string,
    payload?: any
  ): Promise<ApiResponse> {
    try {
      return await api.post(relativeUrl, payload);
    } catch (error: any) {
      LoggerHelper.writeError('WebApiHelper.apiPost', error);
      let result: ApiResponse;
      if (error.response) {
        result = new ApiResponse(
          error.response.data,
          error.response.status,
          error.response.statusText,
          error.response.headers,
          error.response.config,
          error.response.request
        );
      } else {
        result = new ApiResponse(
          null,
          StatusCodes.SERVICE_UNAVAILABLE,
          'SERVICE UNAVAILABLE',
          null,
          {},
          null
        );
      }
      return result;
    }
  }

  /**
   * Call Api Methods (POST) UrlEncoded
   * @param relativeUrl Relative url
   * @param payload Payload
   * @returns API call result
   */
  public static async apiPostUrlEncoded(
    relativeUrl: string,
    payload: any
  ): Promise<ApiResponse> {
    try {
      const payloadUrlEncoded: string = querystring.stringify(payload);
      return await api.post(relativeUrl, payloadUrlEncoded, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      });
    } catch (error: any) {
      LoggerHelper.writeError('WebApiHelper.apiPostUrlEncoded', error);
      let result: ApiResponse;
      if (error.response) {
        result = new ApiResponse(
          error.response.data,
          error.response.status,
          error.response.statusText,
          error.response.headers,
          error.response.config,
          error.response.request
        );
      } else {
        result = new ApiResponse(
          null,
          StatusCodes.SERVICE_UNAVAILABLE,
          'SERVICE UNAVAILABLE',
          null,
          {},
          null
        );
      }
      return result;
    }
  }

  /**
   * Call Api Methods (POST) to post file
   * @param relativeUrl Relative url
   * @param payload Payload
   * @returns API call result
   */
  public static async apiPostFile(
    relativeUrl: string,
    payload: any
  ): Promise<ApiResponse> {
    try {
      return await api.post(relativeUrl, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error: any) {
      LoggerHelper.writeError(
        'WebApiHelper.apiPostFile An error has occurred: ',
        error
      );
      let result: ApiResponse;
      if (error.response) {
        result = new ApiResponse(
          error.response.data,
          error.response.status,
          error.response.statusText,
          error.response.headers,
          error.response.config,
          error.response.request
        );
      } else {
        result = new ApiResponse(
          null,
          StatusCodes.SERVICE_UNAVAILABLE,
          'SERVICE UNAVAILABLE',
          null,
          {},
          null
        );
      }
      return result;
    }
  }

  /**
   * Call Api Methods (PUT)
   * @param relativeUrl Relative url
   * @param payload Payload [Optional]
   * @returns API call result
   */
  public static async apiPut(
    relativeUrl: string,
    payload?: any
  ): Promise<ApiResponse> {
    try {
      return await api.put(relativeUrl, payload);
    } catch (error: any) {
      LoggerHelper.writeError('WebApiHelper.apiPut', error);
      let result: ApiResponse;
      if (error.response) {
        result = new ApiResponse(
          error.response.data,
          error.response.status,
          error.response.statusText,
          error.response.headers,
          error.response.config,
          error.response.request
        );
      } else {
        result = new ApiResponse(
          null,
          StatusCodes.SERVICE_UNAVAILABLE,
          'SERVICE UNAVAILABLE',
          null,
          {},
          null
        );
      }
      return result;
    }
  }

  /**
   * Call Api Methods (DELETE)
   * @param relativeUrl Relative url
   * @param payload Payload [Optional]
   * @returns API call result
   */
  public static async apiDelete(
    relativeUrl: string,
    payload?: any
  ): Promise<ApiResponse> {
    try {
      if (payload) {
        return await api.delete(relativeUrl, { data: payload });
      } else {
        return await api.delete(relativeUrl);
      }
    } catch (error: any) {
      LoggerHelper.writeError('WebApiHelper.apiDelete', error);
      let result: ApiResponse;
      if (error.response) {
        result = new ApiResponse(
          error.response.data,
          error.response.status,
          error.response.statusText,
          error.response.headers,
          error.response.config,
          error.response.request
        );
      } else {
        result = new ApiResponse(
          null,
          StatusCodes.SERVICE_UNAVAILABLE,
          'SERVICE UNAVAILABLE',
          null,
          {},
          null
        );
      }
      return result;
    }
  }
}
