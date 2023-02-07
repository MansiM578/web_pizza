import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";

export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Lp7KKSJ6lyQj4lBFJBxyyOSzANycfTlbpyxmZNAUUYw7br5D3eMYA5bMW5mKFNlbeXLcfDtRHf3nNxDzfWe5pJi00LDoSL2CJ"
        currency="INR"
      >
        <button className="btn" type="button">
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}
