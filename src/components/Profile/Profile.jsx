import React  from 'react';
import classes from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostsContainer';



const Profile = (props) =>{
    return (
        <main className={classes.profile}>
            Профайл
            <MyPostContainer store={props.store}/>
        </main>
    )
}

export default Profile;