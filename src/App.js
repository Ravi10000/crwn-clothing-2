import './App.css';
import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';

class App extends Component {
  constructor(props){
    super()
}
  render(){
    return (
      <div className="App">
        <HomePage/>
      </div>
    )
  }
}

export default App;
