import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Store';

function NonVeg() {
  const dispatch1 = useDispatch();
 const nonVegProducts =  useSelector(state=>state.products.nonVeg);
 const items = nonVegProducts.map((product,index)=>
  <li key={index}>
 <div className="product-item">
    <div className="product-info">
        <span >{product.name} - ${product.price.toFixed(2)}</span>
        <button className="add-to-cart-btn" onClick={()=>dispatch1(addToCart(product))}>Add to Cart</button>
    </div>
</div>
  </li>
);
  return (
    <>
    <h1 style={{ color: 'blue', textAlign:'center'}}> Non-Veg Items</h1>
    <ul style={{ color: 'black' }}>
      {items}
    </ul>
    </>
  )
}

export default NonVeg