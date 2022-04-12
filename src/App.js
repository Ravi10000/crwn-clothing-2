import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import {auth, createUserProfileDocument} from './firebase-config.js'
import {onAuthStateChanged} from 'firebase/auth';
import {onSnapshot} from 'firebase/firestore';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    currentUser: null,
  }

}
unSubscribeFromAuth = null;

componentDidMount(){
  this.unSubscribeFromAuth = onAuthStateChanged(auth, async(userAuth)=>{
      // this.setState({currentUser: user}, ()=> console.log(this.state.currentUser))
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      onSnapshot(userRef, (snapshot)=>{
        this.setState({
        currentUser: {
          id: snapshot.id,
          ...snapshot.data(),
        }
        }, ()=> console.log('Current User',this.state.currentUser))
      });
     }else{
       this.setState({currentUser: userAuth}) // null
     }
      
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth()
}


render(){

  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInSignUpPage}/>
      </Switch>
    </div>
  )
}
}

export default App;
