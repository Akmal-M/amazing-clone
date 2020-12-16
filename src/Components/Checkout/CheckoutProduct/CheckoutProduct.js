import React from 'react';
import {useStateValue} from "../../../State/StateProvider";
import './CheckoutProduct.css';


const CheckoutProduct = ({id, title, image, price, rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = (basket) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProduct__image' src={image}
            />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <img
                            src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/star_2b50.png'
                            alt=''
                        />
                    ))}
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>


        </div>
    )
}

export default CheckoutProduct;
