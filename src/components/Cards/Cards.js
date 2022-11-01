import React from 'react'
import { imgaromatizantes, imgcanastas, imgceramicas, imgjarrones, imgplanta, imgtextiles } from '../../assets'
import { BtnPrimary } from '../BtnPrimary'
import './Cards.css'

export const Cards = ({data}) => {
  return (

    <>

    <h1><u>Nuestro Catalogo</u></h1>

  

    <div className='container'>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
            {data.map(({id, title, text, img, url}) => (
                <div className='col'key={id}>
                    <div className='card'>
                        <img src={img} className='card-img-top' alt={title}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'>{text}</p>
                        </div>
                        <div className='card-footer'>
                          <BtnPrimary url={url} />
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
