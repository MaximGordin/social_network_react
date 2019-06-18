import React from 'react';
import Post from './Post/Post';



const MyPost = (props) =>{

    let postElements = props.profilePage.postData.map( el => <Post message={el.message}/> )

    let onAddPost = () => {
        props.addPost();
    }

    let onChangePost = (e) => {
        let text = e.target.value;
        props.changePost(text);
    }

    return (
        <div>
            MyPosts
            <div className="newpost">
               
                <textarea onChange={onChangePost} value={props.profilePage.newPostText}></textarea>
                <br/>
                <button onClick={onAddPost}>Отправить</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost;