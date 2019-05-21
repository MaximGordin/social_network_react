import React from 'react';
import Post from './Post/Post';
import {updateNewPostChangeActionCreator,addPostActionCreator} from '../../../redux/reducer-profile'




const MyPost = (props) =>{

    let postElements = props.profilePage.postData.map( el => <Post message={el.message}/> )

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostChangeActionCreator(text));

    }
    return (
        <div>
            MyPosts
            <div className="newpost">
               
                <textarea onChange={onChangePost} value={props.profilePage.newPostText}></textarea>
                <br/>
                <button onClick={addPost}>Отправить</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost;