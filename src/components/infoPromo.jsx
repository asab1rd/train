import React from 'react'
import {Icon} from 'semantic-ui-react'
function infoPromo(props) {
    return (
        <div className="promo-info-container">
            {
            // CONTIENT CONNECTION ET CARTE DE REDUCTION
            props.infos.map((item,i)=>(
                <div className={`promo-info-${i}`} key={i}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <a href="https://instagram.com/artkodes"> <Icon name={item.button.icon} />
                            {item.button.title}
                        </a>
                    </div>
                ))
            }

         </div>
    )
}

export default infoPromo
