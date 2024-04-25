import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import commonSlice from './slices/commonSlice';
import { moviesApi } from '../services';
import movieSlice from './slices/movieSlice';

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    movie: movieSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch) 
