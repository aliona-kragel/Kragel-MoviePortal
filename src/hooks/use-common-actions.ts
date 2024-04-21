import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import commonSlice from "../store/slices/commonSlice";

const useCommonActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(commonSlice.actions, dispatch),
    [dispatch]
  )
}

export default useCommonActions;