import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Breadcrumb, { BreadcrumbProps } from './breadcrumb';

Enzyme.configure({ adapter: new Adapter() });

const crumbs: BreadcrumbProps = {
  region: 'England',
  crumbs: ['page 1', 'page 2']
};

describe('<Breadcrumb />', () => {
  it('renders correctly', () => {
    const component = shallow(<Breadcrumb crumbs={crumbs} />);
    expect(component).toMatchSnapshot();
  });
});
