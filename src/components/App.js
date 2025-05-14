
import React from "react";
import './../styles/App.css';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../store/productSlice.js'
import Cart from './Cart.js'
import Card from './Card.js'
import Wishlist from './Wishlist.js'


const App = () => {
  const dispatch = useDispatch()
  const {data, isLoading, isError} = useSelector(state => state.product)
  console.log("data",data)

  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])


  return (
    <div>
      <div>
        <h2>All Products</h2>
        <div className="cardContainer">
          {
            data.length > 0 && data.map(product =>  <Card product={product} componentType={"home"} key={product.id} />)
          }
        </div>
      </div>
        <Wishlist />
        <Cart />
    </div>
  )
}

export default App
