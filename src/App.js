import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter,Route } from 'react-router-dom'



const App = (props) => {

 
  return (
    <BrowserRouter>
      <div className="App">

        <div className="app-wrap">
          <Header />
          <Aside  aside={props.state.aside} />

          <main className='main'>
            <Route  path="/profile" render={() => <Profile  store={props.store} /> } />
            <Route  path="/dialogs" render={ () => <DialogsContainer store={props.store} /> } />
          </main>
        </div>

      </div>
    </BrowserRouter>
  );

}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit123 <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
