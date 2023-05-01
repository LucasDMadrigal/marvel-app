import React, { useContext } from 'react'
import HomeCard from '../components/HomeCard'
import './styles/Home.css'
import { DataContext } from '../Context/ContextApi'

const Home = () => {

  const {characters, comics} = useContext(DataContext)
  console.log("🚀 ~ file: Home.jsx:9 ~ Home ~ characters:", characters)
  console.log("🚀 ~ file: Home.jsx:9 ~ Home ~ comics:", comics)

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