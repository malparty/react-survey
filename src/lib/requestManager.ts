import axios, { Method as HTTPMethod, ResponseType, AxiosRequestConfig, AxiosResponse } from 'axios';

class RequestManager {
  static defaultOptions: { responseType: ResponseType } = {
    responseType: 'json',
  };

  /**
   * The main API access function that comes preconfigured with useful defaults.
   *
   * @param {string} [method] - the HTTP method to use
   * @param {string} [endpoint] - the API endpoint to use
   * @param {Object} [requestOptions] - params and date to be sent
   * @return {Promise} a Promise that will resolve into an object or reject with
   *                   an error object for its reason
   */

  public async call(method: HTTPMethod, endpoint: string, requestOptions: AxiosRequestConfig = {}) {
    const requestParams: AxiosRequestConfig = {
      method,
      url: endpoint,
      ...RequestManager.defaultOptions,
      ...requestOptions,
    };

    return axios.request(requestParams).then((response: AxiosResponse<any>) => {
      return response.data;
    });
  }
};

export default RequestManager;
