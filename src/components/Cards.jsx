import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Explore the features</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem src="photos/img-1 (2).jpg" text="Basic Plans available without subscription"  label="Free" path="/"/>
              <CardItem src="photos/img-2.jpg" text="More plans"  label="Premium" path="/"/>
              <CardItem src="photos/img-3.jpg" text="Ai assistant"  label="Premium" path="/"/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards