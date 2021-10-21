import { useEffect, createContext, useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  UserContextType,
  UserState,
  UserContextProviderProps,
} from "../types/userContextType";

export const UserContext = createContext({} as UserContextType);

const initialState = {
  isLogged: false,
  token: "",
  email: "",
  name: "",
  id: ""
};

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userData, setUserData] = useState<UserState>(initialState);

  useEffect(() => {
    if (!userData.isLogged) {
      const token = localStorage.getItem("CHAT_APP_TOKEN");

      const header = {
        headers: { authorization: "Bearer " + token },
      };

      if (token !== null) {
        axios
          .get("http://localhost:3333/user/data", header)
          .then((response: AxiosResponse) => {
            if (response.data.status === "success") {
              const userData = {
                isLogged: true,
                token: response.data.token,
                email: response.data.email,
                name: response.data.name,
                id: response.data.id
              };
              localStorage.setItem("CHAT_APP_TOKEN", userData.token);
              setUserData(userData);
            }
          });
      }
    }
  }, [userData]);

  const logIn = (response: AxiosResponse) => {
    localStorage.setItem("CHAT_APP_TOKEN", response.data.token);
    setUserData({
      name: response.data.name,
      isLogged: true,
      email: response.data.email,
      token: response.data.token,
      id: response.data.id,
    });
  };

  const logOut = () => {
    setUserData(initialState);
    localStorage.removeItem("CHAT_APP_TOKEN");
  };

  return (
    <UserContext.Provider value={{ userData, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
