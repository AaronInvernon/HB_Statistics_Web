import React from 'react'
import { withAuthConsumer } from '../../contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom'

const AuthenticatedRoute = (props) => {
    console.info('props => ', props)
    if (!props.currentUser) {
        return <Redirect to="/login"/>
    } else {
        return <Route {...props} />
    }
}

export default withAuthConsumer(AuthenticatedRoute);