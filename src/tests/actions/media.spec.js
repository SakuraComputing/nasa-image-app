import { setMedia, getMedia, getAsset } from '../../actions/media';
import media from '../fixtures/media';
import { SET_MEDIA, GET_MEDIA, GET_ASSET } from '../../actions/types';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

describe('media action object', () => {

    let mockAxios;
    let store;

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

    beforeEach(() => {
        mockAxios = new MockAdapter(Axios)
        const mockStore = configureMockStore();
        store = mockStore({});
    });

    afterEach(() => {
        mockAxios.reset();
    });

    it('should get all media from the api', async () => {
        // Given 
        const searchString = 'Apollo';
        mockAxios.onGet(`https://images-api.nasa.gov/search?q=${searchString}`).reply(200, {
            test: 'API Media'
        });
    
        // When
        getMedia(searchString)(store.dispatch);
        await flushAllPromises();
    
        // Then
        expect(store.getActions()).toEqual([
            { payload: { test: 'API Media'} , type: GET_MEDIA } 
        ])            
    });
    it('should get specified media from the api', async () => {
        // Given 
        const searchString = 'moon';
        const media_type = 'image'
        mockAxios.onGet(`https://images-api.nasa.gov/search?q=${searchString}&media_type=${media_type}`).reply(200, {
            test: 'API Media'
        });
    
        // When
        getMedia(searchString, media_type)(store.dispatch);
        await flushAllPromises();
    
        // Then
        expect(store.getActions()).toEqual([
            { payload: { test: 'API Media'} , type: GET_MEDIA } 
        ])            
    });

    it('should get the asset via nasa_id', async () => {
        const asset_id = 'S69-454377';
        mockAxios.onGet(`https://images-api.nasa.gov/asset/${asset_id}`).reply(200, {
            asset: 'test'
        });
        getAsset(asset_id)(store.dispatch);
        await flushAllPromises();

        expect(store.getActions()).toEqual([
            { payload: { asset: 'test'}, type: GET_ASSET }
        ])
    });

    it('should setup the media action object', () => {
        const action = setMedia(media);
        expect(action).toEqual({
            type: SET_MEDIA,
            media
        })
    });
    it('should get media when a request is made', () => {
        
    });
});