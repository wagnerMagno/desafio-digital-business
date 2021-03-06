import React from "react";
import FooterStyled from './FooterStyled';

import logo from "../../img/logo.svg";
import { Grid } from "@material-ui/core";

const Footer = () => {

    return (
        <FooterStyled>
            <Grid direction="row" justify="space-between" container>
                <Grid>
                    <img className="logo" src={logo} alt="Logo" />
                </Grid>
                <Grid>
                    <p>
                        Teste front-end 2019 - RCA Digital
                    </p>
                </Grid>
            </Grid>
        </FooterStyled>
    );
};

export default Footer;
