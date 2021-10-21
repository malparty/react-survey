import { render } from '@testing-library/react';
import BaseAlert from '../../../components/BaseAlert';

describe('BaseAlert', () => {
  const BASE_ALERT_MESSAGE_TEST_ID = 'base-alert-message';
  const message = 'An alert message';

  it('correctly renders', () => {
    const baseAlert = render(<BaseAlert>{message}</BaseAlert>);

    expect(baseAlert).toMatchSnapshot();
  });

  it('displays the message', () => {
    const baseAlert = render(<BaseAlert>{message}</BaseAlert>);

    expect(baseAlert.getByTestId(BASE_ALERT_MESSAGE_TEST_ID)).toHaveTextContent(message);
  });
});
