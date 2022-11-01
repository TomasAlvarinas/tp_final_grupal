import React from 'react'
import { caroeuge } from '../../assets'
import '../pages/Quienessomos.css'

export const Quienessomos = () => {
  return (

    <>

    <br></br>

    <h1 id='tituloquienes'>Quienes Somos</h1>

    <br></br>

    <div className="container" id='contquienes'>
            <div className="row">
                <div className="col-6">

                <strong>Nosotras</strong>

                <br></br>

                Hola! Somos Caro y Euge, dos amigas de toda la vida que nos unimos en este proyecto tan especial para poder ayudarte a conseguir cosas que hagan de tu hogar, un espacio más lindo y ameno.

                <br></br>
                <br></br>
 
                <strong>¿Como arrancamos?</strong>

                <br></br>

                Nosotras dos siempre fuimos amantes y apasionadas por el mundo de la decoración de interiores, hicimos un curso que duro 1 año en donde aprendimos un montón de técnicas
                y cosas que hoy en dia somos capaces de plasmarlas en los hogares de los demás, gracias a Kalm Deco Home

                <br></br>
                <br></br>

                <strong>Shop online </strong>

                <br></br>

                Contamos con un catálogo muy amplio de productos y objetos para decorar tu casa. Desde velas y aromatizantes que hacen placentero la convivencia en ese espacio hasta mesas y fanales que
                te brindan mucha utilidad y comodidad al mismo tiempo que le dan un plus al lugar.

                <br></br>
                <br></br>

                <strong>Escribinos por WhatsApp</strong> 
                <br></br>
                para consultar presupuestos y obtener más info.

                </div>

                <div className='col-6'>
                    <img src={caroeuge} alt='imgeugecaro' id='caroeuge'></img>

                    <br></br>
                    <br></br>

                    <strong>Asesoramiento personalizado</strong>

                    <br></br>

                    Ademas de nuestra tienda, les podemos brindar un servicio customizado que se ajusta a las preferencias y 
                    gustos de nuestros clientes para poder entender que es lo que buscan ver en el interior de su casa y asi lograr
                    trasladarlo a su hogar. Soluciones puntuales, consejos y herramientas que ayuden a mejorar tu espacio. 

                    <br></br>
                    <br></br>



                </div>

            </div>           
    </div>

    <br></br>

    </> 

  )
}
