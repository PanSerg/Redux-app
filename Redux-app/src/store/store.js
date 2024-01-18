import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducers } from "./favorites/favorites.slice";

const reducers = combineReducers({
    favorites: favoritesReducers,
});

export const store = configureStore({
    reducer: reducers,
    devTools: true,
})