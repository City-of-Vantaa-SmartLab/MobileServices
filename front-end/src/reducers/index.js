import { combineReducers } from 'redux';

import i18n from './i18n';
import * as settings from './settings';
import * as fetch from './fetch';

const rootReducer = combineReducers({
    i18n,
    ...fetch,
    ...settings,
});

export default rootReducer;
