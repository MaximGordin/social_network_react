import React from 'react';
import classes from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage'

const Dialogs = (props) => {

  

    let dialogUserElements = props.dialogsData.map( el => <DialogUser name={el.name} id={el.id}/>)
    let dialogMessageElements = props.messagesData.map( el => <DialogMessage message={el.message}/>)

    return (
        <div className={classes.dialogsWrap}>
            <div className={classes.dialogs}>
               {dialogUserElements}
            </div>
            <div className="message">
                {dialogMessageElements}
            </div>
        </div>


    )
}

export default Dialogs;