import React from "react";
import BannerStyled from './BannerStyled';

import banner from "../../img/banner.png"

const Banner = () => {
    
    return (
        <BannerStyled>
            <img className="banner" src={banner} alt="Banner" />
        </BannerStyled>
    );
};

export default Banner;
