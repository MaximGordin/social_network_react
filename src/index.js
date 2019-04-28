import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from'./redux/state.js';
import {addPost,subscribe, updateNewPostChange} from'./redux/state.js';


let renderEntireTree = (state) =>{
    ReactDOM.render(<App 
        addPost={addPost}
        newPostText={state.profilePage.newPostText}
        updateNewPostChange={updateNewPostChange}
        messagesData={state.dialogsPage.messagesData}
        dialogsData={state.dialogsPage.dialogsData}
        postData={state.profilePage.postData}
        friendsData={state.aside.friendsData} />, document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
