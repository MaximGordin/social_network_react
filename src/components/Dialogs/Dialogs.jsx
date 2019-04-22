import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
const Dialogs = (props) => {
    return (

        <div className={classes.dialogsWrap}>
            <div className={classes.dialogs}>
                <div className="dialogs-item">
                    <NavLink to="/dialogs/1">Сергей</NavLink>
                </div>
                <div className="dialogs-item">
                    <NavLink to="/dialogs/2">Катя</NavLink>
                </div>
                <div className="dialogs-item">
                    <NavLink to="/dialogs/3">Петя</NavLink>
                </div>
                <div className="dialogs-item">
                    <NavLink to="/dialogs/4">Вася</NavLink>
                </div>
            </div>
            <div className="message">
                <div className="message-item">Hellow</div>
                <div className="message-item">How are you?</div>
                <div className="message-item">Good morning</div>

            </div>
        </div>


    )
}

export default Dialogs;