import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function PaymentSystem() {
    const paymentDataString = localStorage.getItem("paymentData");
    const paymentData = paymentDataString ? JSON.parse(paymentDataString) : {};

    return (
        <div className="w-full min-h-screen pt-2 px-3 bg-gray-100">
            <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-gradient-to-r from-[#805a41] to-[#4e3423]">
                <h1 className="text-white text-center text-3xl ml-10 lg:ml-16">Payment System</h1>
            </div>

            {/* Payment system */}
            <div className="w-full flex justify-center mt-10">
                <Elements stripe={stripePromise}>
                    <CheckoutForm paymentData={paymentData} />
                </Elements>
            </div>
        </div>
    );
}
