import { combineReducers } from 'redux';

import i18n from './i18n';
import { feeds, notifications } from './settings';

const rootReducer = combineReducers({
  i18n,
  feeds,
  notifications,
});

export default rootReducer;
