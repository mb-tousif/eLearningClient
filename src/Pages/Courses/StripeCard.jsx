import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// eslint-disable-next-line no-undef
const stripePromise = loadStripe(
  "pk_test_51L5CyMJqyhwOcDsq7XL4aWx5vL8UNHpkQhVDEmiK0r3yYv0u4VwWXzNKlswhoLFntwlxQFvSmiRoifZrZFW7szjW00bBCoZoI7"
);

export default function StripeCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm user={user} />
    </Elements>
  );
}
