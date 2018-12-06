import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';

describe('LandingPage', () => {
    it('should render correctly', () => {
        const wrapper = shallow((<LandingPage />));
        expect(wrapper).toMatchSnapshot();
    });
});