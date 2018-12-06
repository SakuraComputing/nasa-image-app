import { setTextFilter, setMediaByImage, setMediaByAudio } from '../../actions/filter';
import { SET_TEXT_FILTER, SET_MEDIA_BY_AUDIO, SET_MEDIA_BY_IMAGE} from '../../actions/types';

describe('Filter action object', () => {
    it('should set up the text filter object', () => {
        const action = setTextFilter('moon');
        expect(action).toEqual({
            type: SET_TEXT_FILTER,
            text: 'moon'
        })
    });
    it('should set the set by audio object', () => {
        const action = setMediaByAudio('audio')
        expect(action).toEqual({
            type: SET_MEDIA_BY_AUDIO,
            audio: 'audio'
        });
    });
    it('should set the set by immage object', () => {
        const action = setMediaByImage('image');
        expect(action).toEqual({
            type: SET_MEDIA_BY_IMAGE,
            image: 'image'
        })
    });
});