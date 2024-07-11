import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { vehiclesSlice } from './vehicles/vehicles.slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'react_test',
  storage,
  whitelist: ['vehicles'],
};

const rootReducer = combineReducers({
  vehicles: vehiclesSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type TypeRootSate = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
