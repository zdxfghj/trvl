import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import page9 from '../images/img-9.jpg' 
import page2 from '../images/img-2.jpg'
import page3 from '../images/img-3.jpg' 
import page4 from '../images/img-4.jpg' 
import page8 from '../images/img-8.jpg' 

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={page9}
              text = "Explore the hidden waterfall dep inside the Amazon Jungle"
              label="Adventure"
              path='/services'
            />
            <CardItem 
              src={page2}
              text = "Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={page3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={page4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={page8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

