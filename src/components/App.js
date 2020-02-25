import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import AuthenticatedRoute from '../components/misc/AuthenticatedRoute'

import Login from '../components/misc/Login'
import Register from '../components/misc/Register'
import Home from '../components/misc/Home'
import Match from '../components/match/Match'

class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <div>
          <Switch>
            {/* <AuthenticatedRoute> */}
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/signup">
                <Register/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/match">
                <Match/>
              </Route>
            {/* </AuthenticatedRoute> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
