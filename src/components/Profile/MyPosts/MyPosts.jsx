import React from 'react';
import Post from './Post/Post';




const MyPost = (props) =>{

    let postElements = props.postData.map( el => <Post message={el.message}/> )

    let newPoseElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onChangePost = () => {
        let text = newPoseElement.current.value;
        props.updateNewPostChange(text);

    }
    return (
        <div>
            MyPosts
            <div className="newpost">
                <textarea onChange={onChangePost} ref={newPoseElement} value={props.newPostText}></textarea>
                <br/>
                <button onClick={addPost}>Отправить</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost;