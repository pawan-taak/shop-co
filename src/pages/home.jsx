import React from 'react'
import Hero from '../componets/home/hero'
import Partner from '../componets/home/partner'
import Arrival from '../componets/home/arrival'
import Browse from '../componets/home/browse'
import Review from '../componets/home/review'
import Selling from '../componets/home/top_selling'

const Home = () => {
  return (
    <>
        <Hero />
        <Partner />
        <Arrival />
        <Selling/>
        <Browse/>
        <Review/>
    </>
  )
}

export default Home