import styled from "styled-components";
import { buttonColor, mainColor } from "../../constants/colors";
import { fontTitles, fontTexts } from "../../constants/fonts";

export const CheckoutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormPaymentContainer = styled.div`
    width: 90%;
    height: 90vh;
    border-radius: 5px;
    border: 2px solid gray;
    background-color: #FBE4F5;
    input {
        border-radius: 5px;
    }
`

export const ContainerPayment = styled.div`
    width: 90%;
    height: 90vh;
    border-radius: 5px;
    border: 2px solid gray;
    background-color: #FBE4F5;
    input {
        border-radius: 5px;
    }   
    section {
        margin-top: 60%;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
    }
    button {
        width: 50px;
        heigth: 50px;
        backgroud-color: ${buttonColor};
        border-style: none;
    }
`

export const Titulo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    h1 {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: ${fontTitles}
    }
`

export const Form = styled.form`
    margin-left: 18px;  
    div {
        margin-top: 10px;
    }
    section {
        margin-top: 20px;
        p {
            font-family: ${fontTexts};
            margin-top: 10px;
            margin-left: 10px;
        }
        h2 {
            font-family: ${fontTexts};
            font-size: 25px;
            margin-top: 15px;
            margin-bottom: 5px;
        }
    }
    h1 {
        margin-top: 5px;
        font-family: ${fontTexts};
        font-size: 22px;
    }   
    footer {
        width: 100%;
        display: flex;
        justify-content: center;
        
    }
    button {
        border-style: px solid gray;
        background-color: ${buttonColor}
        width: 10px;
        height: 30px;
        font-family: ${fontTexts};
    }
`