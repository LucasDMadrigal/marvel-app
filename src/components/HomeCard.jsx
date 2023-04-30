import React from 'react'
import './styles/HomeCard.css'

const HomeCard = ({
  title,
}) => {
  return (
    <div className='home-card'>
        <div className="home-card--header">
          <h1>{title}</h1>
        </div>
        <div className="home-card--body"></div>
    </div>
  )
}

export default HomeCard