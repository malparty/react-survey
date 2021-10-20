import { PureComponent } from 'react';

export default class LoginForm extends PureComponent {
  render() {
    return (
      <div className="login-form">
        <form>
          <div className="login-form__field">
            <label className="login-form__label">Email</label>
            <input className="login-form__input form-control" type="email" />
          </div>
          <div className="login-form__field">
            <label className="login-form__label">Password</label>
            <input className="login-form__input form-control" type="password" />
          </div>
          <div className="login-form__field">
            <button className="btn btn-light" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}
