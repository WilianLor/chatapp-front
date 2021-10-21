import { AxiosResponse } from "axios";
import { ReactNode } from "react";

export interface UserState {
  isLogged: boolean;
  token: string;
  name: string;
  email: string;
  id: string
}

export interface UserContextProviderProps {
  children: ReactNode;
}

export interface UserContextType {
  logIn: (response: AxiosResponse) => void;
  logOut: () => void;
  userData: UserState;
}
