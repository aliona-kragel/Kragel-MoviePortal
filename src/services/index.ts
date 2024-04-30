import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_API_URL } from '../constants';
import { GetMovieDetailsParams, GetMoviesParams, MovieDetailsTypes, MovieStaffTypes, ResponceListType } from '../types/types';

export const moviesApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: BASE_API_URL,
      prepareHeaders: (headers) => {
        headers.set('X-API-KEY', API_KEY);
        headers.set('Content-Type', 'application/json');
        return headers;
      },
    }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query<MovieDetailsTypes, GetMovieDetailsParams>({
      query: ({ selectedMovieID }) => `/v2.2/films/${selectedMovieID}`,
    }),
    getStaffDetails: builder.query<MovieStaffTypes[], GetMovieDetailsParams>({
      query: ({ selectedMovieID }) => `/v1/staff?filmId=${selectedMovieID}`,
    }),
    getMovies: builder.query<ResponceListType, GetMoviesParams>({
      query: ({ type, searchString, page }) => `/v2.2/films?page=${page}&type=${type}&keyword=${searchString}`,
    })
  })
});

export const { useGetMovieDetailsQuery, useGetStaffDetailsQuery, useGetMoviesQuery } = moviesApi;