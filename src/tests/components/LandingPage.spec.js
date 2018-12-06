import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../components/LandingPage';

describe('LandingPage', () => {

    let landingPage;
    
    beforeEach(() => {
        landingPage = shallow((<LandingPage />));
    })
    it('should render correctly', () => {
        expect(landingPage).toMatchSnapshot();
    });
    it('should set the initial `state`', () => {
        expect(landingPage.state()).toEqual({
            media: [],
            searchString: ''
        })
    });
});