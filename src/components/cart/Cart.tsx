import React from "react";
import { Button, Grid } from "@material-ui/core";

import HomeStyled from './HomeStyled';

import iconCart from "../../img/icon-cart.svg";
import { useUserContext } from '../../providers/user-provider';
import { useProductContext } from '../../providers/product-provider';
import CartStyled from './CartStyled';


const Cart = () => {

   

    return (
        <CartStyled>
            <Grid direction="row" justify="space-between" container>
                    <p className="title">
                        Cart
                    </p>
            </Grid>
        </CartStyled>
    );
};

export default Cart;
