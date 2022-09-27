import React from 'react';
import "./Cart.css"

const Cart = (props) => {
   const {cart}= props;
   let total = 0;
   let shipping =0;
   let quantity = 0;
   for(const product of cart){
    quantity = quantity + product.quantity;
    total =total + product.price * product.quantity;
    shipping = shipping + product.shipping;
   }
   const tax = total * 0.1;
   const ttt =parseFloat(tax.toFixed(2));

   const grandTotal =total + shipping+ ttt;

    return (
        <div className='cart'>
              <h2 className='os'>Order Summary</h2>
                   <p>Select: {quantity}</p>
                   <p>Total Price: ${total}</p>
                   <p>Total Shipping: ${shipping}</p>
                   <p>Tax: {ttt}</p>
                   <h4>Grand Total:{grandTotal.toFixed(2)}</h4>

        </div>
    );
};

export default Cart;