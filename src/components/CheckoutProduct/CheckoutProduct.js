import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../stateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img class="checkoutProduct__image" src={image} alt="" />
            <div class="checkoutProduct__info">
                <p class="checkoutProduct__title">{title}</p>
                <p class="checkoutProduct__price">
                    <small>$</small><strong>{price}</strong>
                </p>
                    <div class="checkoutProduct__rating">
                    {Array(rating)
                    .fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from basket</button></div>
        </div>
    )
}

export default CheckoutProduct;
