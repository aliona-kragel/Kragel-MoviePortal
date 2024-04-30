import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import movieSlice from "../store/slices/movieSlice";

const useMovieActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(movieSlice.actions, dispatch),
    [dispatch]
  )
}

export default useMovieActions;