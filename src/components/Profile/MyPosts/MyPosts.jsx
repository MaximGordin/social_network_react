import React from 'react';
import Post from './Post/Post';




const MyPost = (props) =>{

    let postElements = props.postData.map( el => <Post message={el.message}/> )

    let newPoseElement = React.createRef();

    let addPost = () => {
        let text = newPoseElement.current.value;
        alert(text);
    }
    return (
        <div>
            MyPosts
            <div className="newpost">
                <textarea ref={newPoseElement}></textarea>
                <br/>
                <button onClick={addPost}>Отправить</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPost;