import axios from "axios";
import {
  useContext,
  createContext,
  useEffect,
  useState,
  useMemo,
  FC,
} from "react";

export type sessionContextProps = {
  token: string;
  updateToken: (newToken: string) => void;
};

export const SessionContext = createContext<sessionContextProps>({} as any);

export const SessionContextProvider: FC<any> = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const updateToken = (newToken: string) => {
    setToken(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer" + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token: token as string,
      updateToken,
    }),

    [token]
  );

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
