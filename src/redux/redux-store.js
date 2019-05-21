import { combineReducers, createStore } from 'redux';
import reducerDialogs from './reducer-dialogs';
import reducerProfile from './reducer-profile';
import reducerAside from './reducer-aside';




let redusers = combineReducers({
    dialogsPage: reducerDialogs,
    profilePage: reducerProfile,
    aside: reducerAside
});

let store = createStore(redusers);

export default store;