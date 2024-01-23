import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducers } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";

const reducers = combineReducers({
    favorites: favoritesReducers,
    user: userSlice.reducer,
});

export const store = configureStore({
    reducer: reducers,
    devTools: true,
})