import {render} from '@testing-library/react'
import BackgroundImage from '../../../components/BackgroundImage';

describe('<BackgroundImage />', () => {
  it('renders a single image', () => {
    const backgroundImage = render(<BackgroundImage />);

    expect(backgroundImage.getAllByTestId('background-image')).toHaveLength(1);
  });

  it('renders a role presentation image', () => {
    const backgroundImage = render(<BackgroundImage />);

    expect(backgroundImage.getByTestId('background-image')).toHaveAttribute('role', 'presentation');
  });

  it('contains a non empty src attribute', () => {
    const backgroundImage = render(<BackgroundImage />);
    const image = backgroundImage.getByTestId('background-image');

    expect(image).toHaveAttribute('src', expect.stringMatching(/.+/));
  });
});
