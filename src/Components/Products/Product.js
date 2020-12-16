import React from 'react';
import './Product.css';
import {useStateValue} from "../../State/StateProvider";
import {keys} from "@material-ui/core/styles/createBreakpoints";

const Product = ({id, title, image, price, rating}) => {

    const[{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch item into the dataLayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map(  (_, i) => (
                        <img
                            src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/star_2b50.png'
                            alt=''
                        />
                    ))}
                </div>
            </div>
            <img
                src={image}
                alt=''
            />

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
};

export default Product;