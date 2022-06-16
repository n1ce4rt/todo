import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import ThunkMiddleware from 'redux-thunk'
import { tasks_reducer } from "../reducers/tasks-reducer";
import { app_reducer } from "../reducers/app-reducer";

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducers = combineReducers( {
    tasks: tasks_reducer,
    status: app_reducer

});
export const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)
export type rootReducerType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store;