import React from 'react';
import Post from './Post/Post';







const MyPost = (props) =>{
    let postElements = props.postData.map( el => <Post message={el.message}/> )
    return (
        <div>
            MyPosts
            <div className="newpost">
                <textarea></textarea>
                <br/>
                <button>Отправить</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost;