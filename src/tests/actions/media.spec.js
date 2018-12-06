import { setMedia } from '../../actions/media';
import media from '../fixtures/media';
import { SET_MEDIA } from '../../actions/types';

describe('meida action object', () => {
    it('should setup the media action object', () => {
        const action = setMedia(media);
        expect(action).toEqual({
            type: SET_MEDIA,
            media
        })
    });
});