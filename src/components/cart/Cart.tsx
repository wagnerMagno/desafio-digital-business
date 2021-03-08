import React from "react";
import { Button, Grid } from "@material-ui/core";

import CartStyled from './CartStyled';
import { useUserContext } from './../../providers/user-provider';


const Cart = () => {

    const { isUserLogged, userLogged, addAmmountProductToCart , subAmmountProductToCart} = useUserContext()

    const getPlatformFormated = (list: any[]): string => {
        let retorno = "";

        for (let i = 0; i < list.length; i++) {
            const p = list[i];

            retorno = `${retorno} ${i == list.length - 1 ? p : `${p},`}`

        }

        return retorno;
    }

    const addAmmount = (obj: any) => {
        addAmmountProductToCart(obj);
    }
    
    const subAmmount = (obj: any) => {
        subAmmountProductToCart(obj);
    }

    const getValueTotal = () => {
        let soma = 0;

        userLogged.listProducts.forEach((p : any) => {
            soma += (p.price * p.ammount);
        });

        return soma;
    }

    return (
        <CartStyled>
            <Grid direction="row" justify="space-between" container>
                <p className="title">
                    Cart
                    </p>
            </Grid>
            {
                isUserLogged() && userLogged.listProducts.length > 0 ?
                    <div >
                        {
                            userLogged.listProducts.map((obj: any) => {
                                return (
                                    <Grid style={{ marginBottom: "15px" }} key={obj.id} container>
                                        <Grid xs={2}>
                                            <img className="img-product" src={obj.imgBase64} alt="product" />
                                        </Grid>
                                        <Grid xs={6}>
                                            <p className="title-product">
                                                {obj.title}
                                            </p>
                                            <span className="platform">
                                                {getPlatformFormated(obj.platform)}
                                            </span>
                                        </Grid>
                                        <Grid xs={2}>
                                            <span className="button-increment-decrement" onClick={() => subAmmount(obj)}>
                                                -
                                            </span>
                                            <p className="ammount" >
                                                {obj.ammount}
                                            </p>
                                            <span className="button-increment-decrement" onClick={() => addAmmount(obj)}>
                                                +
                                            </span>
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="price">
                                                $ {obj.ammount * obj.price}
                                            </p>
                                        </Grid>

                                    </Grid>
                                )
                            })
                        }

                        <Grid direction="row" justify="flex-end" container>
                            
                            <Grid xs={1}>
                                <p className="price-total">
                                    Total
                                </p>
                            </Grid>
                            <Grid xs={2}>
                                <p className="price-total">
                                    $ {getValueTotal()}
                                </p>
                            </Grid>
                        </Grid>
                    </div>

                    :
                    <p>
                            Cart with no product added
                    </p>
            }
        </CartStyled>
    );
};

export default Cart;
