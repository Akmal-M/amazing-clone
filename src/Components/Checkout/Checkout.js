import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import {useStateValue} from "../../State/StateProvider";

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://s3-us-west-2.amazonaws.com/heatbudimages/shahjadnationkart/images/common/aboutus-hyderabad.jpg'
                    alt=''
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>
                        Your shopping basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id=  {item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating= {item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;