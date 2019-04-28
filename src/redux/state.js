let renderEntireTree = () => {
    console.log(1);
}

let state = {
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Катя' },
            { id: 2, name: 'Петя' },
            { id: 3, name: 'Валя' },
            { id: 4, name: 'Вася' }
        ],
        messagesData: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you' },
            { id: 3, message: 'Well' }
        ]
    },

    profilePage: {
        postData: [
            { id: 1, message: 'Post 1' },
            { id: 2, message: 'Post 2' },
            { id: 3, message: 'Post 3' },
            { id: 4, message: 'Post 4' }
        ],
        newPostText: ""
    },

    aside: {
        friendsData: [
            {id: 1, name: 'Катя'},
            {id: 2, name: 'Петя'},
            {id: 3, name: 'Валя'}
        ]
    }
}


let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state)
}

let updateNewPostChange = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state)
}

const subscribe = (observer) => {
    renderEntireTree = observer;
}

export  {addPost,subscribe,updateNewPostChange};
export default state;