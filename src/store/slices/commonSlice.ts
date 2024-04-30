import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommonSliceTypes, UserDataTypes } from "../../types/types";

const initialState: CommonSliceTypes = {
  userData: {
    email: "",
    password: ""
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserDataTypes>) => {
      state.userData = action.payload;
    },
  }
})

export default commonSlice;