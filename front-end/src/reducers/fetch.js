import * as actions from 'actions/actionTypes';

const initialState = {
    feeds: {
        loading: false,
        data: [],
        last: null,
        error: null,
    },
    carousel: {
        loading: false,
        facts: [],
        images: [],
        error: null,
    },
};

export function feed(state = initialState.feeds, action) {
    switch (action.type) {
        case actions.FEED_FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case actions.FEED_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, ...action.payload],
                last: action.payload.slice(-1)[0].id,
            };
        case actions.FEED_FETCH_FAILED:
            return { ...state, loading: false, error: action.payload };
        case actions.TOGGLE_FEED:
            return { ...state, data: [], last: null };
        case actions.CHANGE_LANGUAGE:
            return { ...state, data: [], last: null };
        default:
            return state;
    }
}

export function carousel(state = initialState.carousel, action) {
    switch (action.type) {
        case actions.FACTS_FETCH_REQUEST:
            return { ...state, loading: true, error: null };
        case actions.FACTS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                facts: action.payload.facts,
                images: action.payload.images,
            };
        case actions.FACTS_FETCH_FAILED:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
