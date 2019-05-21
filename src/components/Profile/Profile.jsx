import React  from 'react';
import classes from './Profile.module.css';
import MyPost from './MyPosts/MyPosts';



const Profile = (props) =>{
    return (
        <main className={classes.profile}>
            Профайл
            <MyPost profilePage={props.profilePage}  dispatch={props.dispatch}/>
        </main>
    )
}

export default Profile;