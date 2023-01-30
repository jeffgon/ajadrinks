import {
  CheckoutContainer,
  FormPaymentContainer,
  Titulo,
  Form,
} from "./styled";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Checkout({
  nameCard,
  setNameCard,
  numberCard,
  setNumberCard,
  validateCard,
  setValidateCard,
  cvcCard,
  setCvcCard,
  typePayment,
  setTypePayment,
  user,
  token,
  cart,
  totalCart,
}) {
  const navigate = useNavigate();

  function confirmPayment(e) {
    e.preventDefault();

    const url = `${BASE_URL}/payment`;
    const body = {
      nameCard,
      numberCard,
      validateCard,
      cvcCard,
      typePayment,
      user,
    };
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const promise = axios.post(url, body, config);
    promise.then((res) => {
      console.log("Pagamento transferido!", res);
      navigate("/payment");
    });
    promise.catch((err) => {
      console.log("Algo deu errado!", err);
    });
  }
  console.log("cartCheckout", cart);

  return (
    <CheckoutContainer>
      <FormPaymentContainer>
        <Titulo>
          <h1>Pagamento</h1>
        </Titulo>

        <Form onSubmit={confirmPayment}>
          <div>
            <h1>Tipo de pagamento:</h1>
            <input
              value={typePayment}
              type="text"
              placeholder="Escolha a forma de pagamento"
              onChange={(e) => setTypePayment(e.target.value)}
              list="faixa"
            />
            <datalist id="faixa">
              <option value="Cartão de Crédito"></option>
              <option value="Cartão de Débito"></option>
            </datalist>
          </div>

          <div>
            <h1>Informações do Cartão</h1>
            <input
              type="tel"
              value={numberCard}
              placeholder="Número do cartão"
              onChange={(e) => setNumberCard(e.target.value)}
            />
            <input
              type="name"
              value={nameCard}
              placeholder="Nome no cartão"
              onChange={(e) => setNameCard(e.target.value)}
            />
            <input
              value={validateCard}
              placeholder="MM / YY"
              onChange={(e) => setValidateCard(e.target.value)}
            />
            <input
              value={cvcCard}
              placeholder="CVC"
              onChange={(e) => setCvcCard(e.target.value)}
            />
          </div>
          <section>
            {cart.map((item) => {
              return (
                <p>
                  {item.title} - R$ {item.price}
                </p>
              );
            })}
            <h1>Valor total a pagar: R$ {totalCart}</h1>
          </section>
          <footer>
            <button>Confirmar</button>
          </footer>
        </Form>
      </FormPaymentContainer>
    </CheckoutContainer>
  );
}
