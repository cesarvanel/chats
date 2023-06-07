
export const USER_ACCESS_TOKEN =  'USER_ACCESS_TOKEN'; 
export const USER_REFRESH_TOKEN = 'USER_REFRESH_TOKEN';
export const USER_DATA_KEY = 'USER_DATA'

export const Api = process.env.REACT_APP_URL as string;
export const File_Api = process.env.REACT_APP_FILE_URL as string;

export const Auth = Api + "/auth";
export const Conversation = Api + "/conversations"

export const LOGIN = Auth + "/signin";

export const REGISTER = Auth + "/signup";

export const USER_DATA_PROFILE = Auth + '/profile';

export const ALL_USER = Auth

export const CONVERSATION = Conversation
