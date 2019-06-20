import React from 'react';
import * as axios from 'axios';


let Users = (props) =>{
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
            debugger;
        })
        
    }
   

    let onFollow = (userId) =>{
        props.follow(userId);
    }
    let onUnfollow = (userId) =>{
        props.unfollow(userId);
    }
    return (
        <div>
            {
                props.users.map(el => 
                    <div key={el.id} >
                        <h3>{el.name}</h3>
                        {el.followed ?  <button onClick={()=> onUnfollow(el.id) }>unfollow</button> : <button onClick={()=> onFollow(el.id) }>follow</button>}
                       
                        <hr/>
                    </div>
                 )
            }
        </div>
    )  
   

}

export default Users