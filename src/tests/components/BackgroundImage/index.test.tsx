import { render } from '@testing-library/react';
import BackgroundImage from '../../../components/BackgroundImage';

describe('BackgroundImage', () => {
  const backgroundImageTestId = 'background-image';

  it('renders a single image', () => {
    const backgroundImage = render(<BackgroundImage />);

    expect(backgroundImage.getAllByTestId(backgroundImageTestId)).toHaveLength(1);
  });

  it('renders a role presentation image', () => {
    const backgroundImage = render(<BackgroundImage />);

    expect(backgroundImage.getByTestId(backgroundImageTestId)).toHaveAttribute('role', 'presentation');
  });

  it('contains a non empty src attribute', () => {
    const backgroundImage = render(<BackgroundImage />);
    const image = backgroundImage.getByTestId(backgroundImageTestId);

    expect(image).toHaveAttribute('src', expect.stringMatching(/.+/));
  });
});
