import { setMedia, getMedia } from '../../actions/media';
import media from '../fixtures/media';
import { SET_MEDIA, GET_MEDIA } from '../../actions/types';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';


describe('meida action object', () => {

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

    it('should get media from the api', async () => {
        // Given 
        mockAxios.onGet('/api/uploads/all').reply(200, {
            test: 'API Media'
        });
    
        // When
        getMedia()(store.dispatch);
        await flushAllPromises();
    
        // Then
        expect(store.getActions()).toEqual([
            { payload: { test: 'API Media'} , type: GET_MEDIA } 
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