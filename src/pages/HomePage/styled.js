import styled from "styled-components";
import { buttonColor, mainColor, txtColor } from "../../constants/colors";
import { fontTitles } from "../../constants/fonts.js"

export const MainContainer = styled.div`
width: 100%;
position: fixed;
  overflow: auto;
  top: 60px;
  bottom:50px ;
  z-index: 1;

h1{
    font-family: ${fontTitles};
    color: ${mainColor};
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    padding-top: 10px;
  }

  h3{
    font-family: ${fontTitles};
    color: ${txtColor};
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: start;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 18px;
  }

`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${txtColor};
  margin-top: 10px;

  h2{
    margin-top: 10px;
  }

img{
  width: 100%;
  height: 142px;
  margin-top: 10px;
}
`
export const ProductsContainer = styled.div`
width: 100%;
`

export const MiniProductsContaniner = styled.div`
display: flex;
margin-right: 10px;
//flex-wrap: wrap;
`