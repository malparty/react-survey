import { render } from '@testing-library/react';
import LoginFormErrors from '@src/components/LoginForm/Errors';

describe('LoginFormErrors', () => {
  const ERROR_MESSAGE_TEST_ID = 'base-alert-message';
  const invalidEmailMessage = 'Invalid email';
  const invalidPasswordMessage = 'Invalid password';

  it('has 2 errors when providing 2 errors and 2 touched field', () => {
    const errors = { email: invalidEmailMessage, password: invalidPasswordMessage };
    const touched = { email: true, password: true };
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.getByTestId(ERROR_MESSAGE_TEST_ID)).toHaveTextContent(invalidEmailMessage);
    expect(loginFormErrors.getByTestId(ERROR_MESSAGE_TEST_ID)).toHaveTextContent(invalidPasswordMessage);
  });

  it('has an error when providing 2 errors but only 1 touched field', () => {
    const errors = { email: invalidEmailMessage, password: invalidPasswordMessage };
    const touched = { password: true };
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.getByTestId(ERROR_MESSAGE_TEST_ID)).toHaveTextContent(invalidPasswordMessage);
  });

  it('has no error when providing 2 errors but no touched field', async () => {
    const errors = { email: invalidEmailMessage, password: invalidPasswordMessage };
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
    const errors = {email: invalidEmailMessage };
    const touched = {password: true };
    const loginFormErrors = render(<LoginFormErrors errors={errors} touched={touched} />);

    expect(loginFormErrors.queryByTestId(ERROR_MESSAGE_TEST_ID)).toBeFalsy();
  });
});
