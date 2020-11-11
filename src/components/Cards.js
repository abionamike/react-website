import React from 'react'
import CardItem from './CardItem'

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the amazon jungle" label="Adventure" to="/services" alt="Adventure pic" />
                        <CardItem src="images/img-2.jpg" text="Travel through the Islands of Bali in a Private Cruise" label="Luxury" to="/services" alt="Luxury pic" />
                    </ul>
                    <ul className="cards-items">
                        <CardItem src='images/img-3.jpg' text='Set Sail in the Atlantic Ocean visiting Uncharted Waters' label='Mystery' to='/services' alt="Mystery pic" />
                        <CardItem src='images/img-4.jpg' text='Experience Football on Top of the Himilayan Mountains' label='Adventure' to='/products' alt='Adventure pic' />
                        <CardItem src='images/img-8.jpg' text='Ride through the Sahara Desert on a guided camel tour' label='Adrenaline' to='/sign-up' alt='Adrenalin pic' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
