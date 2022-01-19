import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// slices
import properties from 'redux/slices/properties'
import gallery from 'redux/slices/gallery'
import forum from 'redux/slices/forum'
import news from 'redux/slices/news'
import profile from 'redux/slices/profile'

import control from 'redux/slices/control';
import authJwt from 'redux/slices/authJwt';
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const authPersistConfig = {
  key: 'authJwt',
  storage,
  keyPrefix: 'redux-',
  blacklist: ['isAuthenticated']
};

const rootReducer = combineReducers({
  properties,
  gallery,
  forum,
  news,
  profile,
  control,
  authJwt:persistReducer(authPersistConfig, authJwt)
});

export { rootPersistConfig, rootReducer };
