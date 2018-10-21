import { FEED_FETCH_REQUEST, FEED_FETCH_SUCCESS, FEED_FETCH_FAILED, TOGGLE_FEED } from 'actions/actionTypes';

const initialState = {
    loading: false,
    feed: [],
    last: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FEED_FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case FEED_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                feed: [...state.feed, ...action.payload],
                last: action.payload.slice(-1)[0].id,
            };
        case FEED_FETCH_FAILED:
            return { ...state, loading: false, error: action.payload };
        case TOGGLE_FEED:
            return { ...state, feed: [], last: null };
        default:
            return state;
    }
};
