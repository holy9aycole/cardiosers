import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// slices
import properties from 'redux/slices/properties';
import gallery from 'redux/slices/gallery';
import forum from 'redux/slices/forum';
import profile from 'redux/slices/profile';
import branding from 'redux/slices/branding';
import category from 'redux/slices/category';
import control from 'redux/slices/control';
import newsFeed from 'redux/slices/newsFeed';
import location from 'redux/slices/location';
import authJwt from 'redux/slices/authJwt';
import patient from 'redux/slices/patient';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const authPersistConfig = {
  key: 'authJwt',
  storage,
  keyPrefix: 'redux-',
};

const rootReducer = combineReducers({
  properties,
  gallery,
  forum,
  profile,
  control,
  branding,
  category,
  newsFeed,
  location,
  patient,
  authJwt: persistReducer(authPersistConfig, authJwt),
});

export { rootPersistConfig, rootReducer };
