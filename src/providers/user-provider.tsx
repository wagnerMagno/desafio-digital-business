import React, { useState, useMemo, useContext } from "react"
import { UserContext } from './../contexts/UserContext';

interface  UserModel {
    email: string;
    name: string;
    password: string;
    listProducts: any[];
};

const UserProvider = (props: any) => {

    const userLogout : UserModel = {
        email : "",
        name : "",
        password : "",
        listProducts: []
    }

    const [userLogged, setUserLogged] = useState<UserModel>(userLogout);
    const userMock: UserModel[] = require('../json/userMock.json')



    const login = (email: string, password: string) => {
        let objUser = userMock.find(obj => obj.email === email.trim() && obj.password === password.trim());
        if (objUser) {
            setUserLogged(objUser);
        } else {
            //mensagem de erro aqui
        }
    }

    const isUserLogged = () => {
        return Boolean(userLogged.email);
    }

    const logout = () => {
        setUserLogged(userLogout);
    }

    const UserData = useMemo(() => {
        return {
            userLogged, logout, login, isUserLogged
        }
    }, [userLogged]);

    return <UserContext.Provider value={UserData} {...props} />;
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
