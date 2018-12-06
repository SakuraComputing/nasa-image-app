import filtersReducer from '../../reducers/filtersReducer';
import { SET_TEXT_FILTER, SET_MEDIA_BY_IMAGE, SET_MEDIA_BY_AUDIO } from '../actions/types';


describe('filters reducer', () => {
    it('should set the text filter', () => {
        const state = filtersReducer(undefined, {
            type: SET_TEXT_FILTER,
            text: 'audio'
        });
        expect(state.text).toBe('test');
    });
    it('should set the media for audio', () => {
        const state = filtersReducer(undefined, {
            type: SET_MEDIA_BY_AUDIO,
            audio: 'audio'
        });
        expect(state.audio).toBe('audio');
    });
    it('should set the media for images', () => {
        const state = filtersReducer(undefined, {
            type: SET_MEDIA_BY_IMAGE,
            image: 'image'
        });
        expect(state.image).toBe('image');
    });
    
});