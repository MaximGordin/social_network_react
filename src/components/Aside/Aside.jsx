import React from 'react';
import classes from './Aside.module.css';
import Menu from './Menu/Menu';
import Friends from './Friends/Friends';


const Aside = () => {
    return (
        <aside className={classes.aside}>
            <Menu/>
            <Friends/>  
        </aside>
    )
}

export default Aside;