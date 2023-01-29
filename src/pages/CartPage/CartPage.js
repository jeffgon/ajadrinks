import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";

const CartPage = ({ cart, setCart }) => {
  const totalCart = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="section">
      <Link className="close" to="/products">
        x
      </Link>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            cart={cart}
            cartItem={item}
            setCart={setCart}
          />
        );
      })}

      <div className="total">{totalCart}</div>
      <Link to="/checkout" onClick={() => setCart({ ...cart, totalCart })}>
        Ir para checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 375px;
  padding: 20px;
  background-color: yellow;
  height: 100vh;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .section {
  }
`;

export default CartPage;
