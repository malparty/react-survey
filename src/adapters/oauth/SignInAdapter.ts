/* eslint-disable camelcase */
import RequestManager from '@src/lib/RequestManager';
import OauthAdapter from '.';

interface SignInResponse {
  id: number;
  type: 'token';
  attributes: {
    access_token: string;
    token_type: 'Bearer';
    expires_in: number;
    refresh_token: string;
    created_at: Date;
  };
}

class SignInAdapter extends OauthAdapter {
  private url = `${this.serviceUrl}/token`;

  private params = (email: string, password: string): { params: any } => {
    return { params: { ...this.defaultPayload, email: email, password: password, grant_type: 'password' } };
  };

  async call(email: string, password: string): Promise<SignInResponse> {
    return new RequestManager().call('POST', this.url, this.params(email, password));
  }
}

export default SignInAdapter;
