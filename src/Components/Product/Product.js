import React from 'react'
import "./Product.css"

function Product({title, price, rating, image}) {
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
                <button>Add to Basket</button>
              
        </div>
    )
}

export default Product
