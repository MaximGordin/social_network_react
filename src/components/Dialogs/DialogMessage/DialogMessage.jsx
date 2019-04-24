import React from 'react';
import classes from './DialogMessage.module.css';





const DialogMessage = (props) => {
    return(
        <div className={classes.item}>
        
            {props.message}
        
        </div>
    )
}


export default DialogMessage;