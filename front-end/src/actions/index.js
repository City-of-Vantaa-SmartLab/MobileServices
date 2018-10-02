import * as actions from './actionTypes';

export const changeLanguage = (lang) => {
    return {
        type: actions.CHANGE_LANGUAGE,
        lang,
    };
};