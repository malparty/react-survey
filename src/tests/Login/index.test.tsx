import { shallow } from 'enzyme';
import LoginScreen from '../../screens/Login';

describe('<LoginScreen />', () => {
  it('displays a sign in to Nimble message', () => {
    const signInText = 'Sign in to Nimble';

    const wrapper = shallow(<LoginScreen />);

    expect(wrapper.text()).toContain(signInText);
  });

  it('adds the screen class to body', () => {
    const screenClass = 'login-screen';

    shallow(<LoginScreen />);

    expect(document.body.classList).toContain(screenClass);
  });

  it('removes the screen class from body when unmounting', () => {
    const screenClass = 'login-screen';

    const wrapper = shallow(<LoginScreen />);
    wrapper.unmount();

    expect(document.body.classList).not.toContain(screenClass);
  });
});
