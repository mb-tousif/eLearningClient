import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
export default function StripeCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm user={user} />
    </Elements>
  );
}
