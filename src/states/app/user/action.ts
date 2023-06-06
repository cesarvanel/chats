import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../types/interface";
import { AxiosInstance } from "../../../api/axios-config";
import { USER_DATA_PROFILE } from "../../../utils/constant/constant";

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
