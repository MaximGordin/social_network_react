const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


let store = {
    _state: {
        dialogsPage: {
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
        },
    
        profilePage: {
            postData: [
                { id: 1, message: 'Post 1' },
                { id: 2, message: 'Post 2' },
                { id: 3, message: 'Post 3' },
                { id: 4, message: 'Post 4' }
            ],
            newPostText: ""
        },
    
        aside: {
            friendsData: [
                {id: 1, name: 'Катя'},
                {id: 2, name: 'Петя'},
                {id: 3, name: 'Валя'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },
    
    renderEntireTree() {
        console.log(1);
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText
    //     }
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this.renderEntireTree(this._state)
    // },
    // updateNewPostChange(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this.renderEntireTree(this._state)
    // },

    dispatch(action) {
        if(action.type ===  ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            this.renderEntireTree(this._state)
        } else if(action.type === UPDATE_NEW_POST_CHANGE){
            this._state.profilePage.newPostText = action.newText;
            this.renderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_CHANGE){
            this._state.dialogsPage.newMessageText = action.newMessage;
            this.renderEntireTree(this._state)
        } else if (action.type === ADD_MESSAGE){

            let newMessage = {
                id: 1,
                message: this._state.dialogsPage.newMessageText

            }

            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this.renderEntireTree(this._state)
        }
    }
    
}

export let addPostActionCreator = () => {
    return (
        {type: ADD_POST }
    )
}

export let updateNewPostChangeActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST_CHANGE,
            newText: text
        }
    )
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


// export  {addPost,subscribe,updateNewPostChange};
export default store;

window.store = store;