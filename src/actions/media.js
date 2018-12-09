import { SET_MEDIA, GET_MEDIA, GET_ASSET } from '../actions/types';
import axios from 'axios';

export const setMedia = (media) => ({
    type: SET_MEDIA,
    media
});

export const getMedia = (searchString, media_type) => dispatch => {

    let searchUri;

    if(media_type) {
        searchUri = `https://images-api.nasa.gov/search?q=${searchString}&media_type=${media_type}`;
    } else {
        searchUri = `https://images-api.nasa.gov/search?q=${searchString}`;
    }
    axios.get(searchUri)
    .then(res => 
        dispatch({
            type: GET_MEDIA,
            payload: res.data
        })
    )
    .catch(err => console.log(err));
}

export const getAsset = ( asset_id ) => dispatch => {

    let searchAssetUri = `https://images-api.nasa.gov/asset/${asset_id}`;
    axios.get(searchAssetUri)
    .then(res => 
        dispatch({
            type: GET_ASSET,
            payload: res.data
        })
    )
    .catch(err => console.log(err));

}
