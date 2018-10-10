import * as actions from './actionTypes';
import get from 'apis';
import { takeLatest, call, put } from 'redux-saga/effects';

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

export function* watcher() {
    yield takeLatest(actions.FETCH_REQUEST, fetchFeed);
}

function* fetchFeed() {
    try {
        const response = yield call(get, '/api/feeds');
        const feed = yield response.json();

        yield put({ type: actions.FETCH_SUCCESS, feed });
    } catch (error) {
        yield put({ type: actions.FETCH_FAILED, error });
    }
}



