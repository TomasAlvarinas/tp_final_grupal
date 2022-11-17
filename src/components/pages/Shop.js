import React from 'react'
import { envios, metodos } from '../../assets'
import '../pages/Shop.css'

export const Shop = () => {
  return (

    <>

    <br></br>
    
    <h1>Carrito de compras</h1>

    <br></br>

    <div>
      <h3><p>Gracias por confiar en Kalm Deco. Por favor complete los siguientes datos</p></h3>
    </div>

<br></br>
<br></br>

    <form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">Nombre completo</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Juan Perez"></input>
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">Direccion</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Av Cabildo 1200"></input>
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">Numero de Tarjeta</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="xxxx-xxxx-xxxx-xxxx"></input>
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">Fecha de Vencimiento</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="04/25"></input>
    </div>
  </div>

</form>


    {/* segunda columna */}

    <br></br>

    <form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">Emisor de la tarjeta</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="VISA"></input>
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">CVV</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="204"></input>
    </div>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck"></input>
      <label class="form-check-label" for="inlineFormCheck">
        Deseo recibir notificaciones
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Pagar</button>
  </div>

</form>

<br></br>
<br></br>

<div className='container-fluid'>
  <div className='row'>

    <div className='col-lg-6 text-center'>
      <h3>Medios de pago</h3>
      <img src={metodos} id='metodos'></img>
    </div>

    <div className='col-lg-6 text-center'>
      <h3>Envios</h3>
      <img src={envios} id='envios'></img>
    </div>

  </div>
</div>

<br></br>



    </>
  )
}
