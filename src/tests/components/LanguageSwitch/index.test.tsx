import LanguageSwitch from '@src/components/LanguageSwitch';
import { render } from '@testing-library/react';

describe('LanguageSwitch', () => {
  it('correctly renders', () => {
    const languageSwitch = render(<LanguageSwitch />);

    expect(languageSwitch).toMatchSnapshot();
  });
});
