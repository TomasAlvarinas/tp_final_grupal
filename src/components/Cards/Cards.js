import React, { useContext } from 'react'
import { imgaromatizantes, imgcanastas, imgceramicas, imgjarrones, imgplanta, imgtextiles } from '../../assets'
import { BtnPrimary } from '../BtnPrimary'
import './Cards.css'
import { CartContext } from '../context/CartContext'
import { productos } from '../../data/productos'


export const Cards= () => {

  const { addItemToCart, } = useContext(CartContext)
  
  return (

    <>

    <h1><u>Nuestro Catalogo</u></h1>

    <div className='container'>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
            {productos.map((productos, i) => (
                <div className='col'key={productos.id}>
                    <div className='card'>
                        <img src={productos.img} className='card-img-top' alt={productos.title}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{productos.title}</h5>
                            <p className='card-text'>Precio: ${productos.price}</p>
                        </div>
                        <div className='card-footer'>
                          <BtnPrimary url={productos.url} />
                          <button className='btn btn-primary' onClick={()=> addItemToCart(productos)}>Comprar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <hr/>

    </div>

    </>
    
  )
}
