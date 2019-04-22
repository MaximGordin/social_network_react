import React from 'react';
import classes from './Aside.module.css';
import {NavLink} from 'react-router-dom';
const Aside = () => {
    return (
        <aside className={classes.aside}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" activeClassName={classes.active}>Пункт меню 3</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;