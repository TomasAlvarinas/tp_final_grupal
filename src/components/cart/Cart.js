import React, { useContext, useEffect, useState } from 'react'

import { cartEmpty, cartFull } from '../../assets';
import { CartContext } from '../context/CartContext';
import { ItemCart } from '../../ItemCart/ItemCart';


import './Cart.css'
import { Link } from 'react-router-dom';



export const Cart = () => {

    const [cartOpen, setCartOpen] = useState(false);

    const [productsLength, setProductsLehgth] = useState(0);


    const { cartItems, } = useContext(CartContext)


    useEffect(() => {
        setProductsLehgth(
            cartItems?.reduce((previous, current) => previous + current.amount, 0) // reduce() Docu => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        )
    }, [cartItems]);

    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price, 0);
    
    return (
        <div
            id='icartIcon'
            onClick={() => {
                setCartOpen(!cartOpen)
            }}
            data-bs-toggle='modal'
            data-bs-target='#cartContent'

        >
        <div id='cart'>
                <img
                    alt='cart'
                    src={cartFull}
                />
                <div id='itemNum'>

                    <div>
                        {productsLength}
                    </div>

                </div>

        </div>
            

            {cartItems && cartOpen && (
                <div className='modal fade' id='cartContent' tabIndex='-1' aria-labelledby='cartContentLabel' aria-hidden='true'>
                    <div id='cartOpen' className='modal-dialog'>
                        <div className='modal-content'>
                            <h2>Tu carrito</h2>

                            {cartItems.length === 0 ? <p>Tu carrito está vacío</p> : (
                                <div>{cartItems.map((item, i) => (

                                    <ItemCart key={i} item={item} />

                                ))}</div>
                            )}

                            <h2>Total: ${total}</h2>
                            <Link to='/Shop'><button className='btn btn-primary'>Comprar</button></Link>
                                    
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}