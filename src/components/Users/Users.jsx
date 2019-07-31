import React from 'react';
import classes from './Users.module.css';
import avatar from '../../assets/images/avatar.png'
import {NavLink} from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader'

const Users = (props) =>{
    let onFollow = (userId) =>{
        props.follow(userId);
    }
    let onUnfollow = (userId) =>{
        props.unfollow(userId);
    }

    

    let pagesCount = Math.ceil(props.totalCount/props.pageSize);
    let pages = []
    for(let i=1; i <= pagesCount ; i++){
        pages.push(i);
    }
 
    return(
        <div> 
           {props.isFetching ? <Preloader/> : null}
            <div className={classes.pagination}>
                <ul>
                    
                    {
                        
                        pages.map(el=> 
                            <li onClick={()=>props.onSetPage(el)} className={(el===props.currentPage) ? classes.active : ''}>{el}</li>
                        )
                    }
                </ul>
            </div>
        {
            
            props.users.map(el => 
                <div key={el.id} >
                    <NavLink to={`profile/${el.id}`}>
                        <img className={classes.avatar} src={el.photos.small || avatar } alt=""/>
                    </NavLink>
                    <h3>{el.name}</h3>
                    {el.followed ?  <button onClick={()=> onUnfollow(el.id) }>unfollow</button> : <button onClick={()=> onFollow(el.id) }>follow</button>}
                   
                    <hr/>
                </div>
             )
            
        }
         
    </div>
    )
}

export default Users;