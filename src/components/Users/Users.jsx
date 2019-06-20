import React from 'react';


let Users = (props) =>{
    if(props.users.length === 0){
        props.setUsers(
            [
                {id: 5, name: 'Вася1', follow: true},
                {id: 6, name: 'Петя2', follow: false},
                {id: 7, name: 'Коля3', follow: true},
                {id: 8, name: 'Валера4', follow: true}
            ]
        )
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
                    <div  key={el.id} >
                        <h3>{el.name}</h3>
                        {el.follow ?  <button onClick={()=> onUnfollow(el.id) }>unfollow</button> : <button onClick={()=> onFollow(el.id) }>follow</button>}
                       
                        <hr/>
                    </div>
                 )
            }
        </div>
    )  
   

}

export default Users