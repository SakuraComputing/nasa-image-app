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
    describe('when typing into the input box', () => {
        const searchString = 'challenger';
        it('should accept input', () => {
            landingPage.find('.search-input').simulate('change',
                { target: { value: searchString }}
            )
            expect(landingPage.state().searchText).toEqual(searchString);
        });
    });
});