import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../components/LandingPage';
import media from '../fixtures/media';

describe('LandingPage', () => {

    let landingPage;
    
    beforeEach(() => {
        const getMedia = jest.fn();
        const items = jest.fn();
        landingPage = shallow((<LandingPage getMedia={getMedia} media={items}/>));
    })
    it('should render correctly', () => {
        expect(landingPage).toMatchSnapshot();
    });
    it('should set the initial `state`', () => {
        expect(landingPage.state()).toEqual({
            media: [],
            searchString: '',
            imageChecked: false,
            audioChecked: false,
            videoChecked: false
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
    describe('when selcecting the checkboxes', () => {
        const imageChecked = false;
        it('should set the state when the image checkbox is selected', () => {
            landingPage.find('#images').simulate('change', {
                target: { value: imageChecked } 
            })
            expect(landingPage.state().imageChecked).toBe(true);
        });
        const audioChecked = false;
        it('should set the state when the audio checkbox is selected', () => {
            landingPage.find('#audio').simulate('change', {
                target: { value: audioChecked } 
            })
            expect(landingPage.state().audioChecked).toBe(true);
        });
    });
});