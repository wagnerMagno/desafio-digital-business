import styled from "styled-components";

const HeaderStyled = styled.section`
    width: 100%;

    .logo{
        width : 244px;
        heigth : 101px;
    }

    .title{
        color : #3877A1;
        display: inline-block;
        font-family: Open Sans;
        font-size : 22px;
        margin : 0px;
        position: relative;
        transform: translateY(-44px);
    }

    .btn-login-logout {
        background-color : #3877A1;
        color : white;
        text-transform: initial;
        margin-top: 35px;


        &:hover{
            background-color : #3877A1;
            color : white;
            text-transform: initial;
        }
    }

    .welcome{
        color: #3877A1;
        display: inline-block;
        font-family: Open Sans;
        font-size: 18px;
        position: relative;
        transform: translateY(20px);
        margin-right: 20px;

    }

    .login-dropdown{
        .btn-login-logout {
            background-color : #3877A1;
            color : white;
            text-transform: initial;
            margin-top: 35px;
    
    
            &:hover{
                background-color : #3877A1;
                color : white;
                text-transform: initial;
            }
        }

        .text-field {
            display: block;
        }
    }
`;

export default HeaderStyled;