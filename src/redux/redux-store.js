import { combineReducers, createStore } from 'redux';
import reducerDialogs from './reducer-dialogs';
import reducerProfile from './reducer-profile';
import reducerUsers from './reducer-users';




let redusers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile,
    usersPage: reducerUsers
});

let store = createStore(redusers);

window.store = store;

export default store;