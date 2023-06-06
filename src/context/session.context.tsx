import { useContext, createContext, useMemo, FC } from "react";
import { User } from "../types/interface";
import { useAppSelector, useAppDispatch } from "../states/stores/stores";
import { userSlice } from "../states/app/user/reducer";
import { LocalStorageManager } from "../utils/localStorage/localStorage";


export type sessionContextProps = {
  token: string | null;
  refresh: string | null;
  sesUser: User | null;
  updateSesUser: (sesUser: User) => void;
};

export const SessionContext = createContext<sessionContextProps>({} as any);

export const SessionContextProvider: FC<any> = ({ children }) => {
  const dispatch = useAppDispatch();

  const {sesUser} = useAppSelector((state) => state);
  const token = LocalStorageManager.getUserAccessToken();
  const refresh = LocalStorageManager.getUserRefreshToken();

  const updateSesUser = (sesUser: User) => {
    dispatch(userSlice.actions.setSesUser(sesUser));
  }; 


  const contextValue = useMemo(
    () => ({
      token,
      refresh,
      sesUser,
      updateSesUser,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token, refresh]
  );

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
