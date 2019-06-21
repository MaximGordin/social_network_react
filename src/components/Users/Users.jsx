import React from 'react';
import * as axios from 'axios';


class Users extends  React.Component{

   
        
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    onFollow = (userId) =>{
        debugger;
        this.props.follow(userId);
    }
    onUnfollow = (userId) =>{
        this.props.unfollow(userId);
    }

    render() {
        return(
            <div>
            {
                this.props.users.map(el => 
                    <div key={el.id} >
                        <h3>{el.name}</h3>
                        {el.followed ?  <button onClick={()=> this.onUnfollow(el.id) }>unfollow</button> : <button onClick={()=> this.onFollow(el.id) }>follow</button>}
                       
                        <hr/>
                    </div>
                 )
            }
        </div>
        )
    }  
   

}

export default Users