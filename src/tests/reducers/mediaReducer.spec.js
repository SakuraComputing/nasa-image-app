import mediaReducer from '../../reducers/mediaReducer';
import media from '../fixtures/media';
import { SET_MEDIA } from '../../actions/types';

describe('Media reducer', () => {
    it('should set the default state', () => {
        const state = mediaReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual([]);
    });
    it('should set the medua data', () => {
        const action = {
            type: SET_MEDIA,
            media
        }
        const state = mediaReducer(media, action);
        expect(state).toEqual(media); 
    });
});