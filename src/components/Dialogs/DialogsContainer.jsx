// import React from 'react';
import Dialogs from './Dialogs'
import {connect} from 'react-redux';


import {updateNewMessageChangeActionCreator,addMessageActionCreator} from '../../redux/reducer-dialogs'




let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addMessage: () =>{
            dispatch(addMessageActionCreator())
        },
        changeMessage: (text) =>{
            dispatch(updateNewMessageChangeActionCreator(text));
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs); 

export default DialogsContainer;