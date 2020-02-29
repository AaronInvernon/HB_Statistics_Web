import React from 'react'
import { player } from '../../assets'
import  { withAuthConsumer } from '../../contexts/AuthContext'

const Header = ({currentUser, logout}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand w-50" href="/">
               <img src={player} alt="logo" className="col col-3"/> HB Statistics
            </a>
            
            <form action="/logout" method="POST" className="form-inline float-right">
                <button className="btn btn-danger" onClick={logout}>Log Out</button>
            </form>

        </nav>
    )
}

export default withAuthConsumer(Header)