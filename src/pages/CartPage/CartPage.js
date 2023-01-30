import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";

const CartPage = ({ cart, setCart, totalCart }) => {
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

      <div className="total">Total: R$ {totalCart}</div>

      <Link className="checkout" to="/checkout">
        Ir para checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  background-color: #fbe4f5;
  height: 100vh;
  width: 375px;
  color: black;
  padding: 20px;
  box-sizing: border-box;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }

  .close {
    background-color: lightslategray;
    color: white;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: 20px;
  }

  .total {
    margin: 20px 0;
  }
  .checkout {
    background-color: black;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    box-sizing: border-box;
  }
`;

export default CartPage;
