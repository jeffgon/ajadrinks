import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import { useContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Heander.js"
import { MainContainer, TopContainer, ProductsContainer, MiniProductsContaniner } from "./styled.js"
import capaHome from "../../assets/capaHome.png"
import Product from "../../components/Product.js";

export default function HomePage(){

 //   const navigate = useNavigate();
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
    },[]);

    if(productsList === undefined){
        return(
            <div><h1>Carregando...</h1></div>
        )
    }else{
        const cocktailFiltered = productsList.filter(product => product.category === "cocktail");
        //console.log(cocktailFiltered); 

        const copyrightFiltered = productsList.filter(product => product.category === "copyright");
        //console.log(copyrightFiltered);

        const beerFiltered = productsList.filter(product => product.category === "beer");
        //console.log(copyrightFiltered);

        const shotFiltered = productsList.filter(product => product.category === "shot");
        //console.log(shotFiltered);

        const whiskeyFiltered = productsList.filter(product => product.category === "whiskey");
        //console.log(whiskeyFiltered);

        const wineFiltered = productsList.filter(product => product.category === "wine");
        //console.log(wineFiltered);

        const bottleFiltered = productsList.filter(product => product.category === "bottle");
        //console.log(bottleFiltered);

        const noalcoholFiltered = productsList.filter(product => product.category === "noalcohol");
        //console.log(noalcoholFiltered);

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
                    <h1>Coquetéis</h1>
                    <h3>Clássicos</h3>
                    <MiniProductsContaniner>
                        
                        {cocktailFiltered.map(p => (
                            <Product _id={p._id} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>

                    <h3>Autoráis</h3>
                    <MiniProductsContaniner>
                        {copyrightFiltered.map(p => (
                            <Product key={p._idUser} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>

                    <h1>Cervejas</h1>
                    <h3>Long neck</h3>
                    <MiniProductsContaniner>
                        {beerFiltered.map(p => (
                            <Product key={p._idUser} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>

                    <h1>Doses</h1>
                    <h3>Shots</h3>
                    <MiniProductsContaniner>
                        {shotFiltered.map(p => (
                            <Product key={p._idUser} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>
                    <h3>Whiskey</h3>
                    <MiniProductsContaniner>
                        {whiskeyFiltered.map(p => (
                            <Product key={p._idUser} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>
                    <h3>Vinhos</h3>
                    <MiniProductsContaniner>
                        {wineFiltered.map(p => (
                            <Product key={p._idUser} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>

                    <h1>Para quem tem sede</h1>
                    <h3>Garrafas</h3>
                    <MiniProductsContaniner>
                        {bottleFiltered.map(p => (
                            <Product key={p._idUser} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>

                    <h1>Sem álcool</h1>
                    <h3>Drinks -18</h3>
                    <MiniProductsContaniner>
                        {noalcoholFiltered.map(p => (
                            <Product key={p._idUser} title={p.title} image={p.image} category={p.category} shortdescription={p.shortdescription} description={p.description} price={p.price}  />
                        ))}
                    </MiniProductsContaniner>
                    
                </ProductsContainer>

            </MainContainer>
        </>
    )

    }
}