import { SET_MEDIA, GET_MEDIA } from '../actions/types';
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
