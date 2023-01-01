import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm({ user }) {
  const { fullName, email } = user;
  const shoppingCart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const price = shoppingCart.finalPrice;

  useEffect(() => {
    fetch("https://e-learning-server-omega.vercel.app/api/v1/chargePayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: fullName,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message || "");
    } else {
      setCardError("");
      // console.log(paymentIntent);
      setTransactionId(paymentIntent.id);

      toast.success("Congrats! Your payment is completed!");

      //store payment data
      const payment = {
        name: fullName,
        email: email,
        paymentId: paymentIntent.id,
        amount: paymentIntent.amount,
      };
      fetch("https://e-learning-server-omega.vercel.app/api/v1/storePayment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
        });
    }
  };

  return (
    <div className="mx-auto my-auto">
      <div className="sm:p-6 bg-lime-600">
        <form onSubmit={(e)=>handleSubmit(e)} className="sm:w-80 w-60">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#560ad1",
                  "::placeholder": {
                    color: "#523d03",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          {transactionId ? (
            <p className="text-white mt-8">payment done</p>
          ) : (
            <button
              className="bg-slate-500 mt-12 text-lg"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Pay<span className="ml-3">${price}</span>
            </button>
          )}
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}
        {success && (
          <div className="text-green-500">
            <p>
              Your transaction Id
              <span className="text-orange-500 font-bold">{transactionId}</span>
            </p>
            <button onClick={()=>navigate("courses/myCourses")}>Watch Tutorial</button>
          </div>
        )}
      </div>
    </div>
  );
}
