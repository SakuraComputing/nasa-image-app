import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../components/LandingPage';

describe('LandingPage', () => {

    let landingPage;
    
    beforeEach(() => {
        const getMedia = jest.fn();
        landingPage = shallow((<LandingPage getMedia={getMedia} />));
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
            landingPage.find('.input-box').simulate('change',
                { target: { value: searchString }}
            )
            expect(landingPage.state().searchString).toEqual(searchString);
        });
    });
});