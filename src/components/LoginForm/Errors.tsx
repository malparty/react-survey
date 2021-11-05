import { FormikProps } from 'formik';
import { LoginFormValues } from '.';
import BaseAlert from '../BaseAlert';

const LoginFormErrors = ({ errors, touched }: FormikProps<LoginFormValues>) => {
  const getErrorMessages = (): JSX.Element[] => {
    const errorMessages = Reflect.ownKeys(errors).map((key) => {
      return (
        Reflect.get(errors, key) &&
        Reflect.get(touched, key) && <div key={key.toString()}> {Reflect.get(errors, key)}</div>
      );
    });
    return errorMessages.filter((error) => error);
  };

  const errorMessages = getErrorMessages();

  return errorMessages.length > 0 ? <BaseAlert>{errorMessages}</BaseAlert> : null;
};

export default LoginFormErrors;
