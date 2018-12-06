import { SET_TEXT_FILTER, SET_MEDIA_BY_AUDIO, SET_MEDIA_BY_IMAGE } from '../actions/types';

const defaultFiltersReducerState = {
    text: '',
    audio: [],
    image: []
};
export default (state = defaultFiltersReducerState, action) => {
    switch (action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            }
        case SET_MEDIA_BY_AUDIO:
            return {
                ...state,
                audio: action.audio
            }
        case SET_MEDIA_BY_IMAGE:
            return {
                ...state,
                image: action.image
            }
        default:
            return state;
    }
}