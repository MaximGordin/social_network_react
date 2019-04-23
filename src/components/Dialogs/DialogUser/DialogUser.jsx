import React from 'react';
import {NavLink} from 'react-router-dom';



const DialogUser = (props) => {
    return(
        <div className="dialogs-item">
            <NavLink  to={`/dialogs/${props.id}`} >{props.name}</NavLink> 
        </div>
    )
}



export default DialogUser;