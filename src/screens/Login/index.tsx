import { PureComponent } from 'react';
import LoginForm from '../../components/LoginForm';

const LOGIN_SCREEN_CLASS = 'login-screen';

export default class LoginScreen extends PureComponent {
  constructor(props: {}) {
    super(props);

    document.body.classList.add(LOGIN_SCREEN_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(LOGIN_SCREEN_CLASS);
  }

  render() {
    return (
      <div className="login-screen__grid">
        <div className="login-screen__container" data-test-id="login-screen-container">
          Sign in to Nimble
          <LoginForm />
        </div>
      </div>
    );
  }
}
