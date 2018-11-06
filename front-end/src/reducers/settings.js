import {
    TOGGLE_FEED,
    SET_NOTIFICATION_FILTER,
    SOURCES_FETCH_SUCCESS,
    FEED_ACTIVATED,
    NotificationFilters,
} from 'actions/actionTypes';
import { SAVE_SCROLL_POSITION } from '../actions/actionTypes';

let initialState = {
    feedTypes: {},
    notificationFilter: NotificationFilters.NEVER,
};

export function feedTypes(state = initialState.feedTypes, action) {
    switch (action.type) {
        case TOGGLE_FEED:
            return { ...state, [action.payload]: !state[action.payload] };
        case SOURCES_FETCH_SUCCESS:
            return Object.values(action.payload.sources).reduce((acc, value) => {
                acc[value] = true;
                return acc;
            }, {});
        default:
            return state;
    }
}

export function notifications(state = initialState.notificationFilter, action) {
    switch (action.type) {
        case SET_NOTIFICATION_FILTER:
            return action.payload;
        default:
            return state;
    }
}

export function activated(state = false, action) {
    switch (action.type) {
        case FEED_ACTIVATED:
            return true;
        default:
            return state;
    }
}

export function scroll(state = 0, action) {
    switch (action.type) {
        case SAVE_SCROLL_POSITION:
            return action.payload;
        default:
            return state;
    }
}
