import React from 'react'
import { player } from '../../assets'
import  { withAuthConsumer } from '../../contexts/AuthContext'


const Header = ({currentUser, logout}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand w-50" href="/">
               <img src={player} alt="logo" className="col col-3"/> HB Statistics
            </a>
            
                <button className="btn btn-danger float-right" onClick={logout}>Log Out</button>
     

        </nav>
    )
}

export default withAuthConsumer(Header)