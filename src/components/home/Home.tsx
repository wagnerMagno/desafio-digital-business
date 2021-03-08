import React from "react";
import { Button, Grid, Link } from "@material-ui/core";

import HomeStyled from './HomeStyled';

import iconCart from "../../img/icon-cart.svg";
import { useUserContext } from './../../providers/user-provider';
import { useProductContext } from './../../providers/product-provider';
import { useHistory } from 'react-router-dom';


const Home = () => {

    const { isUserLogged, userLogged, addProductToCart, removeProductToCart } = useUserContext();
    const { listProduct } = useProductContext();
    const history = useHistory();


    const addToCart = (obj: any) => {
        addProductToCart(obj);
    }

    const removedFromCart = (id: number) => {
        removeProductToCart(id);
    }


    const isRemovedProduct = (id: number): boolean => {
        return isUserLogged() && userLogged.listProducts.filter((obj: any) => obj.id === id).length > 0;
    }

    const teste = () => {
        history.push('/cart')
    }

    const getPlatformFormated = (list : any[]) : string => {
        let retorno = "";

        for (let i = 0; i < list.length; i++) {
            const p = list[i];

            retorno = `${retorno} ${i == list.length -1 ? p  : `${p},` }`
            
        }

        return retorno;
    }

    return (
        <HomeStyled>
            <Grid direction="row" justify="space-between" container>
                <Grid>
                    <p className="title">
                        Products
                    </p>
                </Grid>
                <Grid>
                    <img onClick={() => teste()} className="iconCart" src={iconCart} alt="cart" />
                    <p className="p-cart">
                        {
                            isUserLogged ? userLogged.listProducts.length : '0'
                        }
                    </p>
                </Grid>
            </Grid>
            <Grid container>
                {
                    listProduct.map((obj: any) => {
                        return (

                            <Grid className="card-product" key={obj.id} xs={3}>
                                <div style={{ width: "90%" }}>

                                    <Grid direction="row" justify="space-between" container>
                                        <Grid >
                                            <p className="title-product">
                                                {obj.title}
                                            </p>
                                            <span className="platform">
                                                {getPlatformFormated(obj.platform)}
                                            </span>
                                        </Grid>
                                        <Grid className={`grid-price ${isRemovedProduct(obj.id) ? ' grid-price-removed' : ''}`} >
                                            <p>
                                                $ {obj.price}
                                            </p>
                                        </Grid>
                                    </Grid>
                                    <Grid className="grid-img" container>
                                        <img className="img-product" src={obj.imgBase64} alt="product" />
                                    </Grid>
                                    <Grid className="grid-button" container>
                                        <Button disabled={!isUserLogged()} onClick={() => { isRemovedProduct(obj.id) ? removedFromCart(obj.id) : addToCart(obj) }}
                                            variant="contained" className={`btn-add-remove ${isRemovedProduct(obj.id) ? ' btn-remove' : ''}`}>
                                            {isRemovedProduct(obj.id) ? 'Remove from cart' : 'Add to cart'}
                                        </Button>
                                    </Grid>
                                </div>

                            </Grid>
                        )
                    })
                }

            </Grid>
        </HomeStyled>
    );
};

export default Home;
