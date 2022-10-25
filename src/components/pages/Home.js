import React from 'react'
import { Cards } from '../Cards/Cards'
import { Carousel } from '../Carousel/Carousel'
import { HeroBanner } from '../HeroBanner/HeroBanner'


export const Home = () => {
  return (
    
    <>
        <HeroBanner />
        <Carousel />
        <Cards />
    </>
  )
}
