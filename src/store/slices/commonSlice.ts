import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommonTypes, UserDataTypes } from "../../types/types";

const initialState: CommonTypes = {
  userData: {
    email: "",
    password: ""
  },
  isLoggedIn: null,
  accessToken: null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserDataTypes>) => {
      state.userData = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  }
})

export default commonSlice;