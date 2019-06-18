import React from 'react';
import Post from './Post/Post';
import {updateNewPostChangeActionCreator,addPostActionCreator} from '../../../redux/reducer-profile';
import MyPosts from './MyPosts';




const MyPostContainer = (props) =>{
   
    let state = props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let changePost = (text) => {
        props.store.dispatch(updateNewPostChangeActionCreator(text));
    }

    return (
        <MyPosts addPost={addPost} changePost={changePost} profilePage={state} />
    )
}

export default MyPostContainer;