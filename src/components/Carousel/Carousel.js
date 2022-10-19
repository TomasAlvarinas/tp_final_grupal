import React from 'react'
import './carousel.css'

export const Carousel = () => {
  return (

    <div className='text-center'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        
        <div className='carousel-indicators'>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <video src= "./Assets/videos/WhatsApp Video 2022-08-25 at 8.25.47 PM.mp4" alt="Video01" autoplay muted loop height="525px" type="video/mp4"></video>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item">
            <video src= "./Assets/videos/2.mp4" alt="Video01" autoplay muted loop height="525px" type="video/mp4"></video>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item">
            <video src= "./Assets/videos/1.mp4" alt="Video01" autoplay muted loop height="525px" type="video/mp4"></video>
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
