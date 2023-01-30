import styled from "styled-components";
import { buttonColor, mainColor } from "../../constants/colors";
import { fontTexts, fontTitles } from "../../constants/fonts";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 135px;

  h1{
  color: ${mainColor};
  font-family: ${fontTitles};
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  }
  form {
    margin-top: 100px;
  }
  img{
    width: 150px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    padding: 10px;
    font-family: ${fontTexts};
  }
  button {
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border-style: none;

    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 14 24px;
    color: ${mainColor};
    background: ${buttonColor};
    margin-top: 14px;
    margin-bottom: 24px;
  }
  a {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    color: ${mainColor};
  }
`;
