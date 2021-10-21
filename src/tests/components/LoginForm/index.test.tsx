import { render } from '@testing-library/react';
import LoginForm, { LoginFormValues } from '../../../components/LoginForm';
import { FormikHelpers } from 'formik';

describe('LoginForm', () => {
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

  it('has an error when providing 2 errors and 2 touched field', () => {
    const loginForm = new LoginForm({});
    const errors = { email: 'Invalid', password: 'Invalid' };
    const touched = { password: true, email: true };

    expect(loginForm.hasError(errors, touched)).toBeTruthy();
  });

  it('has an error when providing 2 errors but only 1 touched field', () => {
    const loginForm = new LoginForm({});
    const errors = { email: 'Invalid', password: 'Invalid' };
    const touched = { password: true };

    expect(loginForm.hasError(errors, touched)).toBeTruthy();
  });

  it('has no error when providing 2 errors but no touched field', () => {
    const loginForm = new LoginForm({});
    const errors = { email: 'Invalid', password: 'Invalid' };
    const touched = {};

    expect(loginForm.hasError(errors, touched)).toBeFalsy();
  });

  it('has no error when providing 0 errors but a touched field', () => {
    const loginForm = new LoginForm({});
    const errors = {};
    const touched = { password: true };

    expect(loginForm.hasError(errors, touched)).toBeFalsy();
  });

  it('calls the setSubmitting callback after submitLoginForn is called', async () => {
    const loginForm = new LoginForm({});
    const values = { email: 'test@email.com', password: '012345678' };
    // const formikHelpers: FormikHelpers<LoginFormValues> = { setSubmitting: jest.fn() }
    const formikHelpers = {setSubmitting: jest.fn()} as unknown as FormikHelpers<LoginFormValues>;

    await loginForm.submitLoginForm(values, formikHelpers);

    expect(formikHelpers.setSubmitting).toBeCalledWith(false);
  });
});
