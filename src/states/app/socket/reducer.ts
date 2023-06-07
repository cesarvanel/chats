
import { createSlice } from "@reduxjs/toolkit"; 
import { userState } from "../../../types/interface";


export const initialState : userState = {
    sesUser: null,
    loading: "0",
    conversations: {
        conversations: [],
        loading: false
    }
}


export const socketSlice = createSlice({
    name:'socket', 
    initialState:initialState, 
    reducers:{
        
    }



})