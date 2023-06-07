import { useEffect } from "react";
import { LocalStorageManager } from "../utils/localStorage/localStorage";
import { useJwt } from "react-jwt";

export const useVerifyToken = (props: any) => {
  const token = LocalStorageManager.getUserAccessToken() as string;
  const { isExpired } = useJwt(token);

  useEffect(() => {
    if (isExpired) {
      props.logout();
    }
  }, [isExpired, props]);
};
