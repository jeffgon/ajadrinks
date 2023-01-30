//import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainColor, txtColor } from "../constants/colors.js";
import styled from "styled-components";
import { fontTitles } from "../constants/fonts.js";
import { useState } from "react";

export default function Product({
  _id,
  title,
  image,
  //   category,
  shortdescription,
  //   description,
  price,
}) {
  //   const [acc, setAcc] = useState(0);
  const navigate = useNavigate();
  // console.log(_id);

  function openInfo() {
    navigate(`/product/${_id}`);
  }

  return (
    <ProductContainer>
      <Image src={image} onClick={openInfo} alt="imagem do produto" />
      <Text>
        <Title onClick={openInfo}>{title}</Title>
        <ShortDescription>{shortdescription}</ShortDescription>
        <Value>R$:{price}</Value>
        <CounterDisplay>
          <Link to={`/product/${_id}`}>Mais info</Link>

          {/* <Icon>
            <ion-icon
              name="add-circle"
              onClick={() => handleQuantity("dec")}
            ></ion-icon>
          </Icon>
          <h4>{acc} und.</h4>
          <Icon>
            <ion-icon
              name="remove-circle"
              onClick={() => handleQuantity("inc")}
            ></ion-icon>
          </Icon> */}
        </CounterDisplay>
      </Text>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 100%;
  color: ${txtColor};
  display: flex;
`;
const Image = styled.img`
  width: 70px;
  height: 100px;
  border-radius: 5px;
  padding-left: 18px;
  padding-right: 8px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 84px;
`;
const Title = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  padding-bottom: 5px;
`;

const ShortDescription = styled.span`
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;
const Value = styled.span`
  font-family: ${fontTitles};
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
`;

const CounterDisplay = styled.div`
  font-family: ${fontTitles};
  color: ${mainColor};
  display: flex;
`;

const Icon = styled.div`
  font-size: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
`;
