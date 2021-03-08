import React from "react";
import { Button, Grid } from "@material-ui/core";

import HomeStyled from './HomeStyled';

import iconCart from "../../img/icon-cart.svg";
import { useUserContext } from './../../providers/user-provider';
import { useProductContext } from './../../providers/product-provider';


const Home = () => {

    const { isUserLogged, userLogged, addProductToCart, removeProductToCart } = useUserContext();
    const { listProduct } = useProductContext()


    const addToCart = (obj: any) => {
        console.log("add wag ");
        addProductToCart(obj);
    }

    const removedFromCart = (id : number) => {
        console.log("rtemove wag ");
        removeProductToCart(id);
    }


    const isRemovedProduct = (id : number) : boolean => {
        return isUserLogged() && userLogged.listProducts.filter((obj : any)=> obj.id === id).length > 0;
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
                    <img className="iconCart" src={iconCart} alt="cart" />
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
                                            {
                                                obj.platform.map((p: any, i: number) => {
                                                    return (
                                                        <span className="platform" key={`p${obj.id}_plat${i}`}>
                                                            {p}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </Grid>
                                        <Grid className="grid-price" >
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
