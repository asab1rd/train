import React, {useContext, useEffect, useState} from 'react'
import '../assets/right.scss'
import ShowCities from './showCities'
import appContext from '../reducers/appContext'
import Calendar from './calendar'
import AddPromo from './addPromo'
export default function RightContainer() {

     const context = useContext(appContext)
     const initialState = <div className="none"></div>
     const [componentShow, setcomponentShow] = useState(initialState)
     const [componentTitle, setcomponentTitle] = useState("WELCOME")
     const [arrowbtn, setarrowbtn] = useState('')

    useEffect(() => {

        // On montre un composant en fonction de l'input qui a été cliqué
        if (context.state.clickedInput === "cityDepart"){
            setcomponentShow(<ShowCities nature="cityDepart"/>)
            setcomponentTitle("Choisissez une gare de départ")
            setarrowbtn('city-depart')
        }
        else if (context.state.clickedInput === "cityArrived"){
            setcomponentShow(<ShowCities nature="cityArrived"/>)
            setcomponentTitle("Choisissez une gare d'arrivée")
            setarrowbtn('city-arrived')
        }
        else if (context.state.clickedInput === "dateDepart"){
            setcomponentShow(<Calendar nature="departDate"/>)
            setcomponentTitle("Choisissez la date du départ")
            setarrowbtn('date-depart')

        }
        else if (context.state.clickedInput === "dateRetour"){
            setcomponentShow(<Calendar nature="returnDate"/>)
            setcomponentTitle("Choisissez la date du retour")
            setarrowbtn('date-retour')
        }
        else if (context.state.clickedInput === "promotion"){
            setcomponentShow(<AddPromo/>)
            setcomponentTitle("Choisissez vos passagers")
            setarrowbtn('btn-promo')

        }
        
    }, [context.state.clickedInput])
    return (
        <div className="right-container">
            <div className={`right-pannel-arrow ${arrowbtn}`}>
                
            </div>
            <div className="right-title">
                <h3>{componentTitle}</h3>
                
            </div>

            {componentShow}
            
        </div>
    )
}
