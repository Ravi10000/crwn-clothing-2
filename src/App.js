import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';

const Hats = props => 
{
  // console.log(this);
console.log(props);
  return(
    <div>
      <h1>Hats</h1>
    </div>
)
}



function App() {

    return (
      <div className="App">
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hats}/>
        </Switch>
      </div>
    )
}

export default App;
