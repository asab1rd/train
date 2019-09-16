import React from 'react'
import Search from './search'
import '../assets/left.scss'

export default function leftContainer() {
    return (
        <div className="left-container">
            <div className="left-title">
                <h3>Quel est votre trajet ?</h3>
            </div>       

            <Search></Search>
        </div>
    )
}
