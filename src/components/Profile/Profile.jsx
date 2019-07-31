import React  from 'react';
import classes from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Common/Preloader/Preloader';


const Profile = (props) =>{
   
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <main className={classes.profile}>
            Профайл {props.profile.fullName}
            Профайл {props.profile.contacts.vk}
            <MyPostContainer store={props.store}/>
        </main>
    )
}

export default Profile;