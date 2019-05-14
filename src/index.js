import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from'./redux/state.js';
// import {addPost,subscribe, updateNewPostChange} from'./redux/state.js';


let renderEntireTree = (state) =>{
       
    ReactDOM.render(<App 
        dispatch={store.dispatch.bind(store)}
        
        newPostText={state.profilePage.newPostText}
        messagesData={state.dialogsPage.messagesData}
        dialogsData={state.dialogsPage.dialogsData}
        postData={state.profilePage.postData}
        friendsData={state.aside.friendsData} />, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
