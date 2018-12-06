import { SET_MEDIA, GET_MEDIA } from '../actions/types';
import axios from 'axios';

export const setMedia = (media) => ({
    type: SET_MEDIA,
    media
});

export const getMedia = (searchString) => dispatch => {
    axios.get(`https://images-api.nasa.gov/search?q=${searchString}&media_type=image`)
    .then(res => 
        dispatch({
            type: GET_MEDIA,
            payload: res.data
        })
    )
    .catch(err => console.log(err));
}
