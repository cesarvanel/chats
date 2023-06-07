import {
  useContext,
  createContext,
  useMemo,
  FC,
  useEffect,
  useCallback,
} from "react";
import { LocalStorageManager } from "../utils/localStorage/localStorage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../states/stores/stores";
import { userSlice } from "../states/app/user/reducer";

import { useJwt } from "react-jwt";

export type sessionContextProps = {
  token: string | null;
  refresh: string | null;
  isExpired: boolean;
  logout: () => void;
};

export const SessionContext = createContext<sessionContextProps>({} as any);

export const SessionContextProvider: FC<any> = ({ children }) => {
  const token = LocalStorageManager.getUserAccessToken();
  const refresh = LocalStorageManager.getUserRefreshToken();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isExpired } = useJwt(token as string);

  const logout = useCallback(() => {
    LocalStorageManager.saveUserAccessToken("");
    setTimeout(() => {
      dispatch(userSlice.actions.logout());
    }, 3000);

    navigate("/welcome");
  }, [dispatch, navigate]);

  useEffect(() => {
    if (isExpired) {
      logout();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpired]);

  const contextValue = useMemo(
    () => ({
      token,
      refresh,
      isExpired,
      logout
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
