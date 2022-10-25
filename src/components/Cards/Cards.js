import React from 'react'
import { imgaromatizantes, imgcanastas, imgceramicas, imgjarrones, imgplanta, imgtextiles } from '../../assets'
import './Cards.css'

export const Cards = () => {
  return (

    <>

    <h1><u>Nuestro Catalogo</u></h1>

    <br></br>

    <div className='container-fluid'>
      <div className='row'>

        <div className='col-md-4'>

        <div className="card" id='cards'>
          <img src={imgplanta} className="card-img-top" alt="imagen planta" id='imgcards'></img>
          <div className="card-body">
            <h5 className="card-title">Bandejas e individuales</h5>
            <a href="https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#6" className="btn btn-primary"> Ver mas </a>
          </div>
        </div>

        </div>

        <div className='col-md-4'>

        <div className="card" id='cards'>
          <img src={imgaromatizantes} className="card-img-top" alt="imagen planta" id='imgcards'></img>
          <div className="card-body">
            <h5 className="card-title">Aromatizantes</h5>
            <a href="https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#5" className="btn btn-primary"> Ver mas </a>
          </div>
        </div>

        </div>

        <div className='col-md-4'>

        <div className="card" id='cards'>
          <img src={imgcanastas} className="card-img-top" alt="imagen planta" id='imgcards'></img>
          <div className="card-body">
            <h5 className="card-title">Canastas</h5>
            <a href="https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#8" className="btn btn-primary"> Ver mas </a>
          </div>
        </div>

        </div>

      </div>
    </div>



    <div className='container-fluid'>
      <div className='row'>

        <div className='col-md-4'>

        <div className="card" id='cards'>
          <img src={imgjarrones} className="card-img-top" alt="imagen planta" id='imgcards'></img>
          <div className="card-body">
            <h5 className="card-title">Jarrones</h5>
            <a href='https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#9' className="btn btn-primary"> Ver mas </a>
          </div>
        </div>

        </div>

        <div className='col-md-4'>

        <div className="card" id='cards'>
          <img src={imgtextiles} className="card-img-top" alt="imagen planta" id='imgcards'></img>
          <div className="card-body">
            <h5 className="card-title">Textiles</h5>
            <a href='https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#12' className="btn btn-primary"> Ver mas </a>
          </div>
        </div>

        </div>

        <div className='col-md-4'>

        <div className="card" id='cards'>
          <img src={imgceramicas} className="card-img-top" alt="imagen planta" id='imgcards'></img>
          <div className="card-body">
            <h5 className="card-title">Ceramicas</h5>
            <a href='https://www.canva.com/design/DAE8e10OqA4/pHJ3ld7sJOOhVf-1XPE2uQ/view?utm_content=DAE8e10OqA4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#11' className="btn btn-primary"> Ver mas </a>
          </div>
        </div>

        </div>

      </div>
    </div>

 

    </>
    
  )
}
