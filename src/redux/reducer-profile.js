const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const ADD_POST = 'ADD-POST';


const initProfilePage = {
    postData: [
        { id: 1, message: 'Post 1' },
        { id: 2, message: 'Post 2' },
        { id: 3, message: 'Post 3' },
        { id: 4, message: 'Post 4' }
    ],
    newPostText: ""
}

const reducerProfile = (state=initProfilePage,action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText
            }
            state.postData.push(newPost);
            state.newPostText = "";
            break;
        case UPDATE_NEW_POST_CHANGE:
            state.newPostText = action.newText;
            break;
                
        default: 
            return state
    }

    return state
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
export default reducerProfile