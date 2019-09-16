import React, {useState} from 'react'
import {Input, Button,Icon} from 'semantic-ui-react'
import InfoPromos from './infoPromo'
function AddPromo() {
    const infos = [
        {title:'Retrouver vos passagers sauvegardés ?', 
         desc:"Connectez-vous à votre compte pour accéder aux passagers enregistrés lors de vos précédentes recherches.", 
         button: {
            title: 'SE CONNECTER',
            icon : 'log out'
            }
        },
        {title:'Économisez grâce aux cartes de réduction', 
         desc:"Bénéficiez de réductions sur vos voyages en train tout au long de l'année.",
         button: {
            title: 'ACHETER UNE CARTE DE RÉDUCTION',
            icon : 'address card outline'
            }
        }
        
    ]


    const [selected, setselected] = useState('adult')
    const [passengers, setcountPassengers] = useState(["adult"])
    const handleChange = e =>{
        setselected(e.target.value)
    }

    

    const addPromoClick = () => {
        passengers[0] = selected
        setcountPassengers(...passengers, passengers)
    }
    
   

    const passengerSelect = 
            <div className="profil-select">
                <span className="list">
                    <select name="select-items" id="solved" onChange={handleChange}>
                        <option value="adult">Adulte (26-59)</option>
                        <option value="youth">Jeune (0-25)</option>
                        <option value="senior">Senior (60)</option>
                    </select>
                </span>
                <div className="promo">
                    {selected === "youth" ?  
                        <Input action='OK' type='number' placeholder='age' />
                        : <Button basic color='orange' content='Cartes et Abonnements'  />
                }
                </div>
                
            </div>

    return (
        <div className="promo-add-passenger">
            {passengerSelect}
            
            <div className="add-promo">
                    <Button icon onClick={addPromoClick} className="btn-add-promo">
                        <Icon name='user' />
                        <span>AJOUTER UN PASSAGER </span>
                        
                    </Button>
            </div>
            <InfoPromos infos={infos}/>
        </div>
    )
}

export default AddPromo
