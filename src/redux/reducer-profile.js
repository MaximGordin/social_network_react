const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'


const initProfilePage = {
    postData: [
        { id: 1, message: 'Post 1' },
        { id: 2, message: 'Post 2' },
        { id: 3, message: 'Post 3' },
        { id: 4, message: 'Post 4' }
    ],
    newPostText: "",
    profile: null
}

const reducerProfile = (state=initProfilePage,action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {id: 5,message: state.newPostText};
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_CHANGE:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
             
            return {
                ...state,
                profile: action.profile
            }
                
        default: 
            return state
    }

    // return state
}

export let addPostActionCreator = () => {
    return (
        {type: ADD_POST }
    )
}

export let updateNewPostChangeActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST_CHANGE,
            newText: text
        }
    )
}

export let setUserProfile = (profile) =>{

    return{
        type: SET_USER_PROFILE,
        profile
    }
}
export default reducerProfile