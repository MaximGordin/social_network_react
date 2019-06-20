import React from 'react';
import classes from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (

            <nav className={classes.mainNav}>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                    </li>
                    
                </ul>
            </nav>
          
    )
}

export default Menu;