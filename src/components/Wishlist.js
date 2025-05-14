import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Card from './Card.js'


export default function Wishlist(){
    const wishlist = useSelector(state => state.wishlist)

    return (
        <div>
            <h2>Wishlist</h2>
            <div className="cardContainer">
                {
                    wishlist.length > 0 && wishlist.map(product => <Card product={product} componentType={"wishlist"} key={product.id} />)
                }
            </div>
        </div>
    )
}