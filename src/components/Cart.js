import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Card from './Card.js'
import {removeCart} from '../store/cartSlice.js'
import {addWl} from '../store/wishlistSlice.js'


export default function Cart(){
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const [quantity, setQuantity] = React.useState(1)

    function moveToWishlist(product){
        dispatch(addWl(product))
        dispatch(removeCart(product.id))
    }

    function increaseQuant(){
        setQuantity(prev => prev+1)
    }

    function decreaseQuant(){
        setQuantity(prev => prev-1)
    }

    return (
        <div id="cart">
            <div>
                <h2>Cart ({cart.length} items)</h2>
                <hr></hr>
                <div id="cartContainer">
                    {
                        cart.length > 0 && cart.map(product => {
                            return(
                                <div key={product.id} className="cartProduct">
                                    <h4>{product.title}</h4>
                                    <button onClick={()=>dispatch(removeCart(product.id))}>Remove Item</button>
                                    <button onClick={()=>moveToWishlist(product)}>move to wishlisht</button>
                                    <p>{product.price}</p>
                                    <div>
                                        <button onClick={decreaseQuant} disabled={quantity===1}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={increaseQuant}>+</button>
                                    </div>
                                    <hr></hr>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="totalAmount">
                <h3>The Total Amount</h3>
                <hr></hr>
                <div>
                    <span>Amount: </span> <span>0</span>
                </div><div>
                    <span>Shipping Charges: </span> <span>50</span>
                </div>
                <button>Checkout</button>

            </div>
        </div>
    )
}