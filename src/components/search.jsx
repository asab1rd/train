import React, {useContext,useState,useEffect} from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import {DateInput} from 'semantic-ui-calendar-react'
import '../assets/search.scss'
import axios from 'axios'
import appContext from '../reducers/appContext'
import Calendar from './calendar'


export default function Search() {
    
    const context = useContext(appContext)
    const [word, setword] = useState("")
    const [foundCities, setfoundCities] = useState([])
    
    // eslint-disable-next-line
    useEffect(() => {

        context.changeSearchedWord(word)
        context.fetchFoundCities(foundCities)
        
        
    }, [foundCities, word])
    
    const onInputChange = (e) => {
        if (e.target.value) {
            setword(e.target.value)
            console.log(word)
            fetchCities()
        } else {
            setword("")
            // context.changeSearchedWord(word)
            // context.fetchFoundCities([])
            setfoundCities([])
        }
    }


    const fetchCities =()=>{
            axios
            .get(`https://api.tictactrip.eu/cities/autocomplete/?q=${word}`)
            .then(res => {
                setfoundCities(res.data)
            })
            .catch(err => {
                console.log(err)
            }) 
            console.log(context.state)
    }


    const vpop = () => console.log(context.state)

    return (
        <Form>
            <div className="search-section city" id="oki">
            <Form.Field>          
                <Input 
                    focus 
                    icon="train" 
                    iconPosition="left" 
                    className="s-depart search-input" 
                    placeholder="Saisissez votre gare de départ..." 
                    onChange={onInputChange} 
                    onClick={()=>context.changeClicked('cityDepart')}
                    value={context.state.departInput ? context.state.departInput : ""} 
                />
                <Input
                    selected
                    icon="train" 
                    iconPosition="left" 
                    className="s-arrivee search-input" 
                    placeholder="Saisissez votre gare d'arrivée..." 
                    onChange={onInputChange} 
                    onClick={()=>context.changeClicked('cityArrived')}
                    value={context.state.arrivedInput ? context.state.arrivedInput : ""} 

                />
            </Form.Field>
            </div>

            <div className="search-section date">
            <Form.Field>
                <Input  
                    icon="calendar" 
                    iconPosition="left" 
                    className="d-depart date-input" 
                    placeholder="Aller" type="button" 
                    onClick={()=>context.changeClicked('dateDepart')}
                    value={context.state.departDate ? context.state.departDate : ""} 

                />
                <Input
                    icon="calendar" 
                    iconPosition="left" 
                    className="d-arrivee date-input" 
                    placeholder="Retour" type="button" 
                    onClick={()=>context.changeClicked('dateRetour')}
                    value={context.state.returnDate ? context.state.returnDate : ""} 

                />
            </Form.Field>
            </div>

            <div className="search-section promotion">
            <Form.Field>
                <Input 
                    icon="user outline" 
                    iconPosition="left" 
                    className="promotion" 
                    placeholder="Aller" 
                    type="button" 
                    onClick={()=>context.changeClicked('promotion')}
                />
                <Button onClick={()=>context.changeClicked('promotion')}>+</Button>
            </Form.Field>
            </div>

            <div className="submit">
                <a href="#calendar" className="add-reuct">Utiliser un code de réduction</a>
                <Button positive type='submit' onClick={vpop} className="btn-submit">RECHERCHER</Button>
            </div>

        </Form>
        
    )
}
