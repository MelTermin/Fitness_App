import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import SignInAndSignOut from './Components/SignInAndSignOut';
import Contact from './Components/Contact';
import Workout from './Components/Workout';
import Form from './Components/Form';
import Header from './Components/Header';
import Home from './Components/Home';
import Main from './Components/Main';

import './App.css';


function App() {

 
  return (
    <div className="page-wrapper">
    <div >
      <Header></Header>
    </div>
    
 
  <Switch>
    <div className="main-content">
     <Route exact path="/" component={Home} />
     <Route  path="/sign-in-and-sign-up" component={SignInAndSignOut} />
     <Route path={["/form", "/tracker","/tracker/:id", "/tracker"]} exact component= {Form}/>
      <Route path={["/contact", "/contactform"]}  exact component= {Contact} />
      <Route path="/workout"  exact component= {Workout} />
     <ProtectedRoute  path="/main" component={Main} />
     </div>
  </Switch>
      
  </div>
  );
}

export default App;
