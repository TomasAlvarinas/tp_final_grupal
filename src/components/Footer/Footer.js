import React, { useEffect, useState } from 'react'
import './footer.css'
import { useLocalStorage } from './useLocalStorage'



export const Footer = () => {

  const [text, setText] = useLocalStorage('Nombre', '')
  const [texto, setTexto] = useLocalStorage('Email', '')
  const [texto1, setTexto1] = useLocalStorage('Telefono', '')
  const [texto2, setTexto2] = useLocalStorage('Consulta', '')


  return (

    
    <footer>  
      <div className='end'>
        <h2> <center>Kalm Deco Home</center> </h2>
        <h4> <center>Para obtener mas informacion, ingresa tus datos</center></h4>

        <form>
          <fieldset>
            <form name='formulario'>

              <div className='container-fluid'>
                <div className='row'>
              
              <div className='col-lg-6'>
              <label for="Name" className="form-label">Nombre Completo</label>
              <input type="text" aria-label="First name" className="form-control" name='nombre' id='txtName'
              onChange={e => setText(e.target.value)}
              value={text}
              required
              maxLength={45}
              ></input>
              </div> 
                            
              <div className="col-lg-6">
              <label for="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="txtEmail" placeholder='' name='txtEmail' 
              onChange={e => setTexto(e.target.value)}
              value={texto}
              required
              ></input>
              </div>

              <div className="col-lg-6">
              <label for="exampleInputCel1" className="form-label">Telefono</label>
              <input type="number" className="form-control" id="txtTelefono" placeholder='Incluí el código de area'
              onChange={e => setTexto1(e.target.value)}
              value={texto1}
              required
              maxLength={12}
              ></input>
              </div> 

              <div className="col-lg-6">
              <label for="message" className="form-label">Consulta</label>
              <textarea className='form-control' id='txtMessage' rows={3} name='txtMessage'
              onChange={e => setTexto2(e.target.value)}
              value={texto2}
              required
              ></textarea>
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

              <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" required></input>
                
                <label className="form-check-label" for="gridCheck">
                  Acepto terminos y condiciones 
                </label>
              </div>
              </div>

              <br></br>

              <div className="col-12">
              <button type="submit" class="btn btn-primary" value='submit'> Enviar </button>
              </div>


            </form>
          </fieldset>
        </form>
      </div>

    </footer>
  )
  
}
