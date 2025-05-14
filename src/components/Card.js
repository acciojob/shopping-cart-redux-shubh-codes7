import React from 'react'
import {useDispatch} from 'react-redux'
import {addWl, removeWl} from '../store/wishlistSlice.js'
import {addCart, removeCart} from '../store/cartSlice.js'


export default function Card({product, componentType}){
    const dispatch = useDispatch()
    const {title, price} = product

    function handleRemove(){
        if(componentType == "wishlist") dispatch(removeWl(product.id))
        else if(componentType == "cart") dispatch(removeCart(product.id))
    }

    return(
        <div id="card">
            <h4>{title}</h4>
            <i onClick={()=> dispatch(addWl(product))}>❤️</i>
            <p>{price}</p>
            <button onClick={()=> dispatch(addCart(product))}>Add to cart</button>
            {componentType !== "home" &&<button onClick={handleRemove}>remove</button>}
        </div>
    )
}