import { createContext } from "react";

interface UserContextProps {
  login: Function,
  logout: Function,
  userLogged : any[]
}

const UserValue = {
  userLogged: [],
  login: () => {},
  logout: () => {}
}

export const UserContext = createContext<UserContextProps>(UserValue)