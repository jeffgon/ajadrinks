//import React, { useContext, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { txtColor } from "../constants/colors.js"
import styled from "styled-components";
import {fontTitles} from "../constants/fonts.js"

export default function Product(props){
    const {key, title, image, category, shortdescription, description, price} = props;

    return(
        <ProductContainer>
            <Image src={image} alt="imagem do produto"/>
            <Text>
                <Title>{title}</Title>
                <ShortDescription>{shortdescription}</ShortDescription>
                <Value>R$:{price}</Value>
            </Text>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
width: 100%;
color: ${txtColor};
display: flex;

`
const Image = styled.img`
width: 70px;
height: 100px;
border-radius: 5px;
padding-left: 18px;
padding-right: 8px;

`
const Text = styled.div`
display: flex;
flex-direction: column;
width:84px ;
`
const Title = styled.span`
font-size: 11px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
padding-bottom: 5px;
`

const ShortDescription = styled.span`
font-size: 8px;
font-weight: 400;
line-height: 12px;
letter-spacing: 0em;
text-align: left;
`
const Value = styled.span`
font-family: ${fontTitles};
font-size: 11px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
`


