import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';

import Subtotal from "./Subtotal/Subtotal"
function Checkout() {

    const [{basket}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout__add"/>
        
            <div>
                <h2 className="checkout__title" style={{textAlign: 'center'}}>Your shopping Basket</h2>
                
                {basket.map((item) => (
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
            <div className="checkout__right">
               <Subtotal />   
            </div>
        </div>
    )
}

export default Checkout
