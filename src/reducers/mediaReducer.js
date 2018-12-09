import { SET_MEDIA, GET_MEDIA, GET_ASSET } from '../actions/types';

const defaultMediaReducerState = [];

export default (state = defaultMediaReducerState, action) => {
    switch (action.type) {
        case SET_MEDIA:
            return action.media;
        case GET_MEDIA:
            return {
                ...state,
                media: action.payload
            }
        case GET_ASSET:
            return {
                ...state,
                asset: action.payload
            }
        default:
            return state;
    }
}

