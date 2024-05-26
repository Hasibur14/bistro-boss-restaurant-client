import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log('Stripe or Elements not loaded');
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            console.log('Card Element not found');
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('Payment error!', error);
            setError(error.message);
        } else {
            console.log('Payment method', paymentMethod);
            setError('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className="btn btn-sm bg-yellow-600 text-white mx-4"
                type="submit"
                disabled={!stripe || !clientSecret}

            >
                Pay
            </button>
            <div className="shadow-sm mt-4">
                <p className="text-red-500">{error}</p>
            </div>
        </form>
    );
};

export default CheckoutForm;