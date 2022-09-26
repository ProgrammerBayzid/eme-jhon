import React from 'react';

const Cart = (props) => {
   const {cart}= props;
    return (
        <div>
              <h2 className='os'>Order Summary</h2>
                   <p>Select: {cart.length}</p>

        </div>
    );
};

export default Cart;