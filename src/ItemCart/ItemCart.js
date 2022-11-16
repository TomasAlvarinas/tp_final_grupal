import React, { useContext } from 'react'
import './ItemCart.css'
import { CartContext } from '../components/context/CartContext'
import { productos } from '../data/productos';

export const ItemCart = ({ item }) => {
    /* const { title, amount, img, price, name} = item  */
    const { deleteItemToCart, addItemToCart } = useContext(CartContext)

    /* const { id } = item; */   

    return (

        <div className='cartItem'>
            <div>
            <p>
                <strong>{item.title} </strong>
            </p>
            </div>
            <div>
            <img src={item.img} alt={item.name} />
            </div>
            <div>
                <p>Cantidad: {item.amount}</p>
                <p>Total: $ {item.amount * item.price } </p>
            </div>
            {/* <hr/> */}
        </div>
    )
};

export default ItemCart;

