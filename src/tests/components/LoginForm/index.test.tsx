import { render, fireEvent } from '@testing-library/react';
import LoginForm, { LoginFormValues } from '../../../components/LoginForm';
import { FormikHelpers } from 'formik';
import BaseAlert, { MESSAGE_TEST_ID as BASE_ALERT_MESSAGE_TEST_ID } from '../../../components/BaseAlert';

describe('LoginForm', () => {
  const LOGIN_FORM_ERROR_TEST_ID = 'login-form-error';

  it('correctly renders', () => {
    const loginForm = render(<LoginForm />);

    expect(loginForm).toMatchSnapshot();
  });

  it('displays an email field with its label', () => {
    const loginForm = render(<LoginForm />);
    expect(loginForm.getByLabelText('Email')).toBeVisible();
  });

  it('displays a password field with its label', () => {
    const loginForm = render(<LoginForm />);

    expect(loginForm.getByLabelText('Password')).toBeVisible();
  });

  it('displays a Sign In button', () => {
    const loginForm = render(<LoginForm />);

    expect(loginForm.getByText('Sign in')).toBeVisible();
  });

  it('has 2 errors when providing 2 errors and 2 touched field', () => {
    const loginForm = new LoginForm({});
    const errors = { email: 'Invalid', password: 'Invalid' };
    const touched = { email: true, password: true };

    expect(loginForm.getErrorMessages(errors, touched).length).toEqual(2);
  });

  it('has an error when providing 2 errors but only 1 touched field', () => {
    const loginForm = new LoginForm({});
    const errors = { email: 'Invalid', password: 'Invalid' };
    const touched = { password: true };

    expect(loginForm.getErrorMessages(errors, touched).length).toEqual(1);
  });

  it('has no error when providing 2 errors but no touched field', () => {
    const loginForm = new LoginForm({});
    const errors = { email: 'Invalid', password: 'Invalid' };
    const touched = {};

    expect(loginForm.getErrorMessages(errors, touched).length).toEqual(0);
  });

  it('has no error when providing 0 errors but a touched field', () => {
    const loginForm = new LoginForm({});
    const errors = {};
    const touched = { email: true };

    expect(loginForm.getErrorMessages(errors, touched).length).toEqual(0);
  });

  it('has no error when providing 0 errors but 2 touched field', () => {
    const loginForm = new LoginForm({});
    const errors = {};
    const touched = { email: true, password: true };

    expect(loginForm.getErrorMessages(errors, touched).length).toEqual(0);
  });

  it('has no error when providing 0 errors and no touched field', () => {
    const loginForm = new LoginForm({});
    const errors = {};
    const touched = {};

    expect(loginForm.getErrorMessages(errors, touched).length).toEqual(0);
  });

  it('calls the setSubmitting callback after submitLoginForn is called', async () => {
    const loginForm = new LoginForm({});
    const values = { email: 'test@email.com', password: '012345678' };
    const formikHelpers = { setSubmitting: jest.fn() } as unknown as FormikHelpers<LoginFormValues>;

    await loginForm.submitLoginForm(values, formikHelpers);

    expect(formikHelpers.setSubmitting).toBeCalledWith(false);
  });

  it('displays a BaseAlert message when it has an error', () => {
    const loginForm = new LoginForm({});

    const formErrors = loginForm.renderErrors({email:'Email error'}, {email: true});

    expect(formErrors).not.toBeNull();
  });

  it('does NOT display a BaseAlert message when it has no error', () => {
    const loginForm = new LoginForm({});

    const formErrors = loginForm.renderErrors({email:'Email error'}, {password: true});

    expect(formErrors).toBeNull();
  });
});
