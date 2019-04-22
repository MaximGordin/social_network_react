
import React from 'react';

import Post from './Post/Post';


const MyPost = () =>{
    return (
        <div>
            MyPosts
            
            <Post message='Post 1'/>
            <Post message='Post 2'/>
            <Post message='Post 3'/>
            <Post message='Post 6'/>
        </div>
    )
}

export default MyPost;