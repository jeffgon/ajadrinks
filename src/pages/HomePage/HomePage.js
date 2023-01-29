import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Heander.js"
import { MainContainer, TopContainer, ProductsContainer } from "./styled.js"
import capaHome from "../../assets/capaHome.png"

export default function HomePage(){

    const navigate = useNavigate();
    const { token, setToken } = useContext(AuthContext);
    const { user, setUser } = useContext(UserContext);
    const [ productsList, setProductsList ]= useState(undefined);

    const url = `${BASE_URL}/products`;

    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        const tokenDes = JSON.parse(localStorage.getItem("token"));
        if (tokenDes) {
        setToken(tokenDes);
        }  


        const promise = axios.get(url, config);
        promise.then(res => {
        setProductsList(res.data);
        console.log(res.data);
 
        });

        promise.catch(err => console.log(err.response.data));

    }, []);

    useEffect(() => {
        const userDes = JSON.parse(localStorage.getItem("user"));
        if (userDes) {
            setUser(userDes);
        }
    },[])  



    return(
        <>
            <Header />
            <MainContainer>
                <TopContainer>
                    <h2>Bem-vindo a melhor experiência</h2>
                    <h2>mixológica das suas papilas!</h2>
                    <img src={capaHome} alt="imagem capa diversas garrafas de bebidas"/>
                </TopContainer>

                <ProductsContainer>
                    <h1>Apresentar componentes de lista dos produtos</h1>
                </ProductsContainer>

            </MainContainer>
        </>
    )
}