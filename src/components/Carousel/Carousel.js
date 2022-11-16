import React from 'react'
import { vid1, vid2, vid3 } from '../../assets'
import './carousel.css'

export const Carousel = () => {
  return (

    <div className='text-center'>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
        <div className='carousel-indicators'>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval='2000'>
            <video src={vid2} alt="Video01" autoPlay muted loop type="video/mp4"></video>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <video src={vid1} alt="Video01" autoPlay muted loop type="video/mp4"></video>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <video src={vid3} alt="Video01" autoPlay muted loop type="video/mp4"></video>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>


        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>
    </div>
    
  )
}
