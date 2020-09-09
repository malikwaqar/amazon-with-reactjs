import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../stateProvider';

function CheckoutProduct() {
    const [{basket}, dispatch] = useStateValue();
    console.log("Product", basket);
    return (
        <div className="checkoutProduct">
            <img class="checkoutProduct__image" src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" />
            <div class="checkoutProduct__info">
                <p class="checkoutProduct__title">The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback</p>
                <p class="checkoutProduct__price">
                    <small>$</small><strong>11.96</strong>
                </p>
                    <div class="checkoutProduct__rating">
                        <p>⭐</p>
                    </div>
                    <button>Remove from basket</button></div>
        </div>
    )
}

export default CheckoutProduct;
