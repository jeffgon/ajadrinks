import AuthContext from "../contexts/AuthContext.js"
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { headerBackgroundColor, mainColor } from "../constants/colors.js"
import { fontTitles } from "../constants/fonts.js"

export default function Header(){
    const navigate = useNavigate();
    const {token, setToken} = useContext(AuthContext);

    useEffect(() => {
        const tokenDes = JSON.parse(localStorage.getItem("token"));
        if(tokenDes) {
            setToken(tokenDes);
        }
    }, []);

    function returnHome(){
        navigate("/products");
    }

    function goToCart(){
        navigate("/cart")
    }

    function logout(){
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return(
        <ContainerHeader>
        
                <img src={logo} alt="imagem logo" onClick={returnHome} />
                <h1 onClick={returnHome}>AJA Drinks</h1>
           <ContainerIcons>
            <Icon>
                <ion-icon name="cart-outline" onClick={goToCart}></ion-icon>
            </Icon>
            <Icon>
                <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
            </Icon>
            </ContainerIcons>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
width: 100%;
height: 60px;
background-color: ${headerBackgroundColor};
color: ${mainColor};
font-family: ${fontTitles};
font-family: Caveat;
font-size: 30px;
font-weight: 700;
line-height: 38px;
letter-spacing: 0em;
//text-align: center;

display: flex;
justify-content: space-around;
align-items: center;


img{
    height: 30px;
    width: 30px;
}

h1{
    padding-left: 10px;
}
`

const ContainerIcons = styled.div`
display: flex;
`
const Icon = styled.div`
font-size:25px;
//color: red;
padding-left: 10px;
`