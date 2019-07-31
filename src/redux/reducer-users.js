const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET-USERS';
const SET_CURENT_PAGE='SET-CURENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initUsers = {
    users: [],
    pageSize: 10,
    totalCount: 11,
    currentPage: 1,
    isFetching: true

}


const reducerUsers = (state=initUsers, action) =>{
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.userId){
                        return {...el, followed: true }
                    }
                    return el
                })
                
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(el => {
                    if(el.id === action.userId){
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
           return state
    }
        
}

export let follow = (userId)=>{
    return{
        type: FOLLOW,
        userId
    }
}

export let unfollow = (userId)=>{
    return{
        type: UNFOLLOW,
        userId
    }
    
}
export let setUsers = (users)=>{
    return{
        type: SET_USERS,
        users
        
    }
}
export let setPage = (page)=>{
    return{
        type: SET_CURENT_PAGE,
        page
        
    }
}
export let setTotalUserCount = (totalCount)=>{
    return{
        type: SET_TOTAL_USER_COUNT,
        totalCount
        
    }
}
export let toggleFetching = (isFetching)=>{
    return{
        type: TOGGLE_IS_FETCHING,
        isFetching
        
    }
}


export default reducerUsers;

