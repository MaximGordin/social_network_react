
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


const  initDialogPage = {
    dialogsData: [
        { id: 1, name: 'Катя' },
        { id: 2, name: 'Петя' },
        { id: 3, name: 'Валя' },
        { id: 4, name: 'Вася' }
    ],
    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Well' }
    ],
    newMessageText: ""
}


const reducerDialogs = (state=initDialogPage,action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_CHANGE: 
            state.newMessageText = action.newMessage;
            break;
        case ADD_MESSAGE:
                let newMessage = {
                    id: 1,
                    message: state.newMessageText
        
                }
        
                state.messagesData.push(newMessage);
                state.newMessageText = '';
                break;
                
        default: 
            return state
    }
    return state
}

export let updateNewMessageChangeActionCreator = (text) => {

    return (
        {
            type: UPDATE_NEW_MESSAGE_CHANGE,
            newMessage: text
        }
    )
}

export let addMessageActionCreator = () => {
    return (
        {type: ADD_MESSAGE }
    )
}

export default reducerDialogs;