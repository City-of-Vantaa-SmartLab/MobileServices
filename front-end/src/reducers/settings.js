import { TOGGLE_FEED, SET_NOTIFICATION_FILTER, NotificationFilters } from 'actions/actionTypes';

let initialState = {
    feeds: {
        Facebook: true,
        instagram: true,
        twitter: true,
        youtube: true,
    },
    notificationFilter: NotificationFilters.NEVER,
};

export function feeds(state = initialState.feeds, action) {
    switch (action.type) {
        case TOGGLE_FEED:
            return { ...state, [action.payload]: !state[action.payload] };
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
