import React  from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';



const Profile = (props) =>{
    return (
        <main className={classes.profile}>
            Профайл
            <MyPost newPostText={props.newPostText}  dispatch={props.dispatch} postData={props.postData} />
        </main>
    )
}

export default Profile;