import React from 'react';
import Login from '../components/misc/Login'
import { Switch, Route, Redirect } from 'react-router-dom';
//import AuthenticatedRoute from '../components/misc/AuthenticatedRoute'

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
            {/* </AuthenticatedRoute> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
