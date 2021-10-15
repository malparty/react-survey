import { render, screen } from '@testing-library/react';
import App from './App';
import BackgroundImage from './components/BackgroundImage';
import LoginScreen from './screens/Login';

describe('<App />', () => {
  it('renders 2 children (the BackgroundImage and the screen)', () => {
    const app = shallow(<App />).render()[0];

    expect(app.children).toHaveLength(2);
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
