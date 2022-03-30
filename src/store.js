import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'
import user from './features/user.feature';
import adminRoute from './features/admin.route';

const rootReducer = combineReducers({
  user,
  adminRoute
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export default store;
