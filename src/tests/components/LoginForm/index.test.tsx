import { render } from '@testing-library/react';
import LoginForm, { LoginFormValues, submitLoginForm } from '@src/components/LoginForm';
import { FormikHelpers } from 'formik';

describe('LoginForm', () => {
  it('correctly renders', () => {
    const loginForm = render(<LoginForm />);

    expect(loginForm).toMatchSnapshot();
  });

  it('displays an email field with its label', () => {
    const loginForm = render(<LoginForm />);
    expect(loginForm.getByLabelText('login.email')).toBeVisible();
  });

  it('displays a password field with its label', () => {
    const loginForm = render(<LoginForm />);

    expect(loginForm.getByLabelText('login.password')).toBeVisible();
  });

  it('displays a Sign In button', () => {
    const loginForm = render(<LoginForm />);

    expect(loginForm.getByText('login.title')).toBeVisible();
  });

  it('calls the setSubmitting callback after submitLoginForn is called', async () => {
    const values = { email: 'test@email.com', password: '012345678' };

    const formikHelpers = { setSubmitting: jest.fn() } as unknown as FormikHelpers<LoginFormValues>;

    await submitLoginForm(values, formikHelpers);

    expect(formikHelpers.setSubmitting).toBeCalledWith(false);
  });
});
