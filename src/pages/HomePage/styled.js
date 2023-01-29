import styled from "styled-components";
import { buttonColor, mainColor, txtColor } from "../../constants/colors";

export const MainContainer = styled.div`
width: 100%;

`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${txtColor};

  h2{
    margin-top: 10px;
  }
img{
  width: 100%;
  height: 142px;
  margin-top: 10px;
}
`
