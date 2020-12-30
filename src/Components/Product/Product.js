import React from 'react'
import "./Product.css"

import {useStateValue} from "../StateProvider/StateProvider"

function Product({id, title, price, rating, image}) {

    //Destructuring Basket // What is basket - It will update the basket once user add something
    //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables
    const [{basket}, dispatch] = useStateValue();

    console.log(basket);

    const addToBasket = () => {
        //Dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((i, index) => {
                        return(<p>⭐</p>)
                    })}
                     
                   
                </div>
                </div>
                <img src={image} alt="" />
                <button onClick={addToBasket}>Add to Basket</button>
              
        </div>
    )
}

export default Product
