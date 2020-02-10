import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FixedMenuLayout from './FixedMenuLayout'
import HomepageLayout from './HomepageLayout'
import NavBar from './NavBar'
//import LoginForm from './LoginForm'
import MyProfile from './MyProfile'
import LoginSignupContainer from './LoginSignupContainer'
import { BrowserRouter as Router, Route } from "react-router-dom"
// import { getQueriesForElement } from '@testing-library/react';
//state: isUserLogedIn: null

const ownersURL= "http://localhost:3000/owners"
const petsURL= "http://localhost:3000/pets"
const notesURL= "http://localhost:3000/notes"





//Fetch in here

//function setUser()

//function getUser()

//function createUser()

////function logOutUser()


class App extends React.Component {
  State = { 
  isLoggedIn: false,
  User: {}
  }
  
  renderOwnersProfile = (firstName) => {
    console.log(firstName)
    fetch(ownersURL)
    .then(res => res.json())
    .then(owners => console.log(owners))
  }
  onLogInUser = (state) => {
    this.setState({...this.state, isLoggedIn: true})
    console.log(state.name)
    this.renderOwnersProfile(state.name)
    // this.setState(prevState => {
    //   return { o}
    // })
  }


  render() {
  return (
    <div>
      <Router>
        <NavBar />

        <Route
        path="/"
        exact
        render={() => <HomepageLayout />}
        />

        <Route
          path="/login"
          exact
          render={() => 
          <LoginSignupContainer onLogInUser={this.onLogInUser}/>}
        />

        <Route
          path="/signup"
          exact
          render={() => 
          <LoginSignupContainer />}
        />
        

        <Route
        path="/profile"
        exact
        render={() => <MyProfile />}
        />


      </Router>
    </div>
  );
}
}

export default App;
