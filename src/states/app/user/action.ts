import { createAsyncThunk } from "@reduxjs/toolkit";
import { Conversations, User } from "../../../types/interface";
import { AxiosInstance } from "../../../api/axios-config";
import {
  CONVERSATION,
  USER_DATA_PROFILE,
} from "../../../utils/constant/constant";

export const getProfile = createAsyncThunk<User>(
  "user/get-profile",
  async (_, thunAPI) => {
    try {
      const response = await AxiosInstance.get(USER_DATA_PROFILE);
      return response.data;
    } catch (error) {
      thunAPI.rejectWithValue(error);
    }
  }
);

export const loadConversation = createAsyncThunk<Conversations[]>(
  "user/conversations",
  async (_, thunAPI) => {
    try {
      const response = await AxiosInstance.get(CONVERSATION);
      return response.data;
    } catch (error) {
      thunAPI.rejectWithValue(error);
    }
  }
);
