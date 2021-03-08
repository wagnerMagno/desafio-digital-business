import styled from "styled-components";

const HomeStyled = styled.section`
    .p-cart{
        font-family: Open Sans;
        font-size : 22px;
        color : #3877A1;
        display: inline-block;
        position: relative;
        transform: translateY(-12px);

    }

    .title{
        font-family: Heiti SC;
        font-size : 69px;
        color : #333333;
        display: inline-block;
        position: relative;
        transform: translateY(-12px);
        transform: translateY(-25px);
        margin: 0;

    }

    .iconCart{
        width: 42px;
        margin-right: 10px;
        cursor: pointer;
    }

    .btn-add-remove {
        background-color : #3877A1;
        color : white;
        text-transform: initial;
        margin-top: 10px;
        width : 95%;

        &:hover{
            background-color : #3877A1;
            color : white;
            text-transform: initial;
        }
    }

    .btn-remove{
        background-color : #D55454 !important;

        &:hover{
            background-color : #D55454 !important;
        }
    }

    .title-product{
        font-family: Open Sans;
        font-size : 28px;
        color: #333333;
        margin: 0;
    }
    .platform{
        font-family: Open Sans;
        font-size : 14px;
        color: #333333;
    }

    .card-product{
        // padding :
        margin-bottom : 20px;
    }

    .img-product{
        width: 95%;
        margin-top : 20px;
    }
    .grid-img{
        display: flex;
        justify-content: center;

    }

    .grid-button{
        display: flex;
        justify-content: center;
    }

    .grid-price-removed{
        background-color: #3877A1 !important;
    }

    .grid-price{
        background-color: #333333;
        color: white;
        height: 58px;
        width: 78px;
        text-align: center;
        border-radius: 0px 0px 15px 15px;

        p{
            margin: 0;
            font-size: 25px;
            font-family: Open sans-serif;
            margin-top: 12px;
        }
    }
`;

export default HomeStyled;