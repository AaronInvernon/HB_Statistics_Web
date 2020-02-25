import React from 'react'
import { player } from '../../assets'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand w-50" href="/">
               <img src={player} alt="logo" className="col col-3"/> HB Statistics
            </a>
            
            <form action="/logout" method="POST" className="form-inline my-2 my-lg-0">
                <button className="btn btn-info mr-5">Statistics <i className="fa fa-file-text-o" aria-hidden="true"></i></button>
                <button className="btn btn-danger" type="submit">Log Out</button>
            </form>

        </nav>
    )
}

export default Header