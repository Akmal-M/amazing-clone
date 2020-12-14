import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal/Subtotal";

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://s3-us-west-2.amazonaws.com/heatbudimages/shahjadnationkart/images/common/aboutus-hyderabad.jpg'
                    alt=''
                />

                <div>
                    <h2 className='checkout__title'>
                        Your shopping basket
                    </h2>
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;