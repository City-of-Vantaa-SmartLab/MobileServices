import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED } from 'actions/actionTypes';

const initialState = {
    loading: false,
    feed: [],
    last: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                feed: [...state.feed, ...action.payload],
                last: action.payload.slice(-1)[0].id,
            };
        case FETCH_FAILED:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
