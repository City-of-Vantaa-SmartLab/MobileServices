import { TOGGLE_FEED, SET_NOTIFICATION_FILTER, NotificationFilters } from 'actions/actionTypes';

let initialState = {
        feeds: {
                facebook: true,
                instagram: true,
                twitter: true,
                youtube: true,
        },
        notificationFilter: NotificationFilters.NEVER,        
};

export function feeds (state = initialState.feeds, action) {
    switch (action.type) {
        case TOGGLE_FEED:
                return Object.assign({}, state, {[action.feedType]: !state[action.feedType]} );
        default:
            return state;
    }
};

export function notifications (state = initialState.notificationFilter, action) {
        switch (action.type) {
            case SET_NOTIFICATION_FILTER:
                    return action.filter;
            default:
                return state;
        }
    };