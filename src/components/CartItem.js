import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ cart, cartItem, setCart }) => {
  function removeItem(id) {
    const tempCart = cart.filter((item) => item.id !== id);
    setCart(tempCart);
  }

  return (
    <Wrapper>
      <div className="title">
        <img src={cartItem.image} alt="" />
        <div>
          <h3 className="name">{cartItem.title}</h3>
          <h5 className="price">R$ {cartItem.price}</h5>
          <h6 className="qtd"> Qtd: {cartItem.quantity}</h6>
        </div>
      </div>

      <FaTrash className="remove-btn" onClick={() => removeItem(cartItem.id)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  .title {
    display: flex;
  }
  img {
    width: 100px;
    margin-right: 7px;
  }
`;

export default CartItem;
