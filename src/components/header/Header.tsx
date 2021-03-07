import { Grid } from "@material-ui/core";
import React from "react";
import HeaderStyled from './HeaderStyled';
import logo from "../../img/logo.svg";

const Header = () => {

    return (
        <HeaderStyled>
            <Grid container>
                <Grid>
                    <img src={logo} alt="Logo" />
                </Grid>
            </Grid>
        </HeaderStyled>
    );
};

export default Header;
