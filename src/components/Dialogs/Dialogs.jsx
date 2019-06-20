import React from 'react';
import classes from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage'



const Dialogs = (props) => {
    let dialogUserElements = props.dialogsPage.dialogsData.map( el => <DialogUser key={el.id} name={el.name} id={el.id}/>)
    let dialogMessageElements = props.dialogsPage.messagesData.map( el => <DialogMessage key={el.id} message={el.message}/>)

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.changeMessage(text);
    }

    let onAddMessage = () => {
        props.addMessage();
    }

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
                    <textarea value={props.dialogsPage.newMessageText} onChange={onChangeMessage}></textarea>
                    <button onClick={onAddMessage}>Отправить</button>
                </div>
                
            </div>
        </div>


    )
}

export default Dialogs;