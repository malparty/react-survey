import nimbleLogo from '@assets/images/nimble-logo.png';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import LoginFormErrors from './Errors';
import { useTranslation } from 'react-i18next';

export interface LoginFormValues {
  email: string;
  password: string;
}

export const submitLoginForm = async (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Will be replaced by API call in BackEnd Task

  console.log(JSON.stringify(values, null, 2)); // Will be replaced by authentication & redirection in BackEnd Task
  setSubmitting(false);
};

const LoginForm = () => {
  const { t } = useTranslation();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t('login.errors.email_invalid')).required(t('login.errors.email_required')),
    password: Yup.string()
      .min(8, t('login.errors.password_too_short'))
      .max(32, t('login.errors.password_too_long'))
      .required(t('login.errors.password_required')),
  });

  return (
    <div className="login-form">
      <img className="login-form__header-image" src={nimbleLogo} alt={t('login.nimble_logo_alt')} />
      <div className="login-form__header-title">{t('login.title')}</div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={submitLoginForm}
        validationSchema={LoginSchema}
      >
        {(formData) => (
          <Form>
            <LoginFormErrors {...formData} />
            <div className="login-form__field">
              <label className="login-form__label" htmlFor="email">
                {t('login.email')}
              </label>
              <Field className="login-form__input form-control" type="email" name="email" id="email" />
            </div>
            <div className="login-form__field">
              <label className="login-form__label" htmlFor="password">
                {t('login.password')}
              </label>
              <Field className="login-form__input form-control" type="password" name="password" id="password" />
            </div>
            <div className="login-form__field">
              <button className="btn btn-light" type="submit">
                {t('login.submit')}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
