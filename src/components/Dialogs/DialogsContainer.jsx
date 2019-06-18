import React from 'react';
import Dialogs from './Dialogs'

import {updateNewMessageChangeActionCreator,addMessageActionCreator} from '../../redux/reducer-dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    
    let changeMessage = (text) => {
        props.store.dispatch(updateNewMessageChangeActionCreator(text));
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }


    return (
        <Dialogs addMessage={addMessage} changeMessage={changeMessage } dialogsPage={state}/>
    )
}

export default DialogsContainer;