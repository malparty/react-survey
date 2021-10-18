import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders a BackgroundImage', () => {
    const app = render(<App />);

    expect(app.getByTestId('background-image')).toBeVisible();
  });
});
