import SignInAdapter from '@src/adapters/oauth/SignInAdapter';
import RequestManager from '@src/lib/RequestManager';
jest.mock('@src/lib/RequestManager');

describe('SignInAdapter', () => {
  it('calls RequestManager only once', async () => {
    const mockRequestManagerCall = jest.fn();
    jest.spyOn(RequestManager.prototype, 'call').mockImplementation(() => (mockRequestManagerCall()));

    const signInAdapter = new SignInAdapter();
    await signInAdapter.call('email@test.com', 'password123');

    expect(mockRequestManagerCall).toBeCalledTimes(1);
  });
});
