import React from 'react';
import Post from './Post/Post';
import {updateNewPostChangeActionCreator,addPostActionCreator} from '../../../redux/state'




const MyPost = (props) =>{

    let postElements = props.postData.map( el => <Post message={el.message}/> )

    let newPoseElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = () => {
        let text = newPoseElement.current.value;
        props.dispatch(updateNewPostChangeActionCreator(text));

    }
    return (
        <div>
            MyPosts
            <div className="newpost">
                {/* <textarea onChange={dispatch(action.onChangePost)} ref={newPoseElement} value={props.newPostText}></textarea> */}
                <textarea onChange={onChangePost} ref={newPoseElement} value={props.newPostText}></textarea>
                <br/>
                <button onClick={addPost}>Отправить</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost;