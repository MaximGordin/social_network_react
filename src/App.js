import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route } from 'react-router-dom';


const App = (props) => {

  return (
   
      <div className="App">

        <div className="app-wrap">
          <Header />
          <Aside/>

          <main className='main'>
            <Route  path="/profile" render={() => <Profile/> } />
            <Route  path="/dialogs" render={ () => <DialogsContainer /> } />
            <Route  path="/users" render={ () => <UsersContainer/> } />
          </main>
        </div>

      </div>
   
  );

}


export default App;
