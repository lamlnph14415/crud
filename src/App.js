import { Switch } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';

// import Dashboard from './components/Dashboard/Dashboard';
// import Preferences from './components/Preferrences/Preferrences';

import { Home } from './components/Nav/Home';
import { AddEmployee } from './components/crud/AddEmployee';
import { EditEmployee } from './components/crud/EditEmployee';
import Loginnnn from './Page/Login';
import Nav from './components/Nav/Nav';
import Login from './Login/Login';
import UserApi from './Api/UserApi';

function App() {



  return (
    <GlobalProvider>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
          {/*  */}
          {/* <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/preferrences" component={Preferences} exact /> */}
          {/* <Route path="/loginnnn" component={Loginnnn} exact /> */}
          <Route path="/login" component={Login} exact />
          <Route path="/apiuser" component={UserApi} exact />







        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;