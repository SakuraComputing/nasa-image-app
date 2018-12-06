import { SET_TEXT_FILTER, SET_MEDIA_BY_IMAGE, SET_MEDIA_BY_AUDIO } from './types';

export const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    text
});

export const setMediaByAudio = ( audio = '') => ({
    type: SET_MEDIA_BY_AUDIO,
    audio
});

export const setMediaByImage = ( image = '') => ({
    type: SET_MEDIA_BY_IMAGE,
    image
});