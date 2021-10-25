import nimbleLogo from '@assets/images/nimble-logo.png';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import LoginFormErrors from './Errors';
import { useTranslation } from 'react-i18next';

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('The provided email has an invalid format.').required('Please fill in the email.'),
  password: Yup.string()
    .min(8, 'The password should be at least 8 characters long.')
    .max(32, 'The password cannot be longer than 32 characters.')
    .required('Please fill in your password.')
});

const LoginForm = () => {
  const { t } = useTranslation();

  const submitLoginForm = async (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Will be replaced by API call in BackEnd Task

    console.log(JSON.stringify(values, null, 2)); // Will be replaced by authentication & redirection in BackEnd Task
    setSubmitting(false);
  };

  return (
    <div className="login-form">
      <img className="login-form__header-image" src={nimbleLogo} alt="Nimble Logo" />
      <div className="login-form__header-title">{t('login.title')}</div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={submitLoginForm}
        validationSchema={LoginSchema}
      >
        {(formData) => (
          <Form>
            <LoginFormErrors {...formData} />
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
};

export default LoginForm;
