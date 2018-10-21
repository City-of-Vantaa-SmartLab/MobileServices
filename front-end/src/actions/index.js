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
    yield takeLatest(actions.SOURCES_FETCH_REQUEST, fetchSources);
    yield takeLatest(actions.FEED_FETCH_REQUEST, fetchFeed);
}

function* fetchFeed() {
    try {
        let filter, last_id;
        yield select((state) => {
            filter = Object.keys(state.feeds).filter((key) => state.feeds[key]);
            last_id = state.fetch.last;
        });
        const response = yield call(get, '/api/feeds', { type: filter, skip: last_id });
        const feed = yield response.json();
        console.log(feed);
        yield put({ type: actions.FEED_FETCH_SUCCESS, payload: feed });
    } catch (error) {
        yield put({ type: actions.FEED_FETCH_FAILED, payload: error });
    }
}

function* fetchSources() {
    try {
        const response = yield call(get, '/api/feeds/sources');
        const sources = yield response.json();
        console.log(sources);
        yield put({ type: actions.SOURCES_FETCH_SUCCESS, payload: sources });
    } catch (error) {
        yield put({ type: actions.SOURCES_FETCH_FAILED, payload: error });
    }
}
