

import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../app/user/reducer'
import SocketManager from '../app/socket/socket-manager';
import { LocalStorageManager } from '../../utils/localStorage/localStorage';
import { SocketEvent } from '../../types/interface';
const token = LocalStorageManager.getUserAccessToken()


const store = configureStore({
  reducer: userSlice.reducer,
})


const {socket}  = SocketManager.getInstance();

socket.on('connect', () =>{
  
  console.log(socket.id)
  socket.emit(SocketEvent.AUTHENTICATE_ME, token)
})

socket.on(SocketEvent.AUTHENTICATED,(data:any) =>{

  console.log(data, 'data')

})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

// hook for selector
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export default store