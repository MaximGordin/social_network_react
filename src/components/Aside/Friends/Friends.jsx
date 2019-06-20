import React from 'react';
import classes from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return (
        <div className={classes.friends}>
           
            <div className={classes.name}>
            <NavLink to={`friends/1`}>
                Вася
            </NavLink>
            </div>
       
       
            <div className={classes.name}>
            <NavLink to={`friends/1`}>
                Вася
            </NavLink>
            </div>
        
        
            <div className={classes.name}>
                <NavLink to={`friends/1`}>
                    Вася
                </NavLink>
            </div>
     
        </div>
    )
}
            
export default Friends;