import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:5173/';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getRecipes: builder.query({
            query: () => '/',
        }),
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST',
            }),
        }),
    }),
});

// export const {} = api;