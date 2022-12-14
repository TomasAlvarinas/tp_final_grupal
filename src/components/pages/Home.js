import React from 'react'
import { productos } from '../../data/productos'
import { Cards } from '../Cards/Cards'
import { Carousel } from '../Carousel/Carousel'
import { HeroBanner } from '../HeroBanner/HeroBanner'


export const Home = () => {
  return (
    
    <>
        <HeroBanner />
        <Carousel />
        <br></br>
        <br></br>
        <Cards data={productos} />
    </>
  )
}
