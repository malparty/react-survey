/* eslint-disable camelcase */
class OauthAdapter {
  protected serviceUrl = `${process.env.REACT_APP_API_URL}/api/v1/oauth`;

  protected defaultPayload = {
    client_id: process.env.REACT_APP_API_CLIENT_ID,
    client_secret: process.env.REACT_APP_API_SECRET,
  };
}

export default OauthAdapter;
