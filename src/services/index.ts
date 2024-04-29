import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_API_URL } from '../constants';
import { GetMovieDetailsParams, GetMoviesByNameParams, GetMoviesByTypeParams, GetMoviesParams, MovieDetailsTypes, MovieStaffTypes, ResponceListType } from '../types/types';

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
    getMovies: builder.query<ResponceListType, GetMoviesParams>({
      query: ({ page }) => `/v2.2/films?page=${page}`,
    }),
    getMovieDetails: builder.query<MovieDetailsTypes, GetMovieDetailsParams>({
      query: ({ selectedMovieID }) => `/v2.2/films/${selectedMovieID}`,
    }),
    getStaffDetails: builder.query<MovieStaffTypes[], GetMovieDetailsParams>({
      query: ({ selectedMovieID }) => `/v1/staff?filmId=${selectedMovieID}`,
    }),
    getMovieByName: builder.query<ResponceListType, GetMoviesByNameParams>({
      query: ({ searchString, page }) => `/v2.2/films?keyword=${searchString}&page=${page}`,
    }),
    getMovieByType: builder.query<ResponceListType, GetMoviesByTypeParams>({
      query: ({ type, page }) => `/v2.2/films?type=${type}&page=${page}`,
    })
  })
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery, useGetStaffDetailsQuery, useGetMovieByNameQuery, useGetMovieByTypeQuery } = moviesApi;