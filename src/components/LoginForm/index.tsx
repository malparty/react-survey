import { PureComponent } from 'react';
import nimbleLogo from '@assets/images/nimble-logo.png';
import { Formik, Field, Form, FormikHelpers, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';
import BaseAlert from '../BaseAlert';

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('The provided email has an invalid format.').required('Please fill in the email'),
  password: Yup.string()
    .min(8, 'Passwords are at least 8 chars.')
    .max(32, 'Password cannot be longer than 32 chars.')
    .required('Please fill in your password')
});

export default class LoginForm extends PureComponent {
  async submitLoginForm(values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Will be replaced by API call in BackEnd Task

    alert(JSON.stringify(values, null, 2)); // Will be replaced by authentication & redirection in BackEnd Task
    setSubmitting(false);
  }

  hasError(errors: FormikErrors<LoginFormValues>, touched: FormikTouched<LoginFormValues>): boolean {
    return Reflect.ownKeys(errors).some((key) => Reflect.get(errors, key) && Reflect.get(touched, key));
  }

  render() {
    return (
      <div className="login-form">
        <img className="login-form__header-image" src={nimbleLogo} alt="Nimble Logo" />
        <div className="login-form__header-title">Sign in to Nimble</div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={this.submitLoginForm}
          validationSchema={LoginSchema}
        >
          {({ errors, touched }) => (
            <Form>
              {this.hasError(errors, touched) && (
                <BaseAlert>
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  {errors.password && touched.password ? <div>{errors.password}</div> : null}
                </BaseAlert>
              )}
              <div className="login-form__field">
                <label className="login-form__label" htmlFor="email">
                  Email
                </label>
                <Field className="login-form__input form-control" type="email" name="email" id="email" />
              </div>
              <div className="login-form__field">
                <label className="login-form__label" htmlFor="password">
                  Password
                </label>
                <Field className="login-form__input form-control" type="password" name="password" id="password" />
              </div>
              <div className="login-form__field">
                <button className="btn btn-light" type="submit">
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
