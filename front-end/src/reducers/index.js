import { combineReducers } from 'redux';

import i18n from './i18n';
import { feeds, notifications } from './settings';
import fetch from './fetch';

const rootReducer = combineReducers({
  i18n,
  feeds,
  notifications,
  fetch,
});

export default rootReducer;
