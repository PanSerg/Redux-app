import { api } from './api';

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        getRecipes: builder.query({
            query: () => '/',
        }),
        createRecipe: builder.mutation({
            query: recipe => ({
                body: recipe,
                url: '/',
                method: 'POST',
            }),
        }),
    })
})

export const { useCreateRecipeMutation } = recipeApi;