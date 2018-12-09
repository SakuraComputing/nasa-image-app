import mediaReducer from '../../reducers/mediaReducer';
import media from '../fixtures/media';
import { SET_MEDIA, GET_MEDIA, GET_ASSET } from '../../actions/types';

describe('Media reducer', () => {
    it('should set the default state', () => {
        const state = mediaReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual([]);
    });
    it('should set the media data', () => {
        const action = {
            type: SET_MEDIA,
            media
        }
        const state = mediaReducer(media, action);
        expect(state).toEqual(media); 
    });
    it('should get the media data', () => {
        const media = {
            title: 'voyager',
            description: 'The original voyager',
            image: 'https://test'
        }
        const action = {
            type: GET_MEDIA,
            media
        }
        const state = mediaReducer(media, action);
        expect(state).toEqual(media);
    });
    it('should get the asset data', () => {
        const asset = {
            href: 'https://test-image'
        }
        const action = {
            type: GET_ASSET,
            asset
        }
        const state = mediaReducer(asset, action);
        expect(state).toEqual(asset);
    });
});