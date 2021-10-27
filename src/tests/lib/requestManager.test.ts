import axios from 'axios';
import RequestManager from '@src/lib/RequestManager';

describe('RequestManager', () => {
  const endPoint = 'https://sample-endpoint.com/api/';

  it('fetches successfully data from an API', async () => {
    const responseData = {
      data: [
        { id: 1, value: 'first object' },
        { id: 2, value: 'second object' }
      ]
    };

    jest.mock('axios');
    const postMocked = jest.spyOn(axios, 'request');
    postMocked.mockImplementation(() => Promise.resolve(responseData));

    const requestManager = new RequestManager();

    await expect(requestManager.call('POST', endPoint)).resolves.toEqual(responseData.data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    jest.mock('axios');
    const postMocked = jest.spyOn(axios, 'request');
    postMocked.mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const requestManager = new RequestManager();

    await expect(requestManager.call('POST', endPoint)).rejects.toThrow(errorMessage);
  });

  it('fetches the provided endPoint', async () => {
    const requestOptions = { ...RequestManager.defaultOptions, method: 'POST', url: endPoint };

    jest.mock('axios');
    const postMocked = jest.spyOn(axios, 'request');
    postMocked.mockImplementation(() => Promise.resolve({}));

    const requestManager = new RequestManager();

    await requestManager.call('POST', endPoint);

    expect(axios.request).toHaveBeenCalledWith(requestOptions);
  });
});
