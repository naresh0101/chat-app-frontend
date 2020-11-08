import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from "./Applayout"
import PrivateRoute from './components/PrivateRoute';
import Login from './container/account/login';
import Signup  from './container/account/siginup';
import Dashboard from './container/dashboard';

import { Provider } from "react-redux";
import store from "./store"

import "./index.css"

var authenticated = false;
if(localStorage.getItem("token")){
  authenticated = true
}

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
      <Switch>
        <Route  path="/login" exact component={Login} />
        <Route  path="/signup" exact component={Signup} />
        <PrivateRoute   path="/" component={Dashboard} />
      </Switch>
    </AppLayout>
    </Provider>
    
  );
}

export default App;