
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
            ]
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


    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this.renderEntireTree(this._state)
    },
    updateNewPostChange(newText) {
        this._state.profilePage.newPostText = newText;
        this.renderEntireTree(this._state)
    },

    dispatch(action) {

    }
    
}


// export  {addPost,subscribe,updateNewPostChange};
export default store;

window.store = store;