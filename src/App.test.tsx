<<<<<<< HEAD
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
=======
import { shallow } from 'enzyme';

>>>>>>> c3b396d ([#6] Add test for LoginScreen component and improve test config)
=======
import { render } from '@testing-library/react';
>>>>>>> 87aac3e ([#6] Use react-testing-lib instead of enzyme for testing App and LoginScreen components)
import App from './App';

describe('<App />', () => {
  it('renders a BackgroundImage', () => {
    const app = render(<App />);

    expect(app.getByTestId('background-image')).toBeVisible();
  });
});
