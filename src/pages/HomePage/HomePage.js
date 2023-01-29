import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Heander.js"
import { MainContainer, TopContainer } from "./styled.js"
import capaHome from "../../assets/capaHome.png"

export default function HomePage(){
    return(
        <>
            <Header />
            <MainContainer>
                <TopContainer>
                    <h2>Bem-vindo a melhor experiência</h2>
                    <h2>mixológica das suas papilas!</h2>
                    <img src={capaHome} alt="imagem capa diversas garrafas de bebidas"/>
                </TopContainer>

            </MainContainer>
        </>
    )
}