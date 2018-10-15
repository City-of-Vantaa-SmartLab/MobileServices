import * as actions from './actionTypes';
import get from 'apis';
import { takeLatest, call, put, select } from 'redux-saga/effects';

export const toggleFeed = (feedType) => {
    return {
        type: actions.TOGGLE_FEED,
        payload: feedType,
    };
};

export const changeLanguage = (lang) => {
    return {
        type: actions.CHANGE_LANGUAGE,
        payload: lang,
    };
};

export const setNotificationFilter = (filterType) => {
    return {
        type: actions.SET_NOTIFICATION_FILTER,
        payload: filterType,
    };
};

export function* watcher() {
    yield takeLatest(actions.FETCH_REQUEST, fetchFeed);
}

function* fetchFeed(params) {
    try {
        let filter, last_id;
        yield select((state) => {
            filter = Object.keys(state.feeds).filter((key) => state.feeds[key]);
            last_id = state.fetch.last;
        });
        const response = yield call(get, '/api/feeds', { type: filter, last_id: last_id });
        const feed = yield response.json();
        console.log(feed);

        yield put({ type: actions.FETCH_SUCCESS, payload: feed });
    } catch (error) {
        yield put({ type: actions.FETCH_FAILED, payload: error });
    }
}
