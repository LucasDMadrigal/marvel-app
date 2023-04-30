import React from 'react'
import HomeCard from '../components/HomeCard'
import './styles/Home.css'

const Home = () => {
  return (
    <section className='main-section--home'>
    <HomeCard
    title="comics"
    alignTitle="align-title--left"
    />
    <HomeCard
    title="characters"
    alignTitle="align-title--right"
    />
    </section>

  )
}

export default Home