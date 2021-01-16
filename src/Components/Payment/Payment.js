import React, {useState, useEffect } from 'react'
import "./Payment.css"

import {useStateValue} from "../StateProvider/StateProvider"
import CheckoutProduct from '../Checkout/CheckoutProduct';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import {Link, useHistory} from 'react-router-dom'

import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from "../Reducer/reducer"
import axios from "../axios"

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const history = useHistory();
    const stripe = useStripe();
    const elements  = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response  = await axios ({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("The Secret is : ",clientSecret)

    const handleSubmit = async(e) => {
        //This will stop refreshing
        e.preventDefault();
        //This will stop allow clicking button for number of time at a time. Real time payment process system 
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment Confirmation
            //Once the process is done
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            //router.replace acts like router.push, the only difference is
            // that it navigates without pushing a new history entry, as its name suggests - it replaces the current entry.
            history.replace("/orders")


        })


      



    }

    const handleChange = e => {

            setDisabled(e.empty)
            setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
                </h1>


                {/* Payment Section : delivery address*/}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div>
                            <p>{user?.email}</p>
                            <p>11 october place</p>
                            <p>Brampton, ON</p>
                        </div>
                    </div>   

                {/* Payment Section : Review Items*/}
                <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review items & delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct 
                                id={item.id}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                title={item.title}
                                />

                            ))}
                        </div>
                </div>
                
                {/* Payment Section : Payment Method*/}
                <div className="payment__section">
                        <div className="payment__title">
                                <h3>Payment Method</h3>
                        </div>

                        <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className="payment__priceContainer">
                                <CurrencyFormat
                                        renderText = {(value) => (
                                           <h3>Order total :  {value}</h3>
                                        )}
                                        decimalScale = {2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeperator={true}
                                        prefix={"$"}
                                        />

                                        <button disabled={processing || disabled || succeeded}>
                                                <span>{processing ? <p>Processing</p> : "Buy Now" } </span>
                                        </button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
