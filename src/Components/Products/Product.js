import React from 'react';
import './Product.css';

const Product = ({title, image, price, rating}) => {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>


                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
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

            <button onClick=''>Add to basket</button>
        </div>
    );
};

export default Product;