import React from 'react';
import classes from './Friends.module.css';
import {NavLink} from 'react-router-dom';

const Friends = (props) => {

    let friendsElement = props.friendsData.map( (el)=> {
        return (
            <div className={classes.item}>
                <div className={classes.name}>
                    <NavLink to={`friends/${el.id }`}>  
                        {el.name} 
                    </NavLink>
                </div>
            </div>
        )
    })



    return (
        <div className={classes.friends}>
            {friendsElement}
        </div>
    )
}

export default Friends;