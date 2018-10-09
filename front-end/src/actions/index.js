import * as actions from './actionTypes';

export const toggleFeed = (feedType) => {
    return {
        type: actions.TOGGLE_FEED,
        feedType,
    };
}; 

export const changeLanguage = (lang) => {
    return {
        type: actions.CHANGE_LANGUAGE,
        lang,
    };
};

export const setNotificationFilter = (filter) => {
    return {
        type: actions.SET_NOTIFICATION_FILTER,
        filter,
    };
};

