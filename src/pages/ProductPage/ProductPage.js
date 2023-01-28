import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const Product = ({ cart, setCart, quantity, setQuantity }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/product/${id}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    setCart({ ...product, quantity });
    console.log(cart);
  };
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>R$ {product.price}</Price>
          <Size>{product.size}</Size>
          <Desc>{product.description}</Desc>
          <AddContainer>
            <AmountContainer>
              <div onClick={() => handleQuantity("dec")}>-</div>
              <Amount>{quantity}</Amount>
              <div onClick={() => handleQuantity("inc")}>+</div>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: yellow;
  height: 100vh;
  width: 375px;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const ImgContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div``;

const Title = styled.h1`
  margin: 10px 0 20px 0;
  font-weight: 200;
`;

const Desc = styled.p``;

const Price = styled.span`
  font-weight: 100;
  font-size: 24px;
`;

const Size = styled.span`
  font-weight: 100;
  font-size: 24px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
