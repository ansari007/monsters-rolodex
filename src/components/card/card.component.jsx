import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (

        <div className="card-container">
            <img src="https://robohash.org/1?set=set2" alt="monster"/>
            <h1>{props.monster.name}</h1>
        </div>
    )

}