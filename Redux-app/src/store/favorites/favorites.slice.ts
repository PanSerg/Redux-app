import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState:IRecipe[] = [];

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
            const isExists = state.some(r => r.id === recipe.id)

            if (isExists) {
                const index = state.
                    findIndex(item => item.id === recipe.id)
                // state = state.filter(r => r.id !== recipe.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            } else
                state.push(recipe)
        }
    }
});

export const { actions, reducer } = favoriteSlice;