import { SET_MEDIA } from '../actions/types';

const defaultMediaReducerState = [];

export default (state = defaultMediaReducerState, action) => {
    switch (action.type) {
        case SET_MEDIA:
            return action.media;
        default:
            return state;
    }
}

