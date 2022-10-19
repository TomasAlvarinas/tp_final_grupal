import React from 'react'
import './footer.css'


export const Footer = () => {
  return (
    
    <footer>  
      <div className='end'>
        <h2> <center>Kalm Deco Home</center> </h2>
        <h4> <center>Para obtener mas informacion, ingresa tus datos</center></h4>

        <form>
          <fieldset>
            <form>

              <div className='container-fluid'>
                <div className='row'>

              <div className='col-lg-6'>
              <label for="inputEmail4" className="form-label">Nombre Completo</label>
              <input type="text" aria-label="First name" className="form-control"></input>
              </div>

              <div className="col-lg-6">
              <label for="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4"></input>
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

      <div class="iconos"> 

        <a href="https://www.instagram.com/kalmdeco/" class="icon"><i class="fa-brands fa-instagram fa-bounce"></i></a>
        <a href="https://www.facebook.com/people/Kalm-deco/100053256656718/?_rdr" class="icon"><i class="fa-brands fa-facebook fa-bounce"></i></a>
        
      </div> 


    </footer>
  )
}
