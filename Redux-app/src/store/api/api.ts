import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRecipe } from "../../types/recipe.types";

const API_URL = "http://localhost:5173/resipes";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipe[], null>({
      query: () => "/?_sort=id&_order=desc",
      providesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
    createRecipe: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetRecipesQuery } = api;
