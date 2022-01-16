import logo from './logo.svg';
import './App.css';
//import Header from './components/header/header.component'
// import Router from './components/header/Routes.component';
import { useState,useEffect } from 'react';
// import Main from './components/Staff/Main.component';
// import SignIn from './components/Auth/Signin.component';
// import Dashboard from "./components/Staff/Dashboard.component";
// import Info from "./components/Staff/Info.component";
// import Students from "./components/Staff/Students.component";
// import Attendance from "./components/Staff/Attendance.component";
// import Navbar from './components/Staff/Navbar.component';
// import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/layout/TopNavbar";
import Landing from "./components/layout/Landing";
import Login from "./components/Auth/Login.component";
import Register from "./components/Auth/Register.component";
import PrivateRoute from "./routings/PrivateRoute";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";
import { BrowserRouter } from 'react-router-dom';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}


function App() {
  useEffect(() => {
		store.dispatch(loadUser());
	}, []);
    return (
    <div className="App">
      
      <Router>
      <TopNavbar />
      <Switch>
      <Route exact path="/" component={Landing}/>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="" component={NotFound} />
      </Switch>
        {/* 
        <Route path="/main" component={Main} />
        
        <Route path="/info" component={Info} />
        <Route path="/students" component={Students} />
        <Route path="/attendance" component={Attendance} /> */}
        {/* <Route exact path="/" component={Landing} /> */}
						{/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
						
						
						
         */}
        
      </Router>
    </div>
  );
}

export default App;
