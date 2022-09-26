import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css"

const Product = (props) => {
    const {addToCart} = props;
    const { id,category,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity}=props.product;
 

    

    return (
        <div className='product'>
          <img src={img } alt="" />
          <div className='product-info'>
          <p className='pro'>Name: {name}</p>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings}</p>
          </div>
          <div>
          <button onClick={()=>addToCart(props.product)} className='btn'><p>Add To Cart</p>
          <FontAwesomeIcon  icon={faShoppingCart} ></FontAwesomeIcon></button>
          </div>
        </div>
    );
};

export default Product;