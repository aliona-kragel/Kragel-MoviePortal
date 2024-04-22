import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_API_URL } from '../constants';
import { GetMoviesParams, ResponceListType } from '../types/types';

export const moviesApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<ResponceListType, GetMoviesParams>({
      query: ({ page, limit }) =>
        `/?apikey=${API_KEY}&s=series&page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;