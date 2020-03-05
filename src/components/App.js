import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import AuthenticatedRoute from '../components/misc/AuthenticatedRoute'

import Login from '../components/misc/Login'
import Register from '../components/misc/Register'
import Home from '../components/misc/Home'
import Match from '../components/match/Match'
import PreMatch from '../components/match/PreMatch'
import MatchList from '../components/match/MatchesList'
import Modal from '../components/misc/Modal'
import TeamList from '../components/team/TeamsList'


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
    const { showModal, hideModal, addGoal } = this
    return (
      <div className="App">
        <div>
          {
            modalVisibility ?
              <Modal>
                <ModalGoalContent {...{ hideModal, addGoal }} />
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

              <Route exact path="/new/match">
                <PreMatch />
              </Route>

              <Route exact path="/matches/:id" render={(props) =>
                <Match  showModal={showModal} {...props} />
              }>
                
              </Route>

              <Route exact path="/teams/">
                <TeamList />
              </Route>
            
              <Route exact path="/matches/">
                <MatchList />
              </Route>

              <Route exact path="/teams/new">
                <NewTeam />
              </Route>

              <Route exact path="/teams/:id/players" component={NewPlayer}/>
              
            </AuthenticatedRoute>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
