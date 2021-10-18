import { render } from '@testing-library/react';
import LoginScreen from '../../screens/Login';

describe('<LoginScreen />', () => {
  it('displays a sign in to Nimble message', () => {
    const signInText = 'Sign in to Nimble';

    const loginScreen = render(<LoginScreen />);

    expect(loginScreen.getByText(signInText)).toBeVisible();
  });

  it('adds the screen class to body', () => {
    const screenClass = 'login-screen';

    render(<LoginScreen />);

    expect(document.body.classList).toContain(screenClass);
  });

  it('removes the screen class from body when unmounting', () => {
    const screenClass = 'login-screen';

    const loginScreen = render(<LoginScreen />);
    loginScreen.unmount();

    expect(document.body.classList).not.toContain(screenClass);
  });
});
