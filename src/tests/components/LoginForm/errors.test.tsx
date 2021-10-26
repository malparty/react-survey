import { render } from '@testing-library/react';
import LoginFormErrors from '@src/components/LoginForm/Errors';

describe('LoginFormErrors', () => {
  const ERROR_MESSAGE_TEST_ID = 'base-alert-message';
  const invalid_email_message = 'Invalid email';
  const invalid_password_message = 'Invalid password';

  it('has 2 errors when providing 2 errors and 2 touched field', () => {
    const errors = { email: invalid_email_message, password: invalid_password_message };
    const touched = { email: true, password: true };
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.getByTestId(ERROR_MESSAGE_TEST_ID)).toHaveTextContent(invalid_email_message);
    expect(loginFormErrors.getByTestId(ERROR_MESSAGE_TEST_ID)).toHaveTextContent(invalid_password_message);
  });

  it('has an error when providing 2 errors but only 1 touched field', () => {
    const errors = { email: invalid_email_message, password: invalid_password_message };
    const touched = { password: true };
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.getByTestId(ERROR_MESSAGE_TEST_ID)).toHaveTextContent(invalid_password_message);
  });

  it('has no error when providing 2 errors but no touched field', async () => {
    const errors = { email: invalid_email_message, password: invalid_password_message };
    const touched = {};
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.queryByTestId(ERROR_MESSAGE_TEST_ID)).toBeFalsy();
  });

  it('has no error when providing 0 errors but a touched field', () => {
    const errors = {};
    const touched = { email: true };
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.queryByTestId(ERROR_MESSAGE_TEST_ID)).toBeFalsy();
  });

  it('has no error when providing 0 errors but 2 touched field', () => {
    const errors = {};
    const touched = { email: true, password: true };
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.queryByTestId(ERROR_MESSAGE_TEST_ID)).toBeFalsy();
  });

  it('has no error when providing 0 errors and no touched field', () => {
    const errors = {};
    const touched = {};
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.queryByTestId(ERROR_MESSAGE_TEST_ID)).toBeFalsy();
  });

  it('does NOT display a BaseAlert message when it has no error', () => {
    const errors = {email:invalid_email_message};
    const touched = {password: true};
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.queryByTestId(ERROR_MESSAGE_TEST_ID)).toBeFalsy();
  });
});
