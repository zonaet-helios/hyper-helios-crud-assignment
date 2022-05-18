import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from '../redux/slices/contactsSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import rootReducers from './combineReducer';

const persistConfig = {
     key: 'root',
     storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);


export const store=configureStore({
     reducer: persistedReducer
});


export let persistor = persistStore(store);