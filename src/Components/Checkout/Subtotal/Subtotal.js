import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {useStateValue} from "../../../State/StateProvider";
import {getBasketTotal} from "../../../State/reducer";

const Subtotal = () => {
debugger;
    const[{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items) :
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;