import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userState, SignInType, User } from "../../../types/interface";
import { RootState } from "../../stores/stores";
import { getProfile } from "./action";

export const initialState: userState = {
  tokens: null,
  sesUser: null,
  loading: "0",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<SignInType>) => {
      state.tokens = action.payload.tokens;
      state.sesUser = action.payload.user;
      state.loading = "1";
    },

    logout: (state) => {
      state.tokens = null;
      state.sesUser = null;
    },

    setSesUser: (state, action: PayloadAction<User>) => {
      state.sesUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    // offres builders
    builder.addCase(getProfile.pending, (state) => {
      state.loading = "0";
      state.sesUser = null;
    });

    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = "1";
      state.sesUser = action.payload;
    });
  },
});

export const selectCurrentUser = (state: RootState) => state.sesUser;

export const selectTokens = (state: RootState) => state.tokens;
