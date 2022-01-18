import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

// slices
import properties from 'redux/slices/properties'
import gallery from 'redux/slices/gallery'
import forum from 'redux/slices/forum'
import news from 'redux/slices/news'
import profile from 'redux/slices/profile'

import control from 'redux/slices/control';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  properties,
  gallery,
  forum,
  news,
  profile,
  control
});

export { rootPersistConfig, rootReducer };
