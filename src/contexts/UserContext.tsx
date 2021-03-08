import { createContext } from "react";

interface UserContextProps {
  login: Function,
  logout: Function,
  isUserLogged: Function,
  userLogged : any
}

const UserValue = {
  userLogged: [],
  login: () => {},
  logout: () => {},
  isUserLogged: () => {},
}

export const UserContext = createContext<UserContextProps>(UserValue)