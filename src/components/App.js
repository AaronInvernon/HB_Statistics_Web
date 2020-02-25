import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import AuthenticatedRoute from '../components/misc/AuthenticatedRoute'

import Login from '../components/misc/Login'
import Register from '../components/misc/Register'
import Home from '../components/misc/Home'
import Match from '../components/match/Match'

import ModalGoalContent from '../components/misc/ModalGoal'

class App extends React.Component {
  state = {
    modalVisibility: 'none'
  }

  hideModal = () => this.setState({ modalVisibility: 'none' })
  showModal = () => this.setState({ modalVisibility: 'flex' })

  render() {
    const { modalVisibility } = this.state
    const { showModal, hideModal } = this
    return (
      <div className="App">
        <div>
          <ModalGoalContent {...{ modalVisibility, hideModal }} />
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
                <Match {...{ showModal }} />
              </Route>
            {/* </AuthenticatedRoute> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
