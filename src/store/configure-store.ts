import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import commonSlice from './slices/commonSlice';
import { createBrowserHistory } from 'history';
import { moviesApi } from '../services';

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch) 
