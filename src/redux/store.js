import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice';
import { filtersReducer } from './filterSlice';
import sessionStorage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { favoritesReducer } from './favoritesSlice';


const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['favorites'],
};

const rootReducer = combineReducers({
    campers: campersReducer,
    filter: filtersReducer,
    favorites: favoritesReducer,
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