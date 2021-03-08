import React, { useState, useMemo, useContext, useEffect } from "react"
import { UserContext } from './../contexts/UserContext';
import { useHistory } from 'react-router-dom';

interface UserModel {
    email: string;
    name: string;
    password: string;
    listProducts: any[];
};

const UserProvider = (props: any) => {

    const history = useHistory();
    const userLogout: UserModel = {
        email: "",
        name: "",
        password: "",
        listProducts: []
    }
    const [userLogged, setUserLogged] = useState<UserModel>(userLogout);
    const userMock: UserModel[] = require('../json/userMock.json')


    useEffect(() => {
        console.log("aqui wga ");

        let obj = JSON.parse(localStorage.getItem("userLoggedDigitalBusiness") || "null");
        if(obj){
            setUserLogged(obj);
        }
    }, [])


    const login = (email: string, password: string) => {
        let objUser = userMock.find(obj => obj.email === email.trim() && obj.password === password.trim());
        if (objUser) {
            setUserLogged(objUser);
            localStorage.setItem("userLoggedDigitalBusiness" , JSON.stringify(userLogged) );
            history.push('/')
        } else {
            //mensagem de erro aqui
        }
    }

    const isUserLogged = () => {
        return Boolean(userLogged.email);
    }

    const logout = () => {
        setUserLogged(userLogout);
        localStorage.removeItem("userLoggedDigitalBusiness")
    }

    const addProductToCart = (obj: any) => {
        let userAux = {...userLogged};
        userAux.listProducts.push({ ...obj, ammount: 1 })
        setUserLogged(userAux);
        localStorage.setItem("userLoggedDigitalBusiness" , JSON.stringify(userAux) )
    }
    
    const addAmmountProductToCart = (obj: any) => {
        let userAux = {...userLogged};
        let objFind = userAux.listProducts.find((p : any) => p.id === obj.id)
        objFind.ammount++;
        setUserLogged(userAux);
        localStorage.setItem("userLoggedDigitalBusiness" , JSON.stringify(userAux) )
    }

    const subAmmountProductToCart = (obj: any) => {
        let userAux = {...userLogged};
        let objFind = userAux.listProducts.find((p : any) => p.id === obj.id)
        if(objFind.ammount -1 === 0){
            removeProductToCart(obj.id)
        }else{
            objFind.ammount--;
            setUserLogged(userAux);
            localStorage.setItem("userLoggedDigitalBusiness" , JSON.stringify(userAux) )
        }
    }

    const removeProductToCart = (id: number) => {
        let userAux = {...userLogged};
        userAux.listProducts = userLogged.listProducts.filter((obj : any) => obj.id !== id);
        setUserLogged(userAux);
        localStorage.setItem("userLoggedDigitalBusiness" , JSON.stringify(userAux) )

    }

    const UserData = useMemo(() => {
        return {
            userLogged, logout, login, isUserLogged, addProductToCart, removeProductToCart, addAmmountProductToCart, subAmmountProductToCart
        }
    }, [userLogged]);

    return <UserContext.Provider value={UserData} {...props} />;
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
