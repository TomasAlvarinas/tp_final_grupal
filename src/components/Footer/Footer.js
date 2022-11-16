import React from 'react'
import { ig } from '../../assets'
import './footer.css'


export const Footer = () => {
  return (
    
    <footer>  
      <div className='end'>
        <h2> <center>Kalm Deco Home</center> </h2>
        <h4> <center>Para obtener mas informacion, ingresa tus datos</center></h4>

        <form>
          <fieldset>
            <form method='post' action="contact.php">

              <div className='container-fluid'>
                <div className='row'>

              <div className='col-lg-6'>
              <label for="Name" className="form-label">Nombre Completo</label>
              <input type="text" aria-label="First name" className="form-control" name='txtName' id='txtName'></input>
              </div>

              <div className="col-lg-6">
              <label for="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="txtEmail" placeholder='' name='txtEmail'></input>
              </div>

              <div className="col-lg-6">
              <label for="exampleInputCel1" className="form-label">Telefono</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder='Incluí el código de area'></input>
              </div> 

              <div className="col-lg-6">
              <label for="message" className="form-label">Consulta</label>
              <textarea className='form-control' id='txtMessage' rows={3} name='txtMessage'></textarea>
              </div>

              </div>
              </div>


              <br></br>

              <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                <label className="form-check-label" for="gridCheck">
                  Deseo recibir notificaciones sobre los nuevos descuentos y sorteos 
                </label>
              </div>
              </div>

              <br></br>

              <div className="col-12">
              <button type="submit" class="btn btn-primary"> Enviar </button>
              </div>

            </form>
          </fieldset>
        </form>
      </div>

    </footer>
  )
}
