import React, { useContext } from 'react'
import './ItemCart.css'
import { CartContext } from '../components/context/CartContext'

export const ItemCart = ({ item }) => {
    const { title, amount, id, img, price} = item
    const { deleteItemToCart, addItemToCart } = useContext(CartContext)
    return (

        <div className='cartItem'>
            <p>
                {title} 
            </p>
            <img src={img} alt="" />
            <div>
                {amount}
                <p>Total: $ {amount * price } </p>
            </div>
            <hr/>
        </div>
    )
}

