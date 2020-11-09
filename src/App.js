import React from 'react';
import './App.css';
import Chat from './Chat';
import Header from './Header';
import Room from './Room';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch]=useStateValue();
  
  return (
    
     
    <div className="app">
      {
        !user ? (
          <Login/>
        ):(
          <Router>
          <Header/>
          <Switch>
            <Route path='/room/:roomId'>
              <Room/>
            </Route>
          
            <Route path='/'>
            <Chat/>
            </Route>
  
          </Switch>
        </Router>

        )
      }
    
    
     
      
   
      
    </div>
  );
}

export default App;
