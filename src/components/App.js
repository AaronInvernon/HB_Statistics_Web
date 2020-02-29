import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import AuthenticatedRoute from '../components/misc/AuthenticatedRoute'

import Login from '../components/misc/Login'
import Register from '../components/misc/Register'
import Home from '../components/misc/Home'
import Match from '../components/match/Match'
import PreMatch from '../components/match/PreMatch'
import Modal from '../components/misc/Modal'


import NewTeam from '../ui/team/newTeam'
import NewPlayer from '../ui/team/newPlayer'
import ModalGoalContent from '../ui/ModalContent'


import AuthenticatedRoute from './misc/AuthenticatedRoute';

class App extends React.Component {
  state = {
    modalVisibility: false
  }

  hideModal = () => this.setState({ modalVisibility: false })
  showModal = () => this.setState({ modalVisibility: true })

  render() {
    const { modalVisibility } = this.state
    const { showModal, hideModal } = this
    return (
      <div className="App">
        <div>
          {
            modalVisibility ?
              <Modal>
                <ModalGoalContent {...{ hideModal }} />
              </Modal> : null
          }
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Register />
            </Route>
            <AuthenticatedRoute>

              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/match">
                <Match {...{ showModal }} />
              </Route>

              <Route exact path="/match/new">
                <PreMatch />
              </Route>

              <Route exact path="/team/new">
                <NewTeam />
              </Route>

              <Route exact path="/team/player">
                <NewPlayer />
              </Route>
            </AuthenticatedRoute>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
