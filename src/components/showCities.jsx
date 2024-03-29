import React, { useEffect, useContext, useState } from 'react'
import {List, Button, Icon} from 'semantic-ui-react'
import appContext from '../reducers/appContext'
export  default function ShowCities (props){

    const context = useContext(appContext)
    const [showPopular, setshowPopular] = useState(true)


    useEffect(() => {
        // showPopular Est vrai que si on a pas encore tapé pour chercher une ville 
        setshowPopular(context.state.searchedWord === "" ? true:false)
    }, [context.state.searchedWord])
    
    const handleClick = (name) =>{
        //Si on clique sur l'input depart on l'inscit dans le contexte
        // Pareil pour tous les autres button presents sur le composant gauche 
        props.nature === "cityDepart" ? 
            context.setDepartInput(name):context.setArrivedInput(name)
    }

    return (
            <div className="city-container">
                    <List className="city-choice">
                        <Button.Group basic vertical>
                            {   
                                // CHECK SI ELLE DOIT AFFICHER LES VILLES POPULAIRES OU LES VILLES TOUVEES
                                 
                                showPopular ?
                                    context.state && context.state.popularCities.map((item,i) => {
                                        return <Button key={i}  onClick={()=>handleClick(item.local_name)}>
                                                <List.Item >
                                                    <List.Icon name='map marker alternate' />
                                                    <List.Content>
                                                        <List.Header as='a'>{item.local_name}</List.Header>       
                                                    </List.Content>
                                            </List.Item>
                                            </Button> 
                                    }) : context.state && context.state.foundCities.slice(0,7).map((item,i) => {
                                        return <Button key={i} onClick={()=>handleClick(item.local_name)}>
                                                <List.Item >
                                                    <List.Icon name='map marker alternate' />
                                                    <List.Content>
                                                        <List.Header as='a'>{item.local_name}</List.Header>
                                                        
                                                    </List.Content>
                                            </List.Item>
                                            </Button> 
                                    }) 
                            }
                        </Button.Group>                        
                    </List>
                <Button className="btn-via">
                    <Icon name='map marker' />
                    VIA
                </Button>
            </div>
    )
    
}

