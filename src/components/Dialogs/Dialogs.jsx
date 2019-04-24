import React from 'react';
import classes from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage'

const Dialogs = (props) => {

  

    let dialogUserElements = props.dialogsData.map( el => <DialogUser name={el.name} id={el.id}/>)
    let dialogMessageElements = props.messagesData.map( el => <DialogMessage message={el.message}/>)

    // let addMessage = () => {

    // }

    return (
        <div className={classes.dialogsWrap}>
            <div className={classes.dialogs}>
               {dialogUserElements}
            </div>
            <div className={classes.message}>
                <div className={classes.messageArea}>
                    {dialogMessageElements}
                </div>
                <div className="newMessage">
                    {/* <textarea ref={}></textarea>
                    <button onClick={addMessage}>Отправить</button> */}
                </div>
                
            </div>
        </div>


    )
}

export default Dialogs;