import React from 'react'
import './styles/HomeCard.css'
import Stripes from './assets/images/stripes.svg'
const HomeCard = ({
  title,
  alignTitle
}) => {
  return (
    <div className='home-card'>
        <div className={`home-card--header ${alignTitle}`}>
          <h1>{title}</h1>
          <picture className="stripes--container">
            <img src={Stripes} alt="stripes" />
          </picture>
        </div>
        <div className="home-card--body"></div>
    </div>
  )
}

export default HomeCard