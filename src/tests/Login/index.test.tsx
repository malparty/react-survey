import { render } from '@testing-library/react';
import LoginScreen from '@src/screens/Login';

describe('LoginScreen', () => {
  const screenClass = 'login-screen';

  it('displays a sign in to Nimble message', () => {
    const loginScreen = render(<LoginScreen />);

    expect(loginScreen.getByText('login.title')).toBeVisible();
  });

  it('adds the screen class to body', () => {
    render(<LoginScreen />);

    expect(document.body.classList).toContain(screenClass);
  });

  it('removes the screen class from body when unmounting', () => {
    const loginScreen = render(<LoginScreen />);
    loginScreen.unmount();

    expect(document.body.classList).not.toContain(screenClass);
  });
});
