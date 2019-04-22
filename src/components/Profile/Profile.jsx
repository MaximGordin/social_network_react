import React  from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';

const Profile = () =>{
    return (
        <main className={classes.profile}>
            Профайл
            <MyPost/>
            
        </main>
    )
}

export default Profile;