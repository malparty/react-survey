<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
=======
import { shallow } from 'enzyme';

>>>>>>> c3b396d ([#6] Add test for LoginScreen component and improve test config)
import App from './App';
import BackgroundImage from './components/BackgroundImage';
import LoginScreen from './screens/Login';

describe('<App />', () => {
  it('renders 2 children (the BackgroundImage and the screen)', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.children()).toHaveLength(2);
  });

  it('renders a BackgroundImage', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(BackgroundImage)).toBeDefined();
  });

  it('renders a LoginScreen', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(LoginScreen)).toBeDefined();
  });
});
