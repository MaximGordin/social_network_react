// import React from 'react';
import {updateNewPostChangeActionCreator,addPostActionCreator} from '../../../redux/reducer-profile';
import MyPosts from './MyPosts';

import {connect} from 'react-redux';




let mapStateToProps = (state) =>{
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () =>{
            dispatch(addPostActionCreator());
        },
        changePost: (text) => {
            dispatch(updateNewPostChangeActionCreator(text));
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;