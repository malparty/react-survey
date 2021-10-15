import { shallow } from 'enzyme';
import BackgroundImage from '../../../components/BackgroundImage';

describe('<BackgroundImage />', () => {
  it('renders a single image', () => {
    const wrapper = shallow(<BackgroundImage />);

    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('renders a role presentation image', () => {
    const wrapper = shallow(<BackgroundImage />);

    expect(wrapper.find('img').first().props().role).toEqual('presentation');
  });

  it('contains a non empty src attribute', () => {
    const wrapper = shallow(<BackgroundImage />);

    expect(wrapper.find('img').first().props().src).not.toBeUndefined();
    expect(wrapper.find('img').first().props().src).not.toEqual('');
  });
});
