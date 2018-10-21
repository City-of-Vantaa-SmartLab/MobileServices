import { TOGGLE_FEED, SET_NOTIFICATION_FILTER, LOAD_SOURCES, NotificationFilters } from 'actions/actionTypes';

let initialState = {
    feeds: {},
    notificationFilter: NotificationFilters.NEVER,
};

export function feeds(state = initialState.feeds, action) {
    switch (action.type) {
        case TOGGLE_FEED:
            return { ...state, [action.payload]: !state[action.payload] };
        case LOAD_SOURCES:
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
