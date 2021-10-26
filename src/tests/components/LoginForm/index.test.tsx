import { render } from '@testing-library/react';
import LoginForm, { LoginFormValues } from '@src/components/LoginForm';
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

  it('calls the setSubmitting callback after submitLoginForn is called', async () => {
    const loginForm = new LoginForm({});
    const values = { email: 'test@email.com', password: '012345678' };
    const formikHelpers = { setSubmitting: jest.fn() } as unknown as FormikHelpers<LoginFormValues>;

    await loginForm.submitLoginForm(values, formikHelpers);

    expect(formikHelpers.setSubmitting).toBeCalledWith(false);
  });
});
