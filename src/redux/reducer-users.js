const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET-USERS'


const itinUsers = {
    users: []
}


const reducerUsers = (state=itinUsers, action) =>{
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.userId){
                        return {...el, follow: true }
                    }
                    return el
                })
                
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.userId){
                        return {...el, follow: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
           return state
    }
        
}

export let followAC = (userId)=>{
    return{
        type: FOLLOW,
        userId
    }
}

export let unfollowAC = (userId)=>{
    return{
        type: UNFOLLOW,
        userId
    }
}
export let setUsersAC = (users)=>{
   
    return{
        type: SET_USERS,
        users
        
    }
}
export default reducerUsers;

