import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userState, User, Conversations } from "../../../types/interface";
import { getProfile, loadConversation } from "./action";

export const initialState: userState = {
  sesUser: null,
  loading: "0",
  conversations: {
    conversations: [],
    loading: false,
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setSesUser: (state, action: PayloadAction<User>) => {
      state.sesUser = action.payload;
    },

    setConversation: (state, action: PayloadAction<Conversations[]>) => {
      state.conversations.loading = true;
      state.conversations.conversations = action.payload;
    },

    logout: (state) => {
      state.loading = "0";
      state.sesUser = null;
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

    builder.addCase(loadConversation.pending, (state) => {
      state.conversations.loading = false;
    });

    builder.addCase(loadConversation.fulfilled, (state, action) => {
      state.conversations.loading = true;
      state.conversations.conversations = action.payload;
    });
  },
});
