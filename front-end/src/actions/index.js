import * as actions from './actionTypes';
import get from 'apis';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { saveLang } from 'utils/utils';

export const toggleFeed = (feedType) => {
    return {
        type: actions.TOGGLE_FEED,
        payload: feedType,
    };
};

export const changeLanguage = (lang) => {
    saveLang(lang);
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
    yield takeLatest(actions.FACTS_FETCH_REQUEST, fetchFacts);
    yield takeLatest(actions.SOURCES_FETCH_REQUEST, fetchSources);
    yield takeLatest(actions.FEED_FETCH_REQUEST, fetchFeed);
}

function* fetchFeed() {
    try {
        let filter, last_id, lang;
        yield select((state) => {
            filter = Object.keys(state.feedTypes).filter((key) => state.feedTypes[key]);
            last_id = state.feed.last;
            lang = state.i18n.locale;
        });
        const response = yield call(get, '/api/feeds', { type: filter, skip: last_id, lang: lang });
        const feed = yield response.json();

        if (feed.length !== 0) {
            yield put({ type: actions.FEED_FETCH_SUCCESS, payload: feed });
        } else {
            yield put({ type: actions.FEED_FETCH_FAILED, payload: 1 });
        }
    } catch (error) {
        console.log(error);
        yield put({ type: actions.FEED_FETCH_FAILED, payload: error });
    }
}

function* fetchSources() {
    try {
        const response = yield call(get, '/api/feeds/sources');
        const data = yield response.json();
        // console.log(data);
        yield put({ type: actions.SOURCES_FETCH_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: actions.SOURCES_FETCH_FAILED, payload: error });
    }
}

function* fetchFacts() {
    try {
        const response = yield call(get, '/api/facts');
        const facts = yield response.json();
        // console.log(facts);
        yield put({ type: actions.FACTS_FETCH_SUCCESS, payload: facts });
    } catch (error) {
        yield put({ type: actions.FACTS_FETCH_FAILED, payload: error });
    }
}
