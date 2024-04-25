import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieSliceTypes, ResponceListType } from "../../types/types";

const initialState: MovieSliceTypes = {
  selectedMovieID: null,
  movieList: undefined,
  isDataLoading: true
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<number | null>) => {
      state.selectedMovieID = action.payload;
    },
    setMovieList: (state, action: PayloadAction<ResponceListType | undefined>) => {
      state.movieList = action.payload;
    },
    setIsDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    },
  }
})

export default movieSlice;