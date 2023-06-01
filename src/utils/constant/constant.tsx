export const Api = process.env.REACT_APP_URL as string;
export const File_Api = process.env.REACT_APP_FILE_URL as string;

export const Auth = Api + "/auth";

export const LOGIN = Auth + "/signup";

export const REGISTER = Auth + "/signin";
