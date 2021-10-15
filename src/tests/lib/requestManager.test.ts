import axios from 'axios';
import { requestManager, defaultOptions } from '../../lib/requestManager';

describe('requestManager', () => {
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

    await expect(requestManager('POST', endPoint)).resolves.toEqual(responseData.data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    jest.mock('axios');
    const postMocked = jest.spyOn(axios, 'request');
    postMocked.mockImplementation(() => Promise.reject(new Error(errorMessage)));

    await expect(requestManager('POST', endPoint)).rejects.toThrow(errorMessage);
  });

  it('fetches the provided endPoint', async () => {
    const requestOptions = { ...defaultOptions, method: 'POST', url: endPoint };

    jest.mock('axios');
    const postMocked = jest.spyOn(axios, 'request');
    postMocked.mockImplementation(() => Promise.resolve({}));

    await requestManager('POST', endPoint);

    expect(axios.request).toHaveBeenCalledWith(requestOptions);
  });
});
